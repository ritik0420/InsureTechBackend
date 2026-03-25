const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, default: '/images/default-course.jpg' },
    category: { type: String, required: true, trim: true, index: true },
    mode: { type: String, default: 'Online' },
    duration: { type: String, default: 'Self paced' },
    heroDescription: { type: String, default: '' },
    highlights: { type: [String], default: [] },
    modules: { type: [mongoose.Schema.Types.Mixed], default: [] },
    faqs: { type: [mongoose.Schema.Types.Mixed], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Course', courseSchema);
