import React from 'react';
import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';

const CoursesCard = () => {
    return (
 <Card
             
              className="overflow-hidden border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-52 w-full">
                <Image
                  src={course?.image}
                  alt={course?.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-4 p-2">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-xl font-bold text-green-700">
                    {course?.title}
                  </h2>

                  <Chip color="success" variant="flat">
                    {course?.seats} Seats
                  </Chip>
                </div>

                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <span className="font-semibold">
                      Teacher:
                    </span>{" "}
                    {course?.teacher}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Subject:
                    </span>{" "}
                    {course?.subject}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Schedule:
                    </span>{" "}
                    {course?.schedule}
                  </p>

                  <p>
                    <span className="font-semibold">
                      Fee:
                    </span>{" "}
                    {course?.fee}
                  </p>
                </div>

                {/* Button */}
                <Button
                  fullWidth
                  color="success"
                  className="font-semibold"
                >
                  Course Details
                </Button>
              </div>
</Card>
    );
};

export default CoursesCard;