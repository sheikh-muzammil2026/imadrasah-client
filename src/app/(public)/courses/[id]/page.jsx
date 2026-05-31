import CourseDetails from '@/components/courses/CourseDetails';
import React from 'react';

export async function generateMetadata({ params }){
  const {id} = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/courses/${id}`);
  const course = await res.json()
  return {
    title: course.title,
    description: course.description
  }
}
const CourseDetailsPage = ({params}) => {
  return (
    <CourseDetails params={params}/>
  );
};

export default CourseDetailsPage;