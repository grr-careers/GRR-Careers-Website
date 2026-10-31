"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";

const courseDetails: Record<
  string,
  {
    title: string;
    subtitle: string;
    description: string;
    duration: string;
    mode: string;
    level: string;
    overview: string;
    topics: string[];
    outcomes: string[];
  }
> = {
  "embedded-systems-training": {
    title: "Embedded Systems Training",
    subtitle: "Build Your Career in Embedded Systems Engineering",
    description:
      "Get industry-oriented training in embedded systems with practical sessions, real-time projects, and hands-on hardware and software experience.",
    duration: "6 Months",
    mode: "Online / Offline",
    level: "Beginner to Advanced",
    overview:
      "This program is designed to build strong foundations in embedded systems development. Learn microcontroller architecture, Embedded C, ARM processors, communication protocols, Linux fundamentals, and hardware interfacing. Gain practical experience through real-world projects and engineering assignments.",
    topics: [
      "Introduction to Embedded Systems",
      "Digital Electronics and Microcontroller Fundamentals",
      "C Programming and Embedded C",
      "ARM Architecture and Processor Fundamentals",
      "GPIO, Timers, Interrupts and Memory Management",
      "UART, SPI, I2C and CAN Protocols",
      "Linux Fundamentals and Device Drivers Introduction",
      "Hardware Debugging using Oscilloscope and Logic Analyzer",
      "Real-Time Embedded Projects",
      "Practical Assignments and Project Development",
    ],
    outcomes: [
      "Understand embedded system architecture and hardware components.",
      "Develop firmware using C and Embedded C.",
      "Interface microcontrollers with external peripherals.",
      "Understand ARM processor architecture.",
      "Debug hardware and software issues.",
      "Develop practical embedded applications.",
    ],
  },

  "c-programming": {
    title: "C Programming",
    subtitle: "Master C Programming from Fundamentals to Advanced",
    description:
      "Develop strong programming skills with structured lessons, practical coding exercises, and real-world problem-solving.",
    duration: "6 Weeks",
    mode: "Online / Offline",
    level: "Beginner to Advanced",
    overview:
      "This course covers C programming fundamentals and advanced concepts required for software and embedded engineering. Focus on pointers, arrays, structures, memory management, and practical programming exercises.",
    topics: [
      "Introduction to C Programming",
      "Variables, Data Types and Operators",
      "Conditional Statements and Loops",
      "Functions and Recursion",
      "Arrays and Strings",
      "Pointers and Pointer Arithmetic",
      "Structures, Unions and Enumerations",
      "Dynamic Memory Allocation",
      "Storage Classes and Memory Concepts",
      "Bitwise Operators and Bit Manipulation",
      "File Handling",
      "Hands-on Programming Exercises",
    ],
    outcomes: [
      "Write structured C programs.",
      "Understand pointers and memory allocation.",
      "Work with arrays, strings and structures.",
      "Perform bitwise operations.",
      "Develop problem-solving skills.",
      "Prepare for technical programming interviews.",
    ],
  },

  "embedded-c": {
    title: "Embedded C",
    subtitle: "Develop Firmware for Real-World Embedded Applications",
    description:
      "Learn how to develop microcontroller firmware, interact with hardware registers, and implement peripheral communication.",
    duration: "6 Weeks",
    mode: "Online / Offline",
    level: "Beginner to Advanced",
    overview:
      "This course focuses on Embedded C programming and hardware-level development. Learn how software interacts with microcontrollers, memory-mapped registers, interrupts, and communication interfaces.",
    topics: [
      "Embedded Systems Fundamentals",
      "Embedded C Programming",
      "Pointers and Memory Management",
      "Microcontroller Architecture",
      "Memory-Mapped Registers",
      "GPIO Configuration and Control",
      "Interrupts and Interrupt Service Routines",
      "Timers and Counters",
      "UART Communication",
      "SPI and I2C Communication",
      "Bit Manipulation and Register Programming",
      "Hands-on Firmware Development",
    ],
    outcomes: [
      "Develop firmware for microcontrollers.",
      "Configure and control hardware registers.",
      "Understand interrupts and peripheral operations.",
      "Implement UART, SPI and I2C communication.",
      "Debug embedded firmware.",
      "Build practical hardware-interfacing applications.",
    ],
  },

  "arm-architecture": {
    title: "ARM Architecture",
    subtitle: "Understand ARM Processors and Their Internal Architecture",
    description:
      "Explore ARM processor architecture, instruction sets, registers, memory systems, interrupts, and debugging techniques.",
    duration: "6 Weeks",
    mode: "Online / Offline",
    level: "Beginner to Advanced",
    overview:
      "Learn ARM architecture concepts with a focus on processor internals, execution modes, registers, pipeline, memory management, and exception handling. Understand Cortex-M and Cortex-A processor families.",
    topics: [
      "Introduction to ARM Architecture",
      "ARM vs x86 Architecture",
      "RISC Architecture Fundamentals",
      "ARMv7 and ARMv8 Architecture",
      "Cortex-M and Cortex-A Processor Families",
      "ARM Registers and Processor Modes",
      "Pipeline and Instruction Execution",
      "ARM and Thumb Instruction Sets",
      "Exception and Interrupt Handling",
      "Memory Management Unit and TLB",
      "Cache Architecture",
      "JTAG and Trace32 Debugging",
    ],
    outcomes: [
      "Understand ARM processor architecture.",
      "Identify processor registers and execution modes.",
      "Understand instruction execution and pipelines.",
      "Understand interrupts and exceptions.",
      "Learn memory management concepts.",
      "Understand processor debugging techniques.",
    ],
  },

  "python-programming": {
    title: "Python Programming",
    subtitle: "Learn Python Programming and Test Automation",
    description:
      "Build Python programming skills and learn to automate repetitive tasks, process logs, and develop validation scripts.",
    duration: "5 Weeks",
    mode: "Online / Offline",
    level: "Beginner to Intermediate",
    overview:
      "This course introduces Python programming with a practical focus on scripting and automation. Learn to write reusable scripts, process files, handle exceptions, and automate engineering test workflows.",
    topics: [
      "Introduction to Python",
      "Variables and Data Types",
      "Conditional Statements and Loops",
      "Lists, Tuples, Sets and Dictionaries",
      "Functions and Modules",
      "Object-Oriented Programming",
      "File Handling and Exception Handling",
      "Regular Expressions",
      "OS, Subprocess and System Commands",
      "Log Parsing and Data Processing",
      "Python Test Automation",
      "Mini Automation Projects",
    ],
    outcomes: [
      "Write Python programs and scripts.",
      "Automate repetitive engineering tasks.",
      "Read and process log files.",
      "Execute Linux commands using Python.",
      "Handle exceptions and file operations.",
      "Build basic test automation scripts.",
    ],
  },
};

