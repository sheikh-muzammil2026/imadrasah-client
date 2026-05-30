'use client'
import { deleteAdmittedStudentData, getAdmittedStudentListPromise } from '@/lib/data';
import { Button } from '@heroui/react';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const StudentList = () => {
 
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const fetchStudents = async () => {
      try {
        const response = await getAdmittedStudentListPromise() 
        setStudents(response);
        setLoading(false);
      } catch (error) {
        console.error("স্টুডেন্ট ডাটা লোড করতে ভুল হয়েছে:", error);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []); 

  const handleDeleteAdmissionInfo = async(studentId) =>{
   try {
    await deleteAdmittedStudentData(studentId);
    toast.success("Students data deleted successfully.")

    const filteredAllStudentsData = students.filter((student)=> student?._id !=studentId )
    setStudents(filteredAllStudentsData);
    
   } catch (error) {
    console.log(error, "from all students page. error on delete data fetching time")
   }
    
  }

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>লোডিং হচ্ছে... অনুগ্রহ করে অপেক্ষা করুন।</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>সকল ছাত্র-ছাত্রীর তালিকা</h2>
      
      {students.length === 0 ? (
        <p style={{ textAlign: 'center' }}>কোনো স্টুডেন্টের ডাটা পাওয়া যায়নি।</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2', textAlign: 'left' }}>
              <th style={tableHeaderStyle}>ক্রমিক নং</th>
              <th style={tableHeaderStyle}>নাম</th>
              <th style={tableHeaderStyle}>ইমেইল</th>
              <th style={tableHeaderStyle}>কোর্স</th>
              <th style={tableHeaderStyle}>ভর্তির তারিখ</th>
              <th style={tableHeaderStyle}>ডিলিট</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student._id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={tableCellStyle}>{index + 1}</td>
                <td style={tableCellStyle}>{student?.studentName}</td>
                <td style={tableCellStyle}>{student?.email}</td>
                <td style={tableCellStyle}>{student?.desiredCourse || 'N/A'}</td>
                <td style={tableCellStyle}>
                  {student?.date ? new Date(student.date).toLocaleDateString() : 'N/A'}
                </td>
                <td style={tableCellStyle}>
                  <Button 
                  variant='danger-soft'
                  onClick={()=>handleDeleteAdmissionInfo(student?._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

// সিম্পল ইনলাইন স্টাইল (আপনি চাইলে Tailwind বা CSS ব্যবহার করতে পারেন)
const tableHeaderStyle = {
  padding: '12px',
  borderBottom: '2px solid #ddd',
};

const tableCellStyle = {
  padding: '12px',
};

export default StudentList;