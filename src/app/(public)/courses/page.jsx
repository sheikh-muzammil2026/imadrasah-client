import AllCourses from '@/components/courses/AllCourses';
import React from 'react';

export const metadata = {
  title: "Our Courses",
  description: "Browse Islamic courses and start learning",
};

const CoursesPage = () => {
  return (
    <AllCourses/>
  );
};

export default CoursesPage;