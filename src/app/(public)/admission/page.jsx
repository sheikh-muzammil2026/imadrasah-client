import AdmissionForm from '@/components/admission/AdmissionForm';
import React from 'react';

export const metadata = {
  title: "Admission",
  description: "Admit our Islamic courses and start learning",
};

const AdmissionPage = () => {
  return (
    <AdmissionForm/>
  );
};

export default AdmissionPage;