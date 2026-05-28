'use client'
import { getAdmittedStudentListPromise } from '@/lib/data';
import React, { useState, useEffect } from 'react';

const StudentList = () => {
  // স্টুডেন্ট ডাটা সেভ করার জন্য স্টেট
  const [students, setStudents] = useState([]);
  // ডাটা লোড হচ্ছে কিনা তা ট্র্যাক করার জন্য লোডিং স্টেট
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ব্যাকএন্ড API থেকে ডাটা নিয়ে আসার ফাংশন
    const fetchStudents = async () => {
      try {
        const response = await getAdmittedStudentListPromise() // আপনার ব্যাকএন্ড ইউআরএল দিন
        setStudents(response);
        setLoading(false);
      } catch (error) {
        console.error("স্টুডেন্ট ডাটা লোড করতে ভুল হয়েছে:", error);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []); // খালি অ্যারে দেওয়ার কারণে এটি পেজ লোডের সময় মাত্র একবারই চলবে (কোনো রেন্ডার লুপ হবে না)

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