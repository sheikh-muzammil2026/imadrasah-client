import StudentList from '@/components/admission/AdmissionRequest';
import React from 'react';

export const metadata = {
  title: "Our Students",
  description: "Browse our students list and inspare by them",
};


const StudentsListPage = () => {
  return (
    <StudentList/>
  );
};

export default StudentsListPage;