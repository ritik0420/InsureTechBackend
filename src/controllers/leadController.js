const { sendLeadNotification } = require('../services/emailService');

const isNonEmptyString = (v) => typeof v === 'string' && v.trim().length > 0;

exports.submitLead = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      contactVia,
      interestType,
      enrollFor,
      alternativeContact,
      course,
      service,
    } = req.body || {};

    if (!isNonEmptyString(firstName) || !isNonEmptyString(lastName) || !isNonEmptyString(email)) {
      return res.status(400).json({
        success: false,
        message: 'firstName, lastName, and email are required.',
      });
    }

    const emailNorm = String(email).trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailNorm)) {
      return res.status(400).json({ success: false, message: 'Invalid email address.' });
    }

    const it = interestType === 'services' ? 'services' : 'courses';
    const ef = enrollFor === 'someone_else' ? 'someone_else' : 'me';

    if (it === 'courses' && !isNonEmptyString(course)) {
      return res.status(400).json({ success: false, message: 'Course is required when interest is courses.' });
    }
    if (it === 'services' && !isNonEmptyString(service)) {
      return res.status(400).json({ success: false, message: 'Service is required when interest is services.' });
    }

    const payload = {
      firstName: String(firstName).trim(),
      lastName: String(lastName).trim(),
      email: emailNorm,
      phone: phone != null ? String(phone).trim() : '',
      contactVia: contactVia != null ? String(contactVia).trim() : '',
      interestType: it,
      enrollFor: ef,
      alternativeContact: alternativeContact != null ? String(alternativeContact).trim() : '',
      course: it === 'courses' && course != null ? String(course).trim() : '',
      service: it === 'services' && service != null ? String(service).trim() : '',
    };

    await sendLeadNotification(payload);

    res.status(200).json({ success: true, message: 'Thank you! We will contact you soon.' });
  } catch (err) {
    next(err);
  }
};
