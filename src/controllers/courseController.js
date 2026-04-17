const Course = require('../models/Course');
const slugify = require('../utils/slugify');
const { getStaticCoursesList, getStaticCourseBySlug } = require('../utils/staticCoursesData');

const escapeRegex = (value) => String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const staticCourseMatchesQuery = (course, category, search) => {
  if (category && course.category !== category) return false;
  if (!search) return true;
  const re = new RegExp(escapeRegex(search), 'i');
  if (re.test(course.title || '')) return true;
  const desc =
    typeof course.description === 'string'
      ? course.description
      : JSON.stringify(course.description ?? '');
  return re.test(desc);
};

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

    const dbCourses = await Course.find(filter).sort({ category: 1, title: 1 }).lean();
    const staticCourses = getStaticCoursesList();
    const dbSlugs = new Set(dbCourses.map((c) => c.slug));
    const extra = staticCourses.filter(
      (c) => !dbSlugs.has(c.slug) && staticCourseMatchesQuery(c, category, search)
    );
    const merged = [...dbCourses, ...extra].sort((a, b) => {
      const cat = String(a.category || '').localeCompare(String(b.category || ''));
      if (cat !== 0) return cat;
      return String(a.title || '').localeCompare(String(b.title || ''));
    });

    res.status(200).json({ success: true, data: merged });
  } catch (error) {
    next(error);
  }
};

const getCourseBySlug = async (req, res, next) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug }).lean();

    if (course) {
      return res.status(200).json({ success: true, data: course });
    }

    const fromStatic = getStaticCourseBySlug(req.params.slug);
    if (fromStatic) {
      return res.status(200).json({ success: true, data: fromStatic });
    }

    return res.status(404).json({ success: false, message: 'Course not found' });
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
