const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const connectDB = require('../src/config/db');
const Course = require('../src/models/Course');
const vm = require('vm');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const frontendCoursesDataFile = path.join(
  __dirname,
  '..',
  '..',
  'frontend-InsureTech',
  'insureTech',
  'data',
  'courses.js'
);

const loadCoursesObject = (sourceText) => {
  const transformed = sourceText
    .replace('export const courses =', 'const courses =')
    .replace(/export\s+function\s+/g, 'function ')
    .concat('\nmodule.exports = { courses };');
  const sandbox = { module: { exports: {} }, exports: {} };
  vm.createContext(sandbox);
  vm.runInContext(transformed, sandbox);
  return (sandbox.module.exports && sandbox.module.exports.courses) || {};
};

const parseCourses = (coursesObject) => {
  return Object.values(coursesObject).map((course) => ({
    title: course.title,
    slug: course.slug,
    description:
      course.heroDescription ||
      course.callToAction ||
      'Course details available soon',
    image: course.heroBannerImage || course.toolsBannerImage || '/images/default-course.jpg',
    category: course.category || 'Other',
    mode: course.mode || 'Online',
    duration: course.duration || 'Self paced',
    heroDescription: course.heroDescription || '',
    highlights: course.highlights || [],
    modules: course.modules || [],
    faqs: course.faqs || [],
  }));
};

const seedCourses = async () => {
  await connectDB();

  const sourceText = fs.readFileSync(frontendCoursesDataFile, 'utf-8');
  const coursesObject = loadCoursesObject(sourceText);
  const parsedCourses = parseCourses(coursesObject);

  if (!parsedCourses.length) {
    throw new Error('No courses parsed from frontend data');
  }

  for (const course of parsedCourses) {
    await Course.findOneAndUpdate(
      { slug: course.slug },
      { $set: course },
      { upsert: true, returnDocument: 'after', setDefaultsOnInsert: true }
    );
  }

  console.log(`Seeded ${parsedCourses.length} courses from frontend static data.`);
};

seedCourses()
  .then(async () => {
    await Course.db.close();
    process.exit(0);
  })
  .catch(async (error) => {
    console.error(error);
    await Course.db.close();
    process.exit(1);
  });
