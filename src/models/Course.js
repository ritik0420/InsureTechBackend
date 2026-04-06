const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true, trim: true },
    category: { type: String, required: true, trim: true, index: true },
    description: { type: mongoose.Schema.Types.Mixed },
    heroDescription: { type: String, default: '' },
    image: { type: String, default: '/images/default-course.jpg' },
    heroBannerImage: { type: String, default: '' },
    toolsBannerImage: { type: String, default: '' },
    callToAction: { type: String, default: '' },
    mode: { type: String, default: 'Online' },
    duration: { type: String, default: 'Self paced' },
    highlights: { type: [mongoose.Schema.Types.Mixed], default: [] },
    modules: { type: [mongoose.Schema.Types.Mixed], default: [] },
    faqs: { type: [mongoose.Schema.Types.Mixed], default: [] },
    learningModes: { type: [mongoose.Schema.Types.Mixed], default: [] },
    benefits: { type: [mongoose.Schema.Types.Mixed], default: [] },
    icon: { type: String, default: '' },
    heroSubtitle: { type: String, default: '' },
  },
  { strict: false, timestamps: true }
);

module.exports = mongoose.model('Course', courseSchema);