const CourseDetails = () => {
  const searchParams = useSearchParams();
  const courseSlug = searchParams.get("course") || "";
  const course = courseDetails[courseSlug];

  if (!course) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
        <Icon
          icon="solar:book-2-linear"
          className="mb-5 text-6xl text-[#7c3aed]"
        />
        <h1 className="text-3xl font-bold text-gray-800">Course Not Found</h1>
        <p className="mt-3 text-gray-600">
          The training program you are looking for is unavailable.
        </p>
        <Link
          href="/#courses"
          className="mt-6 rounded-lg bg-[#7c3aed] px-6 py-3 font-semibold text-white hover:bg-orange-600"
        >
          Explore Courses
        </Link>
      </section>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#292929] py-20 text-white sm:py-28">
        <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-[#7c3aed]/10 blur-3xl" />

        <div className="container relative mx-auto px-5">
          <div className="max-w-4xl">
            <Link
              href="/#courses"
              className="mb-8 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#7c3aed]"
            >
              <Icon icon="solar:arrow-left-linear" />
              Back to Training Programs
            </Link>

            <p className="mb-4 font-semibold uppercase tracking-[3px] text-[#7c3aed]">
              Professional Training Program
            </p>

            <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {course.title}
            </h1>

            <p className="mb-8 max-w-3xl text-lg leading-8 text-gray-300">
              {course.subtitle}
            </p>

            <p className="max-w-3xl leading-8 text-gray-300">
              {course.description}
            </p>

            {/* <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={`/contact?course=${encodeURIComponent(course.title)}`}
                className="inline-flex items-center gap-2 rounded-lg bg-[#7c3aed] px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Enquire Now
                <Icon icon="solar:arrow-right-linear" />
              </Link>

              <Link
                href={`/contact?course=${encodeURIComponent(course.title)}&request=brochure`}
                className="inline-flex items-center gap-2 rounded-lg border border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-gray-900"
              >
                Request Brochure
                <Icon icon="solar:download-linear" />
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      {/* Course Information */}
      <section className="border-b border-gray-200 bg-[#f7f7f7] py-9">
        <div className="container mx-auto grid grid-cols-1 gap-7 px-5 sm:grid-cols-3">
          {[
            {
              icon: "solar:calendar-linear",
              label: "Course Duration",
              value: course.duration,
            },
            {
              icon: "solar:monitor-linear",
              label: "Training Mode",
              value: course.mode,
            },
            {
              icon: "solar:chart-2-linear",
              label: "Course Level",
              value: course.level,
            },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#7c3aed]/10">
                <Icon icon={item.icon} className="text-3xl text-[#7c3aed]" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="font-bold text-gray-800">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-5 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="mb-3 font-semibold uppercase tracking-widest text-[#7c3aed]">
              Course Overview
            </p>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
              About This Training Program
            </h2>

            <p className="text-base leading-8 text-gray-600">
              {course.overview}
            </p>
          </div>

          <div className="rounded-2xl bg-[#7c3aed] p-8 text-white shadow-lg">
            <Icon
              icon="solar:graduation-cap-linear"
              className="mb-5 text-5xl"
            />

            <h3 className="mb-4 text-2xl font-bold">
              Ready to Start Learning?
            </h3>

            <p className="mb-7 leading-7 text-white/90">
              Take the next step towards your technical career with our
              industry-oriented training programs.
            </p>

            <Link
              href={`/contact?course=${encodeURIComponent(course.title)}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-bold text-[#7c3aed] transition hover:bg-gray-100"
            >
              Contact Us
              <Icon icon="solar:arrow-right-linear" />
            </Link>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-[#f7f7f7] py-16 sm:py-20">
        <div className="container mx-auto px-5">
          <div className="mb-10">
            <p className="mb-3 font-semibold uppercase tracking-widest text-[#7c3aed]">
              What You Will Learn
            </p>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Course Curriculum
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              Explore the topics covered throughout this training program.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {course.topics.map((topic, index) => (
              <div
                key={topic}
                className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 transition hover:border-[#7c3aed] hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#7c3aed]/10 font-bold text-[#7c3aed]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="font-medium leading-6 text-gray-800">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-5">
          <div className="mb-10 text-center">
            <p className="mb-3 font-semibold uppercase tracking-widest text-[#7c3aed]">
              Your Career Growth
            </p>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What You Will Gain
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">
            {course.outcomes.map((outcome) => (
              <div key={outcome} className="flex items-start gap-3">
                <Icon
                  icon="solar:check-circle-bold"
                  className="mt-1 shrink-0 text-2xl text-[#7c3aed]"
                />
                <p className="leading-7 text-gray-700">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#292929] py-16 text-center text-white">
        <div className="container mx-auto px-5">
          <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
            Start Your Learning Journey Today
          </h2>

          <p className="mx-auto mb-8 max-w-2xl leading-7 text-gray-300">
            Join our professional training program and develop the technical
            skills required to succeed in the industry.
          </p>

          {/* <Link
            href={`/contact?course=${encodeURIComponent(course.title)}`}
            className="inline-flex items-center gap-2 rounded-lg bg-[#7c3aed] px-8 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            Enquire About This Course
            <Icon icon="solar:arrow-right-linear" className="text-xl" />
          </Link> */}
        </div>
      </section>
    </main>
  );
};

export default CourseDetails;
