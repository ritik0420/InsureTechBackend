const fs = require('fs');
const path = require('path');
const vm = require('vm');

let cachedCoursesObject = null;

function loadCoursesObject() {
  if (cachedCoursesObject) return cachedCoursesObject;
  const coursesDataFile = path.join(__dirname, '..', '..', 'data', 'courses.js');
  const sourceText = fs.readFileSync(coursesDataFile, 'utf-8');
  const transformed = sourceText
    .replace('export const courses =', 'const courses =')
    .replace(/export\s+function\s+/g, 'function ')
    .concat('\nmodule.exports = { courses };');
  const sandbox = { module: { exports: {} }, exports: {} };
  vm.createContext(sandbox);
  vm.runInContext(transformed, sandbox);
  cachedCoursesObject = (sandbox.module.exports && sandbox.module.exports.courses) || {};
  return cachedCoursesObject;
}

function parseCourse(course) {
  return {
    ...course,
    image: course.heroBannerImage || course.toolsBannerImage || course.image || '/images/default-course.jpg',
  };
}

function getStaticCoursesList() {
  const coursesObject = loadCoursesObject();
  return Object.values(coursesObject).map(parseCourse);
}

function getStaticCourseBySlug(slug) {
  if (!slug) return null;
  const coursesObject = loadCoursesObject();
  const course = coursesObject[slug];
  return course ? parseCourse(course) : null;
}

module.exports = {
  getStaticCoursesList,
  getStaticCourseBySlug,
};
