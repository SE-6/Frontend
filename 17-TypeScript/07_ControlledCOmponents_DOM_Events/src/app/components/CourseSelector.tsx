'use client';

import { type ChangeEventHandler, useState } from 'react';

const CourseSelector = () => {
  const [course, setCourse] = useState<Course>('Web Development');

  const courses: Course[] = ['Web Development', 'Data Science', 'UX Design'];

  type Course = 'Web Development' | 'Data Science' | 'UX Design';

  //   console.log(course);

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCourse(e.target.value as Course);
  };

  return (
    <div>
      <h2>Course Selector</h2>

      <label htmlFor='course'>Select a course:</label>
      <select id='course' value={course} onChange={handleChange}>
        {courses.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CourseSelector;
