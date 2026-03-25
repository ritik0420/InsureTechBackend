const Course = require('../models/Course');
const slugify = require('../utils/slugify');

const getCourses = async (req, res, next) => {
  try {
    const { category, search } = req.query;
    const filter = {};

    if (category) {
      filter.category = category;
    }

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    const courses = await Course.find(filter).sort({ category: 1, title: 1 });
    res.status(200).json({ success: true, data: courses });
  } catch (error) {
    next(error);
  }
};

const getCourseBySlug = async (req, res, next) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug });

    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }

    return res.status(200).json({ success: true, data: course });
  } catch (error) {
    return next(error);
  }
};

const createCourse = async (req, res, next) => {
  try {
    const payload = { ...req.body };

    if (!payload.slug && payload.title) {
      payload.slug = slugify(payload.title);
    }

    const created = await Course.create(payload);
    res.status(201).json({ success: true, data: created });
  } catch (error) {
    next(error);
  }
};

const updateCourse = async (req, res, next) => {
  try {
    const payload = { ...req.body };

    if (payload.title && !payload.slug) {
      payload.slug = slugify(payload.title);
    }

    const updated = await Course.findByIdAndUpdate(req.params.id, payload, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }

    return res.status(200).json({ success: true, data: updated });
  } catch (error) {
    return next(error);
  }
};

const deleteCourse = async (req, res, next) => {
  try {
    const deleted = await Course.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }

    return res.status(200).json({ success: true, message: 'Course deleted successfully' });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getCourses,
  getCourseBySlug,
  createCourse,
  updateCourse,
  deleteCourse,
};
