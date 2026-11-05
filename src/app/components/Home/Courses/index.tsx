"use client";

import { useState, type FormEvent, Suspense } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const courses = [
  {
    id: 1,
    slug: "embedded-systems-training",
    heading: "Embedded Systems Training",
    description:
      "Gain practical knowledge of Embedded Systems, Microcontrollers, ARM Architecture, Embedded C/C++ Programming, Communication Protocols, and Real-Time Applications.",
    duration: "4 Months",
    mode: "Online / Offline",
  },
  {
    id: 2,
    slug: "c-programming",
    heading: "C Programming",
    description:
      "Build a strong programming foundation with C fundamentals, pointers, memory management, and problem-solving.",
    duration: "6 Weeks",
    mode: "Online / Offline",
  },
  {
    id: 3,
    slug: "embedded-c",
    heading: "Embedded C",
    description:
      "Learn to program microcontrollers and develop firmware for real-world embedded hardware applications.",
    duration: "6 Weeks",
    mode: "Online / Offline",
  },
  {
    id: 4,
    slug: "arm-architecture",
    heading: "ARM Architecture",
    description:
      "Understand ARM processors, registers, instruction sets, exceptions, memory systems, and debugging.",
    duration: "6 Weeks",
    mode: "Online / Offline",
  },
  {
    id: 5,
    slug: "python-programming",
    heading: "Python Programming",
    description:
      "Learn Python programming, scripting, test automation, and log processing for embedded validation.",
    duration: "5 Weeks",
    mode: "Online / Offline",
  },
];

