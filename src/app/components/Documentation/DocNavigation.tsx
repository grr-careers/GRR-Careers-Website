// "use client";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export const DocNavigation = () => {
//   const [navItem, setNavItem] = useState("version");

//   function getNavItem(item: string) {
//     setNavItem(item);
//   }

//   useEffect(() => {
//     console.log(navItem);
//   }, [navItem]);

//   const DocsNav = [
//     {
//       id: 1,
//       navItem: "Package Versions",
//       hash: "version",
//     },
//     {
//       id: 2,
//       navItem: "Pacakge Structure",
//       hash: "structure",
//     },
//     {
//       id: 3,
//       navItem: "Quick Start",
//       hash: "start",
//     },
//     {
//       id: 4,
//       navItem: "Project Configuration",
//       hash: "configuration",
//     },
//   ];

//   return (
//     <div className="flex flex-col gap-0.5 mt-4 items-start fixed pe-4">
//       {DocsNav.map((item) => {
//         return (
//           <Link
//             key={item.id}
//             href={`#${item.hash}`}
//             onClick={() => getNavItem(item.hash)}
//             className={`py-2.5 hover:bg-primary/20 hover:text-primary dark:hover:text-primary xl:min-w-60 lg:min-w-52 min-w-full px-4 rounded-md text-base font-medium  ${item.hash === navItem
//               ? "bg-primary text-white"
//               : "text-black/60"
//               }`}
//           >
//             {item.navItem}
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

"use client";

import { useState } from "react";

const navigation = [
  {
    title: "Getting Started",
    items: [
      { label: "Introduction", id: "introduction" },
      { label: "Embedded Project Structure", id: "project-structure" },
    ],
  },
  {
    title: "Embedded C Programming",
    items: [
      { label: "C Programming", id: "c-programming" },
      { label: "Pointers", id: "pointers" },
      { label: "Structures & Unions", id: "structures" },
      { label: "Bitfields", id: "bitfields" },
      { label: "Volatile Keyword", id: "volatile" },
    ],
  },
  {
    title: "Communication Protocols",
    items: [
      { label: "SPI Protocol", id: "spi" },
      { label: "I2C Protocol", id: "i2c" },
      { label: "UART Protocol", id: "uart" },
      { label: "QSPI Protocol", id: "qspi" },
    ],
  },
  {
    title: "Register Programming",
    items: [
      { label: "Register Mapping", id: "register-mapping" },
      { label: "Register Read / Write", id: "register-read-write" },
      { label: "Bit Manipulation", id: "bit-manipulation" },
    ],
  },
  {
    title: "Hardware Debugging",
    items: [
      { label: "JTAG Debugging", id: "jtag" },
      { label: "Trace32", id: "trace32" },
      { label: "Oscilloscope & Logic Analyzer", id: "logic-analyzer" },
    ],
  },
];

export const DocNavigation = () => {
  const [active, setActive] = useState("introduction");
  const [expanded, setExpanded] = useState<string[]>([
    "Getting Started",
    "Embedded C Programming",
    "Communication Protocols",
  ]);

  const toggleSection = (title: string) => {
    setExpanded((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title],
    );
  };

  const navigateTo = (id: string) => {
    setActive(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="border-r border-gray-200 pr-5 h-[calc(100vh-120px)] overflow-y-auto">
      <h3 className="text-lg font-bold text-gray-900 mb-5">
        Embedded Systems Docs
      </h3>

      {navigation.map((section) => (
        <div key={section.title} className="mb-5">
          <button
            onClick={() => toggleSection(section.title)}
            className="w-full flex justify-between items-center text-left
                        text-sm font-bold text-gray-800 mb-2"
          >
            {section.title}

            <span>{expanded.includes(section.title) ? "−" : "+"}</span>
          </button>

          {expanded.includes(section.title) && (
            <div className="space-y-1 border-l border-gray-200 ml-1">
              {section.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`block w-full text-left text-sm
                                    px-4 py-2 rounded-r-md transition-all
                                    ${
                                      active === item.id
                                        ? "bg-[#635BFF] text-white font-semibold"
                                        : "text-gray-600 hover:bg-gray-100 hover:text-[#635BFF]"
                                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};
