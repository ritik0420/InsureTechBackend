const path = require('path');
const dotenv = require('dotenv');

const connectDB = require('../src/config/db');
const Course = require('../src/models/Course');
const { getStaticCoursesList } = require('../src/utils/staticCoursesData');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const seedCourses = async () => {
  await connectDB();

  const parsedCourses = getStaticCoursesList();

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
