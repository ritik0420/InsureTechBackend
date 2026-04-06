const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const connectDB = require('../src/config/db');
const Course = require('../src/models/Course');
const vm = require('vm');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const coursesDataFile = path.join(__dirname, '..', 'data', 'courses.js');

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
    ...course,
    image: course.heroBannerImage || course.toolsBannerImage || course.image || '/images/default-course.jpg',
  }));
};

const seedCourses = async () => {
  await connectDB();

  const sourceText = fs.readFileSync(coursesDataFile, 'utf-8');
  const coursesObject = loadCoursesObject(sourceText);
  const parsedCourses = parseCourses(coursesObject);

  if (!parsedCourses.length) {
    throw new Error('No courses parsed from data/courses.js');
  }

  for (const course of parsedCourses) {
    await Course.findOneAndUpdate(
      { slug: course.slug },
      { $set: course },
      { upsert: true, returnDocument: 'after', setDefaultsOnInsert: true }
    );
  }

  console.log(`Seeded ${parsedCourses.length} courses from backend data/courses.js`);
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
