"use client";

import React from "react";

import {
  Card,
  Input,
  TextArea,
  Button,
  Checkbox,
  Select,
  Label,
  ListBox,
} from "@heroui/react";

const categories = [
  "হিফজ",
  "নাজেরা",
  "তাজবীদ",
  "আরবি ভাষা",
  "ইসলামিক স্টাডিজ",
];

const levels = [
  "Beginner",
  "Intermediate",
  "Advanced",
];

const classTypes = [
  "Live Class",
  "Recorded",
  "Hybrid",
];

export default function AddCoursePage() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(
      formData.entries()
    );

    console.log(data);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <Card className="border shadow-xl p-6 md:p-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            নতুন কোর্স অ্যাড করুন
          </h1>

          <p className="text-default-500 mt-2">
            অনলাইন মাদ্রাসার জন্য নতুন
            কোর্স তৈরি করুন।
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-10"
        >
          {/* ================= BASIC INFO ================= */}

          <div>
            <h2 className="text-xl font-semibold mb-5">
              Basic Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input
                name="title"
                label="Course Title"
                placeholder="হিফজুল কুরআন প্রোগ্রাম"
                required
              />

              <Input
                name="slug"
                label="Course Slug"
                placeholder="hifzul-quran-program"
                required
              />

              <Input
                name="instructor"
                label="Instructor Name"
                placeholder="মাওলানা আব্দুল্লাহ"
                required
              />

              <Input
                type="url"
                name="thumbnail"
                label="Thumbnail URL"
                placeholder="https://example.com/image.jpg"
                required
              />

              {/* Category Select */}

              <Select name="category">
                <Label>
                  Course Category
                </Label>

                <Select.Trigger>
                  <Select.Value placeholder="Select Category" />

                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    {categories.map((category) => (
                      <ListBox.Item
                        key={category}
                        id={category}
                        textValue={category}
                      >
                        {category}

                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>

              {/* Level Select */}

              <Select name="level">
                <Label>
                  Course Level
                </Label>

                <Select.Trigger>
                  <Select.Value placeholder="Select Level" />

                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    {levels.map((level) => (
                      <ListBox.Item
                        key={level}
                        id={level}
                        textValue={level}
                      >
                        {level}

                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Description */}

            <div className="mt-5">
              <TextArea
                name="shortDescription"
                label="Short Description"
                rows={3}
                placeholder="কোর্স সম্পর্কে সংক্ষিপ্ত বিবরণ লিখুন"
                required
              />
            </div>

            <div className="mt-5">
              <TextArea
                name="fullDescription"
                label="Full Description"
                rows={6}
                placeholder="কোর্স সম্পর্কে বিস্তারিত লিখুন"
                required
              />
            </div>
          </div>

          {/* ================= COURSE DETAILS ================= */}

          <div>
            <h2 className="text-xl font-semibold mb-5">
              Course Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input
                name="duration"
                label="Course Duration"
                placeholder="৬ মাস"
                required
              />

              <Input
                type="number"
                name="weeklyClasses"
                label="Weekly Classes"
                placeholder="3"
                required
              />

              <Input
                name="schedule"
                label="Class Schedule"
                placeholder="শনি - সোম | রাত ৮টা"
                required
              />

              {/* Class Type Select */}

              <Select name="classType">
                <Label>
                  Class Type
                </Label>

                <Select.Trigger>
                  <Select.Value placeholder="Select Class Type" />

                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    {classTypes.map((type) => (
                      <ListBox.Item
                        key={type}
                        id={type}
                        textValue={type}
                      >
                        {type}

                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>

              <Input
                name="language"
                label="Language"
                placeholder="বাংলা"
                required
              />

              <Input
                type="url"
                name="classLink"
                label="Live Class Link"
                placeholder="https://zoom.us/"
              />
            </div>
          </div>

          {/* ================= PRICING ================= */}

          <div>
            <h2 className="text-xl font-semibold mb-5">
              Pricing & Seats
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input
                type="number"
                name="fee"
                label="Course Fee"
                placeholder="2000"
                required
              />

              <Input
                type="number"
                name="discountPrice"
                label="Discount Price"
                placeholder="1500"
              />

              <Input
                type="number"
                name="totalSeats"
                label="Total Seats"
                placeholder="50"
                required
              />

              <Input
                type="date"
                name="deadline"
                label="Enrollment Deadline"
              />
            </div>

            <div className="mt-5">
              <Checkbox name="isFree">
                এটি একটি ফ্রি কোর্স
              </Checkbox>
            </div>
          </div>

          {/* ================= CURRICULUM ================= */}

          <div>
            <h2 className="text-xl font-semibold mb-5">
              Curriculum
            </h2>

            <TextArea
              name="curriculum"
              rows={6}
              label="Course Curriculum"
              placeholder={`Module 1 - কুরআন পরিচিতি
Module 2 - মাখরাজ
Module 3 - তাজবীদ`}
            />
          </div>

          {/* ================= PUBLISH ================= */}

          <div>
            <h2 className="text-xl font-semibold mb-5">
              Publish Settings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Status Select */}

              <Select name="status">
                <Label>
                  Publish Status
                </Label>

                <Select.Trigger>
                  <Select.Value placeholder="Select Status" />

                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item
                      id="draft"
                      textValue="Draft"
                    >
                      Draft

                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="published"
                      textValue="Published"
                    >
                      Published

                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>

              <Input
                name="tags"
                label="Course Tags"
                placeholder="কুরআন, ইসলামিক, হিফজ"
              />
            </div>

            <div className="mt-5">
              <Checkbox name="featured">
                Featured Course হিসেবে দেখান
              </Checkbox>
            </div>
          </div>

          {/* ================= BUTTON ================= */}

          <div className="pt-5">
            <Button
              type="submit"
              className="w-full md:w-fit"
            >
              Add Course
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}