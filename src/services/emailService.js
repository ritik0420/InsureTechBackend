const nodemailer = require('nodemailer');

function getTransporter() {
  const user = (process.env.GMAIL_USER || '').trim();
  const pass = (process.env.GMAIL_APP_PASSWORD || '').trim();
  if (!user || !pass) {
    throw new Error('Email is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.');
  }
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });
}

/** Escape user-controlled strings for HTML email bodies. */
function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatContactPreference(v) {
  const t = String(v || '').toLowerCase();
  if (t === 'whatsapp') return 'WhatsApp';
  if (t === 'icall') return 'Phone call';
  return v ? String(v) : '';
}

function formatLeadBody(payload) {
  const contactLabel = formatContactPreference(payload.contactVia) || '—';
  const lines = [
    'New enrollment / lead submission',
    '',
    `Enrolling for: ${payload.enrollFor === 'someone_else' ? 'Someone else' : 'Me'}`,
    `Name: ${payload.firstName} ${payload.lastName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || '—'}`,
    `Preferred contact: ${contactLabel}`,
    `Interest: ${payload.interestType === 'services' ? 'Services' : 'Courses'}`,
  ];
  if (payload.interestType === 'courses' && payload.course) {
    lines.push(`Course: ${payload.course}`);
  }
  if (payload.interestType === 'services' && payload.service) {
    lines.push(`Service: ${payload.service}`);
  }
  if (payload.alternativeContact) {
    lines.push(`Alternative contact: ${payload.alternativeContact}`);
  }
  lines.push('');
  lines.push(`Submitted: ${new Date().toISOString()}`);
  return lines.join('\n');
}

function buildLeadEmailHtml(payload) {
  const fullName = `${payload.firstName} ${payload.lastName}`.trim();
  const contactPref = formatContactPreference(payload.contactVia) || '—';
  const interest = payload.interestType === 'services' ? 'Services' : 'Courses';
  const enrollLabel = payload.enrollFor === 'someone_else' ? 'Someone else' : 'Self';
  const detail =
    payload.interestType === 'courses' && payload.course
      ? escapeHtml(payload.course)
      : payload.interestType === 'services' && payload.service
        ? escapeHtml(payload.service)
        : '—';
  const detailLabel = payload.interestType === 'services' ? 'Service' : 'Course';
  const alt = payload.alternativeContact ? escapeHtml(payload.alternativeContact) : null;
  const submitted = escapeHtml(
    new Date().toLocaleString(undefined, {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  );

  const preheader = `New lead: ${fullName} · ${payload.email}`;

  const row = (label, valueHtml) => `
  <tr>
    <td style="padding:14px 20px;border-bottom:1px solid #e8eef3;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;font-size:12px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.04em;width:38%;vertical-align:top;">${label}</td>
    <td style="padding:14px 20px;border-bottom:1px solid #e8eef3;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;font-size:15px;line-height:1.5;color:#0f172a;vertical-align:top;">${valueHtml}</td>
  </tr>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>New lead</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;-webkit-font-smoothing:antialiased;">
  <span style="display:none!important;visibility:hidden;mso-hide:all;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">${escapeHtml(preheader)}</span>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f1f5f9;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,0.08);border:1px solid #e2e8f0;">
          <tr>
            <td style="background:linear-gradient(135deg,#0c1a2b 0%,#1199b6 100%);padding:28px 24px;text-align:left;">
              <p style="margin:0 0 6px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;font-size:11px;font-weight:600;color:rgba(255,255,255,0.75);letter-spacing:0.12em;text-transform:uppercase;">InsureTech · Lead capture</p>
              <h1 style="margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;font-size:22px;font-weight:700;color:#ffffff;line-height:1.3;">New enrollment request</h1>
              <p style="margin:10px 0 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;font-size:14px;color:rgba(255,255,255,0.9);line-height:1.5;">Reply to this email to reach the prospect directly.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 0 0;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                ${row('Contact', `<strong style="font-weight:600;">${escapeHtml(fullName)}</strong><br><a href="mailto:${encodeURIComponent(payload.email)}" style="color:#1199b6;text-decoration:none;">${escapeHtml(payload.email)}</a>`)}
                ${row('Phone', escapeHtml(payload.phone || '—'))}
                ${row('Preferred channel', escapeHtml(contactPref))}
                ${row('Enrolling for', escapeHtml(enrollLabel))}
                ${row('Interest', escapeHtml(interest))}
                ${row(detailLabel, detail)}
                ${alt ? row('Alternative contact', alt) : ''}
                ${row('Received', `<span style="color:#475569;">${submitted}</span>`)}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 24px 28px;background-color:#f8fafc;border-top:1px solid #e8eef3;">
              <p style="margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;font-size:12px;line-height:1.6;color:#64748b;">This message was generated automatically from your website enrollment form. Add the sender to your CRM or forward to your team as needed.</p>
            </td>
          </tr>
        </table>
        <p style="margin:16px 0 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;font-size:11px;color:#94a3b8;text-align:center;">InsureTech · IT training &amp; certification</p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

async function sendLeadNotification(payload) {
  const to = (process.env.LEAD_EMAIL_TO || process.env.GMAIL_USER || '').trim();
  if (!to) {
    throw new Error('Set LEAD_EMAIL_TO or GMAIL_USER for lead notifications.');
  }
  const transporter = getTransporter();
  const from = (process.env.GMAIL_USER || '').trim();
  const subject =
    process.env.LEAD_EMAIL_SUBJECT?.trim() ||
    `[InsureTech] New lead · ${payload.firstName} ${payload.lastName}`;

  await transporter.sendMail({
    from: `"InsureTech Leads" <${from}>`,
    to,
    replyTo: payload.email,
    subject,
    text: formatLeadBody(payload),
    html: buildLeadEmailHtml(payload),
  });
}

module.exports = { sendLeadNotification };