const Courses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedMode, setSelectedMode] = useState("Online");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const openEnquiryModal = (course: (typeof courses)[number]) => {
    setSelectedCourse(course.heading);
    setSelectedMode("Online");
    setStatusMessage("");
    setIsSuccess(false);
    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      message: "",
    });
    setIsModalOpen(true);
  };

  const handleEnquirySubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          course: selectedCourse,
          mode: selectedMode,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      setIsSuccess(true);
      setStatusMessage(result.message);

      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch (error) {
      setIsSuccess(false);
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your enquiry.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Suspense>
      <section id="courses" className="scroll-mt-20 bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#414141] sm:text-4xl lg:text-5xl">
              Placement Focused Training Programs
            </h2>

            <p className="mx-auto max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
              Explore our professional courses designed to enhance your
              technical expertise and prepare you for industry opportunities.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {courses.map((course) => (
              <article
                key={course.id}
                className="group relative flex min-h-[435px] flex-col overflow-hidden border border-gray-200 bg-[#f1f1f1] shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                {/* Geometric Background */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div
                    className="absolute -right-10 -top-20 h-72 w-72 rotate-45 bg-[#e2e2e2]"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    }}
                  />

                  <div
                    className="absolute -right-20 -top-32 h-96 w-96 rotate-45 bg-white/40"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    }}
                  />

                  <div
                    className="absolute left-1/4 -top-48 h-80 w-80 rotate-45 bg-[#e5e5e5]/70"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    }}
                  />
                </div>

                {/* Card Content */}
                <div className="relative z-10 flex-1 px-7 pb-8 pt-10 sm:px-10 sm:pt-12">
                  {/* Course Icon */}
                  <div className="absolute right-6 top-7 text-[#7c3aed] sm:right-8 sm:top-8">
                    <Icon icon="carbon:chip" className="text-6xl sm:text-7xl" />
                  </div>

                  {/* Course Title */}
                  <h3 className="mb-5 max-w-[75%] text-2xl font-bold tracking-tight text-[#7c3aed] sm:text-[28px]">
                    {course.heading}
                  </h3>

                  {/* Course Description */}
                  <p className="max-w-[90%] text-base leading-7 text-[#303030] sm:text-lg sm:leading-[1.8]">
                    {course.description}
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px w-1/3 bg-gray-300" />

                  {/* Course Information */}
                  <div className="space-y-2 text-base font-semibold text-[#f58220] sm:text-lg">
                    <p>Duration: {course.duration}</p>

                    <p>Course Mode: {course.mode}</p>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="relative z-10 grid grid-cols-2 border-t border-[#7c3aed] bg-[#2d2d2d]">
                  {/* Contact Us */}
                  {/* <Link
                  href={`/contact?course=${encodeURIComponent(course.heading)}`}
                  className="flex min-h-11 items-center justify-center border-r border-[#7c3aed] px-1 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#7c3aed] sm:text-lg"
                >
                  Contact Us
                </Link> */}
                  <button
                    type="button"
                    onClick={() => openEnquiryModal(course)}
                    className="flex min-h-11 items-center justify-center border-r border-[#7c3aed] px-1 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#7c3aed] sm:text-lg"
                  >
                    Contact Us
                  </button>
                  {/* Know More */}
                  <Link
                    href={`/courses?course=${course.slug}`}
                    className="flex min-h-11 items-center justify-center border-r border-[#7c3aed] px-1 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#7c3aed] sm:text-lg"
                  >
                    Know More
                  </Link>

                  {/* Brochure */}
                  {/* <Link
                    href={`/contact?course=${encodeURIComponent(course.heading)}&request=brochure`}
                    className="flex min-h-11 items-center justify-center px-1 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#7c3aed] sm:text-lg"
                  >
                    Brochure
                  </Link> */}
                </div>
              </article>
            ))}
          </div>
        </div>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6"
            onClick={() => {
              if (!isSubmitting) setIsModalOpen(false);
            }}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white p-6 shadow-2xl sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                disabled={isSubmitting}
                aria-label="Close enquiry form"
                className="absolute right-5 top-4 text-3xl font-semibold text-[#f58220] hover:text-orange-700"
              >
                &times;
              </button>

              {/* Modal Heading */}
              <h2 className="mb-6 mt-4 text-center text-2xl font-semibold text-[#292929]">
                {isSuccess ? "Thank You!" : "Request A Call Back"}
              </h2>

              {isSuccess ? (
                <div className="py-8 text-center">
                  <Icon
                    icon="solar:check-circle-bold"
                    className="mx-auto mb-4 text-6xl text-green-500"
                  />

                  <h3 className="mb-3 text-xl font-bold text-gray-800">
                    Enquiry Submitted Successfully!
                  </h3>

                  <p className="text-gray-600">
                    Thank you for contacting GRR Careers. Our team will get back
                    to you shortly.
                  </p>

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="mt-7 rounded-lg bg-[#f58220] px-8 py-3 font-semibold text-white hover:bg-orange-600"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-3">
                  {/* Full Name */}
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    minLength={2}
                    maxLength={100}
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fullName: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-[#f58220]/70 px-4 py-3 outline-none focus:border-[#f58220] focus:ring-2 focus:ring-orange-100"
                  />

                  {/* Email */}
                  <input
                    type="email"
                    placeholder="Email ID"
                    required
                    autoComplete="email"
                    maxLength={254}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-[#f58220]/70 px-4 py-3 outline-none focus:border-[#f58220] focus:ring-2 focus:ring-orange-100"
                  />

                  {/* Mobile */}
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    required
                    minLength={7}
                    maxLength={20}
                    autoComplete="tel"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        mobile: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-[#f58220]/70 px-4 py-3 outline-none focus:border-[#f58220] focus:ring-2 focus:ring-orange-100"
                  />

                  {/* Selected Course */}
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    required
                    className="w-full rounded-lg border border-[#f58220]/70 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-orange-100"
                  >
                    {courses.map((course) => (
                      <option key={course.id} value={course.heading}>
                        {course.heading}
                      </option>
                    ))}
                  </select>

                  {/* Course Mode */}
                  <select
                    value={selectedMode}
                    onChange={(e) => setSelectedMode(e.target.value)}
                    required
                    className="w-full rounded-lg border border-[#f58220]/70 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-orange-100"
                  >
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                  </select>

                  {/* Enquiry Message */}
                  <textarea
                    placeholder="Enquiry"
                    required
                    minLength={5}
                    maxLength={2000}
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="w-full resize-y rounded-lg border border-[#f58220]/70 px-4 py-3 outline-none focus:border-[#f58220] focus:ring-2 focus:ring-orange-100"
                  />

                  {/* Status Message */}
                  {statusMessage && (
                    <p className="text-sm text-red-600" role="alert">
                      {statusMessage}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-[#f58220] px-5 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </section>
    </Suspense>
  );
};

export default Courses;
