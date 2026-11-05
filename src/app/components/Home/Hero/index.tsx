import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

const Hero = () => {
  return (
    <section id="home-section" className="bg-white">
      <div className="container pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-6 gap-10 items-center">
          {/* Left Content */}
          <div className="col-span-6 flex flex-col gap-7">
            <h1 className="text-midnight_text lg:text-start text-center font-semibold leading-tight text-4xl sm:text-5xl lg:text-4xl">
              Master Embedded Systems with Industry Experts
            </h1>

            <p className="text-black/70 text-lg lg:text-start text-center max-w-xl leading-8">
              Build a strong foundation in Embedded C, ARM Architecture,
              Microcontrollers, and Firmware Development through practical
              training, real-time projects, and industry-oriented learning. Turn
              your technical knowledge into real-world engineering skills.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-3 justify-center lg:justify-start">
              <a
                href="/#courses"
                className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 transition duration-300"
              >
                Explore Courses
                <Icon icon="solar:arrow-right-linear" className="text-2xl" />
              </a>

              {/* <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-midnight_text hover:bg-purple-600 text-white font-semibold px-8 py-4 transition duration-300"
              >
                Enroll Now
                <Icon icon="solar:arrow-right-linear" className="text-2xl" />
              </a> */}
            </div>

            {/* Training Highlights */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-5 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/banner/check-circle.svg"
                  alt="check"
                  width={24}
                  height={24}
                />
                <p className="text-sm sm:text-base text-black">
                  Hands-on Hardware Training
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src="/images/banner/check-circle.svg"
                  alt="check"
                  width={24}
                  height={24}
                />
                <p className="text-sm sm:text-base text-black">
                  Real-Time Projects
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src="/images/banner/check-circle.svg"
                  alt="check"
                  width={24}
                  height={24}
                />
                <p className="text-sm sm:text-base text-black">
                  Career-Focused Learning
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-span-6 flex justify-center items-center">
            <Image
              src="/images/banner/CollaborativeEmbeddedSystemsLearningLab.png"
              alt="Embedded systems engineering training"
              width={1000}
              height={805}
              priority
              className="w-full h-auto max-w-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
