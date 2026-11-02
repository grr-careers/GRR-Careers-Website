"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hideAnnouncement = () => setIsVisible(false);
    const showAnnouncement = () => setIsVisible(true);

    window.addEventListener("grr:hide-announcement", hideAnnouncement);
    window.addEventListener("grr:show-announcement", showAnnouncement);

    return () => {
      window.removeEventListener("grr:hide-announcement", hideAnnouncement);
      window.removeEventListener("grr:show-announcement", showAnnouncement);
    };
  }, []);

  return (
    <div
      className={`fixed top-[80px] left-0 right-0 z-30 w-full transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      {/* <div className="flex items-center justify-start bg-primary px-4 py-3 text-left text-white shadow-md">
        <p className="w-full text-center text-xs font-semibold sm:text-sm md:text-base">
          New Batch Starting from 9th November 2026
        </p>
        <p className="text-xs font-medium sm:text-sm">
          For Details & Registration: 6380681566
        </p>
      </div> */}
      <div className="flex flex-col items-center justify-center bg-primary px-3 py-2 text-center text-white">
        <p className="text-xs font-semibold sm:text-sm">
          New Batch Starting from 9th November 2026
        </p>
        <p className="text-xs font-medium sm:text-sm">
          For Details & Registration: +91 9148575968
        </p>
      </div>
    </div>
  );
}
