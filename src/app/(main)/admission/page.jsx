'use client';
import { sumbitAdmitedDataPromise } from '@/lib/data';
import { Button, Card, Input, Label, TextArea } from '@heroui/react';
import React from 'react';
import { toast } from 'react-toastify';

const AdmissionPage = () => {

  const handleAdmissionForm = async(e)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const admitedData = Object.fromEntries(formData.entries());
    console.log(admitedData);

    try {
      
      sumbitAdmitedDataPromise(admitedData)
      toast.success("Admission Submitted Successfully")
        // form reset করতে চাইলে
      e.target.reset();
    } catch (error) {
       console.log(error);
      toast.error("Failed to submit admission");
    }

  }
    return (
       <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900 p-3 md:p-6">
  
  <Card className="flex w-full max-w-7xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl md:flex-row">

    {/* ================= LEFT SIDE ================= */}

    <div className="relative hidden md:flex md:w-[35%] flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-10 text-white">
      
      <div className="space-y-4 relative z-10">
        <div className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs backdrop-blur">
          Online Madrasa Admission
        </div>

        <h1 className="text-4xl font-black leading-tight">
          অনলাইন মাদ্রাসায় ভর্তি শুরু হয়েছে
        </h1>

        <p className="max-w-sm text-sm leading-7 text-blue-100/80">
          ঘরে বসেই কুরআন, তাজবীদ, হিফজ ও ইসলামিক শিক্ষা গ্রহণ করুন অভিজ্ঞ উস্তাযদের মাধ্যমে।
        </p>
      </div>

      <div className="relative z-10 space-y-3">
        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
          <h3 className="font-semibold">
            ✔ লাইভ ক্লাস সিস্টেম
          </h3>

          <p className="mt-1 text-sm text-blue-100/70">
            Zoom & Google Meet ভিত্তিক ক্লাস
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
          <h3 className="font-semibold">
            ✔ সার্টিফিকেট সুবিধা
          </h3>

          <p className="mt-1 text-sm text-blue-100/70">
            কোর্স শেষে ডিজিটাল সার্টিফিকেট প্রদান
          </p>
        </div>
      </div>

      <div className="relative z-10 text-xs text-blue-100/50">
        © 2026 Online Madrasa. All Rights Reserved.
      </div>

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),transparent_40%)]" />
    </div>

    {/* ================= RIGHT SIDE ================= */}

    <div className="w-full md:w-[65%] bg-slate-950/50 p-5 md:p-8 text-white max-h-screen overflow-y-auto">

      {/* Header */}

      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Admission Form
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          আপনার সঠিক তথ্য দিয়ে ভর্তি ফর্ম পূরণ করুন
        </p>
      </div>

      {/* FORM */}
        <form onSubmit={handleAdmissionForm} className="space-y-4">

        {/* ================= STUDENT INFORMATION ================= */}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">

          <h2 className="mb-5 text-lg font-bold text-green-400 text-center">
            Student Information
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            <div className="flex flex-col gap-2">
              <Label className="text-white">Student Name</Label>
              <Input type="text" name="studentName" placeholder="Enter student name" required />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Email Address</Label>
              <Input type="email" name="email" placeholder="example@gmail.com" required />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Phone Number</Label>
              <Input type="tel" name="phone" placeholder="01XXXXXXXXX" required />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Date of Birth</Label>
              <Input type="date" name="dob" />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Age</Label>
              <Input type="number" name="age" placeholder="18" required />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Gender</Label>
              <Input type="text" name="gender" placeholder="Male / Female" />
            </div>

          </div>
        </div>


        {/* ================= GUARDIAN ================= */}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">

          <h2 className="mb-5 text-lg font-bold text-white text-center">
            Guardian Information
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            <div className="flex flex-col gap-2">
              <Label className="text-white">Father Name</Label>
              <Input type="text" name="fatherName" required />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Mother Name</Label>
              <Input type="text" name="motherName" />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Guardian Name</Label>
              <Input type="text" name="guardianName" required />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Guardian Phone</Label>
              <Input type="tel" name="guardianPhone" placeholder="01XXXXXXXXX" required />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Relation with Student</Label>
              <Input type="text" name="relation" placeholder="Father / Uncle" />
            </div>

          </div>
        </div>


        {/* ================= ACADEMIC ================= */}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">

          <h2 className="mb-5 text-lg font-bold text-white text-center">
            Academic Information
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            <div className="flex flex-col gap-2">
              <Label className="text-white">Previous Institution</Label>
              <Input type="text" name="previousInstitution" />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Previous Class / Level</Label>
              <Input type="text" name="previousClass" />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Desired Course</Label>
              <Input type="text" name="desiredCourse" required />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Preferred Batch Time</Label>
              <Input type="text" name="batchTime" placeholder="Morning / Evening" />
            </div>

          </div>
        </div>


        {/* ================= ADDRESS ================= */}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">

          <h2 className="mb-5 text-lg font-bold text-white text-center">
            Address Information
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            <div className="flex flex-col gap-2">
              <Label className="text-white">District</Label>
              <Input type="text" name="district" required />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Village / Area</Label>
              <Input type="text" name="village" />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Post Office</Label>
              <Input type="text" name="postOffice" />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Zip Code</Label>
              <Input type="text" name="zipcode" />
            </div>

          </div>

          <div className="mt-4 flex flex-col gap-2">
            <Label className="text-white">Full Address</Label>
            <TextArea name="fullAddress" rows={4} />
          </div>
        </div>


        {/* ================= MADRASA ================= */}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">

          <h2 className="mb-5 text-lg font-bold text-white text-center">
            Madrasa Related Information
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            <div className="flex flex-col gap-2">
              <Label className="text-white">Can Read Quran?</Label>
              <Input type="text" name="quranReading" />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Nazera Completed?</Label>
              <Input type="text" name="nazeraCompleted" />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Hifz Completed?</Label>
              <Input type="text" name="hifzCompleted" />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Islamic Knowledge Level</Label>
              <Input type="text" name="islamicKnowledge" />
            </div>

          </div>
        </div>


        {/* ================= ONLINE CLASS ================= */}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">

          <h2 className="mb-5 text-lg font-bold text-white text-center">
            Online Class Related
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            <div className="flex flex-col gap-2">
              <Label className="text-white">Device Available?</Label>
              <Input type="text" name="deviceAvailable" />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Internet Access?</Label>
              <Input type="text" name="internetAccess" />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Preferred Platform</Label>
              <Input type="text" name="preferredPlatform" />
            </div>

          </div>
        </div>


        {/* ================= UPLOADS ================= */}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">

          <h2 className="mb-5 text-lg font-bold text-white text-center">
            Important Uploads
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            <div className="flex flex-col gap-2">
              <Label className="text-white">Student Photo URL</Label>
              <Input type="url" name="studentPhoto" />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Birth Certificate URL</Label>
              <Input type="url" name="birthCertificate" />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Previous Result URL</Label>
              <Input type="url" name="previousResult" />
            </div>

          </div>
        </div>


        {/* ================= EXTRA ================= */}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">

          <h2 className="mb-5 text-lg font-bold text-white text-center">
            Extra Useful Information
          </h2>

          <div className="space-y-4">

            <div className="flex flex-col gap-2">
              <Label className="text-white">Why do you want to join?</Label>
              <TextArea name="joinReason" rows={4} />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Special Notes</Label>
              <TextArea name="specialNotes" rows={4} />
            </div>

          </div>
        </div>


        {/* ================= BUTTON ================= */}

        <Button
          type="submit"
          className="h-12 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-base font-semibold text-white shadow-lg"
        >
          Submit Admission Form
        </Button>

        </form>
    </div>
  </Card>
</div>
    );
};

export default AdmissionPage;