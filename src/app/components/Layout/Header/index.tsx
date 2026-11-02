// // // "use client";
// // // import Link from "next/link";
// // // import { useEffect, useRef, useState } from "react";
// // // import Logo from "./Logo";
// // // import HeaderLink from "../Header/Navigation/HeaderLink";
// // // import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
// // // // import Signin from "@/app/components/Auth/SignIn";
// // // // import SignUp from "@/app/components/Auth/SignUp";
// // // import { Icon } from "@iconify/react/dist/iconify.js";
// // // import { HeaderType } from "@/app/types/menu";

// // // const Header: React.FC = () => {
// // //   const [navbarOpen, setNavbarOpen] = useState(false);
// // //   const [sticky, setSticky] = useState(false);
// // //   const [isSignInOpen, setIsSignInOpen] = useState(false);
// // //   const [isSignUpOpen, setIsSignUpOpen] = useState(false);
// // //   const [navLink, setNavLink] = useState<HeaderType[]>([]);

// // //   const signInRef = useRef<HTMLDivElement>(null);
// // //   const signUpRef = useRef<HTMLDivElement>(null);
// // //   const mobileMenuRef = useRef<HTMLDivElement>(null);

// // //   useEffect(() => {
// // //     const fetchData = async () => {
// // //       try {
// // //         const res = await fetch("/api/data");
// // //         if (!res.ok) throw new Error("Failed to fetch");
// // //         const data = await res.json();
// // //         setNavLink(data.HeaderData);
// // //       } catch (error) {
// // //         console.error("Error fetching service:", error);
// // //       }
// // //     };
// // //     fetchData();
// // //   }, []);

// // //   const handleScroll = () => {
// // //     setSticky(window.scrollY >= 80);
// // //   };

// // //   const handleClickOutside = (event: MouseEvent) => {
// // //     if (
// // //       signInRef.current &&
// // //       !signInRef.current.contains(event.target as Node)
// // //     ) {
// // //       setIsSignInOpen(false);
// // //     }
// // //     if (
// // //       signUpRef.current &&
// // //       !signUpRef.current.contains(event.target as Node)
// // //     ) {
// // //       setIsSignUpOpen(false);
// // //     }
// // //     if (
// // //       mobileMenuRef.current &&
// // //       !mobileMenuRef.current.contains(event.target as Node) &&
// // //       navbarOpen
// // //     ) {
// // //       setNavbarOpen(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     window.addEventListener("scroll", handleScroll);
// // //     document.addEventListener("mousedown", handleClickOutside);
// // //     return () => {
// // //       window.removeEventListener("scroll", handleScroll);
// // //       document.removeEventListener("mousedown", handleClickOutside);
// // //     };
// // //   }, [navbarOpen, isSignInOpen, isSignUpOpen]);

// // //   useEffect(() => {
// // //     if (isSignInOpen || isSignUpOpen || navbarOpen) {
// // //       document.body.style.overflow = "hidden";
// // //     } else {
// // //       document.body.style.overflow = "";
// // //     }
// // //   }, [isSignInOpen, isSignUpOpen, navbarOpen]);

// // //   return (
// // //     <header
// // //       className={`fixed top-0 z-40 w-full transition-all duration-300 bg-transparent ${
// // //         sticky ? "bg-white shadow-lg py-2" : "shadow-none py-4"
// // //       }`}
// // //     >
// // //       <div>
// // //         <div className="container flex items-center justify-between">
// // //           <Logo />
// // //           <nav className="hidden lg:flex grow items-center lg:gap-5 xl:gap-8 justify-center">
// // //             {navLink.map((item, index) => (
// // //               <HeaderLink key={index} item={item} />
// // //             ))}
// // //           </nav>
// // //           {/* <div className="flex items-center gap-4">
// // //             <Link
// // //               href="#"
// // //               className="hidden lg:block bg-primary text-white hover:bg-primary/15 hover:text-primary py-2 px-6 rounded-full text-lg font-medium"
// // //               onClick={() => {
// // //                 setIsSignInOpen(true);
// // //               }}
// // //             >
// // //               Sign In
// // //             </Link>
// // //             {isSignInOpen && (
// // //               <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
// // //                 <div
// // //                   ref={signInRef}
// // //                   className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 text-center bg-white"
// // //                 >
// // //                   <button
// // //                     onClick={() => setIsSignInOpen(false)}
// // //                     className="absolute top-0 right-0 mr-4 mt-8 hover:cursor-pointer"
// // //                     aria-label="Close Sign In Modal"
// // //                   >
// // //                     <Icon
// // //                       icon="material-symbols:close-rounded"
// // //                       width={24}
// // //                       height={24}
// // //                       className="text-black hover:text-primary text-24 inline-block me-2"
// // //                     />
// // //                   </button>
// // //                   <Signin />
// // //                 </div>
// // //               </div>
// // //             )}
// // //             <Link
// // //               href="#"
// // //               className="hidden lg:block bg-primary/15 hover:bg-primary text-primary hover:text-white py-2 px-6 rounded-full text-lg font-medium"
// // //               onClick={() => {
// // //                 setIsSignUpOpen(true);
// // //               }}
// // //             >
// // //               Sign Up
// // //             </Link>
// // //             {isSignUpOpen && (
// // //               <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
// // //                 <div
// // //                   ref={signUpRef}
// // //                   className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-white backdrop-blur-md px-8 pt-14 pb-8 text-center"
// // //                 >
// // //                   <button
// // //                     onClick={() => setIsSignUpOpen(false)}
// // //                     className="absolute top-0 right-0 mr-4 mt-8 hover:cursor-pointer"
// // //                     aria-label="Close Sign In Modal"
// // //                   >
// // //                     <Icon
// // //                       icon="material-symbols:close-rounded"
// // //                       width={24}
// // //                       height={24}
// // //                       className="text-black hover:text-primary text-24 inline-block me-2"
// // //                     />
// // //                   </button>
// // //                   <SignUp />
// // //                 </div>
// // //               </div>
// // //             )}
// // //             <button
// // //               onClick={() => setNavbarOpen(!navbarOpen)}
// // //               className="block lg:hidden p-2 rounded-lg hover:cursor-pointer"
// // //               aria-label="Toggle mobile menu"
// // //             >
// // //               <span className="block w-6 h-0.5 bg-black"></span>
// // //               <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
// // //               <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
// // //             </button>
// // //           </div> */}
// // //         </div>
// // //         {navbarOpen && (
// // //           <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
// // //         )}
// // //         <div
// // //           ref={mobileMenuRef}
// // //           className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${
// // //             navbarOpen ? "translate-x-0" : "translate-x-full"
// // //           } z-50`}
// // //         >
// // //           <div className="flex items-center justify-between gap-2 p-4">
// // //             <div>
// // //               <Logo />
// // //             </div>
// // //             {/*  */}
// // //             <button
// // //               onClick={() => setNavbarOpen(false)}
// // //               className="hover:cursor-pointer"
// // //               aria-label="Close menu Modal"
// // //             >
// // //               <Icon
// // //                 icon="material-symbols:close-rounded"
// // //                 width={24}
// // //                 height={24}
// // //                 className="text-black hover:text-primary text-24 inline-block me-2"
// // //               />
// // //             </button>
// // //           </div>
// // //           <nav className="flex flex-col items-start p-4">
// // //             {navLink.map((item, index) => (
// // //               <MobileHeaderLink key={index} item={item} />
// // //             ))}
// // //           </nav>
// // //         </div>
// // //       </div>
// // //     </header>
// // //   );
// // // };

// // // export default Header;

// // "use client";

// // import { useEffect, useRef, useState } from "react";
// // import Logo from "./Logo";
// // import HeaderLink from "../Header/Navigation/HeaderLink";
// // import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
// // import { Icon } from "@iconify/react/dist/iconify.js";
// // import { HeaderType } from "@/app/types/menu";

// // const Header: React.FC = () => {
// //   const [navbarOpen, setNavbarOpen] = useState(false);
// //   const [sticky, setSticky] = useState(false);
// //   const [navLink, setNavLink] = useState<HeaderType[]>([]);

// //   const mobileMenuRef = useRef<HTMLDivElement>(null);
// //   // const hideAnnouncement = () => {
// //   //   window.dispatchEvent(new Event("grr:hide-announcement"));
// //   // };

// //   const hideAnnouncement = () => {
// //     window.dispatchEvent(new Event("grr:hide-announcement"));
// //   };

// //   const showAnnouncement = () => {
// //     window.dispatchEvent(new Event("grr:show-announcement"));
// //   };

// //   const closeMobileMenu = () => {
// //     setNavbarOpen(false);
// //     showAnnouncement();
// //   };
// //   // Fetch navigation data
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const res = await fetch("/api/data");

// //         if (!res.ok) {
// //           throw new Error("Failed to fetch navigation data");
// //         }

// //         const data = await res.json();
// //         setNavLink(data.HeaderData || []);
// //       } catch (error) {
// //         console.error("Error fetching navigation:", error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   // Sticky header
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setSticky(window.scrollY >= 80);
// //     };

// //     handleScroll();

// //     window.addEventListener("scroll", handleScroll, { passive: true });

// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, []);

// //   // Close mobile menu when clicking outside
// //   useEffect(() => {
// //     // const handleClickOutside = (event: MouseEvent) => {
// //     //   if (
// //     //     mobileMenuRef.current &&
// //     //     !mobileMenuRef.current.contains(event.target as Node)
// //     //   ) {
// //     //     setNavbarOpen(false);
// //     //   }
// //     // };
// //     const handleClickOutside = (event: MouseEvent) => {
// //       if (
// //         mobileMenuRef.current &&
// //         !mobileMenuRef.current.contains(event.target as Node)
// //       ) {
// //         closeMobileMenu();
// //       }
// //     };

// //     if (navbarOpen) {
// //       document.addEventListener("mousedown", handleClickOutside);
// //     }

// //     return () => {
// //       document.removeEventListener("mousedown", handleClickOutside);
// //     };
// //   }, [navbarOpen]);

// //   // Lock body scroll when mobile menu is open
// //   useEffect(() => {
// //     if (navbarOpen) {
// //       document.body.style.overflow = "hidden";
// //     } else {
// //       document.body.style.overflow = "";
// //     }

// //     return () => {
// //       document.body.style.overflow = "";
// //     };
// //   }, [navbarOpen]);

// //   // Close mobile menu with Escape key
// //   useEffect(() => {
// //     const handleEscape = (event: KeyboardEvent) => {
// //       if (event.key === "Escape") {
// //         setNavbarOpen(false);
// //       }
// //     };

// //     document.addEventListener("keydown", handleEscape);

// //     return () => {
// //       document.removeEventListener("keydown", handleEscape);
// //     };
// //   }, []);

// //   return (
// //     <header
// //       className={`fixed top-0 z-40 w-full transition-all duration-300 ${
// //         sticky ? "bg-white shadow-lg py-2" : "bg-white shadow-none py-4"
// //       }`}
// //     >
// //       <div className="container flex items-center justify-between">
// //         {/* Logo */}
// //         <Logo />

// //         {/* Desktop Navigation */}
// //         <nav className="hidden lg:flex grow items-center lg:gap-5 xl:gap-8 justify-center">
// //           {navLink.map((item, index) => (
// //             <HeaderLink key={index} item={item} />
// //           ))}
// //         </nav>

// //         {/* Mobile Menu Button */}
// //         {/* <button
// //           type="button"
// //           onClick={() => setNavbarOpen(true)}
// //           className="flex lg:hidden items-center justify-center p-2 rounded-lg text-black hover:bg-gray-100 transition-colors"
// //           aria-label="Open mobile navigation"
// //           aria-expanded={navbarOpen}
// //           aria-controls="mobile-navigation"
// //         >
// //           <Icon icon="material-symbols:menu-rounded" width={30} height={30} />
// //         </button> */}
// //         {/* <button
// //           type="button"
// //           onClick={() => {
// //             hideAnnouncement();
// //             setNavbarOpen(true);
// //           }}
// //           className="flex lg:hidden items-center justify-center p-2 rounded-lg text-black hover:bg-gray-100"
// //           aria-label="Open mobile navigation"
// //         >
// //           <Icon icon="material-symbols:menu-rounded" width={30} height={30} />
// //         </button> */}
// //         <button
// //           type="button"
// //           onClick={() => {
// //             hideAnnouncement();
// //             setNavbarOpen(true);
// //           }}
// //           className="flex lg:hidden items-center justify-center p-2 rounded-lg"
// //           aria-label="Open mobile navigation"
// //         >
// //           <Icon icon="material-symbols:menu-rounded" width={30} height={30} />
// //         </button>
// //       </div>

// //       {/* Mobile Menu Overlay */}
// //       {navbarOpen && (
// //         <div
// //           className="fixed inset-0 bg-black/50 z-40 lg:hidden"
// //           onClick={() => setNavbarOpen(false)}
// //           aria-hidden="true"
// //         />
// //       )}

// //       {/* Mobile Sidebar */}
// //       <div
// //         id="mobile-navigation"
// //         ref={mobileMenuRef}
// //         aria-hidden={!navbarOpen}
// //         className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
// //           navbarOpen ? "translate-x-0" : "translate-x-full"
// //         }`}
// //       >
// //         {/* Sidebar Header */}
// //         <div className="flex items-center justify-between gap-2 p-4 border-b border-gray-100">
// //           <Logo />

// //           {/* <button
// //             type="button"
// //             onClick={() => setNavbarOpen(false)}
// //             className="flex items-center justify-center p-2 rounded-lg text-black hover:bg-gray-100 transition-colors"
// //             aria-label="Close mobile navigation"
// //           >
// //             <Icon
// //               icon="material-symbols:close-rounded"
// //               width={26}
// //               height={26}
// //             />
// //           </button> */}
// //           <button
// //             type="button"
// //             onClick={closeMobileMenu}
// //             aria-label="Close mobile navigation"
// //           >
// //             <Icon
// //               icon="material-symbols:close-rounded"
// //               width={26}
// //               height={26}
// //             />
// //           </button>
// //         </div>

// //         {/* Mobile Navigation Links */}
// //         <nav className="flex flex-col items-start p-4 overflow-y-auto max-h-[calc(100vh-80px)]">
// //           {navLink.map((item, index) => (
// //             <MobileHeaderLink key={index} item={item} />
// //           ))}
// //         </nav>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;

// "use client";

// import { useEffect, useRef, useState } from "react";
// import Logo from "./Logo";
// import HeaderLink from "../Header/Navigation/HeaderLink";
// import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
// import { Icon } from "@iconify/react/dist/iconify.js";
// import { HeaderType } from "@/app/types/menu";

// const Header: React.FC = () => {
//   const [navbarOpen, setNavbarOpen] = useState(false);
//   const [sticky, setSticky] = useState(false);
//   const [navLink, setNavLink] = useState<HeaderType[]>([]);

//   const mobileMenuRef = useRef<HTMLDivElement>(null);

//   // Fetch navigation data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("/api/data");

//         if (!res.ok) {
//           throw new Error("Failed to fetch navigation data");
//         }

//         const data = await res.json();
//         setNavLink(data.HeaderData || []);
//       } catch (error) {
//         console.error("Error fetching navigation:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Sticky header
//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY >= 80);
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll, {
//       passive: true,
//     });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Sync announcement visibility with navbar state
//   useEffect(() => {
//     const eventName = navbarOpen
//       ? "grr:hide-announcement"
//       : "grr:show-announcement";

//     window.dispatchEvent(new Event(eventName));
//   }, [navbarOpen]);

//   // Close mobile menu when clicking outside
//   useEffect(() => {
//     if (!navbarOpen) return;

//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         mobileMenuRef.current &&
//         !mobileMenuRef.current.contains(event.target as Node)
//       ) {
//         setNavbarOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [navbarOpen]);

//   // Close mobile menu using Escape key
//   useEffect(() => {
//     if (!navbarOpen) return;

//     const handleEscape = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         setNavbarOpen(false);
//       }
//     };

//     document.addEventListener("keydown", handleEscape);

//     return () => {
//       document.removeEventListener("keydown", handleEscape);
//     };
//   }, [navbarOpen]);

//   // Lock body scrolling while mobile menu is open
//   useEffect(() => {
//     if (navbarOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [navbarOpen]);

//   // Close navbar and restore announcement
//   const closeMobileMenu = () => {
//     setNavbarOpen(false);
//   };

//   return (
//     <header
//       className={`fixed top-0 z-40 w-full transition-all duration-300 ${
//         sticky ? "bg-white shadow-lg py-2" : "bg-white shadow-none py-4"
//       }`}
//     >
//       <div className="container flex items-center justify-between">
//         {/* Logo */}
//         <Logo />

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex grow items-center lg:gap-5 xl:gap-8 justify-center">
//           {navLink.map((item, index) => (
//             <HeaderLink key={index} item={item} />
//           ))}
//         </nav>

//         {/* Mobile Hamburger Button */}
//         <button
//           type="button"
//           onClick={() => setNavbarOpen(true)}
//           className="flex lg:hidden items-center justify-center p-2 rounded-lg text-black hover:bg-gray-100 transition-colors"
//           aria-label="Open mobile navigation"
//           aria-expanded={navbarOpen}
//           aria-controls="mobile-navigation"
//         >
//           <Icon icon="material-symbols:menu-rounded" width={30} height={30} />
//         </button>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {navbarOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-40 lg:hidden"
//           onClick={closeMobileMenu}
//           aria-hidden="true"
//         />
//       )}

//       {/* Mobile Sidebar */}
//       <div
//         id="mobile-navigation"
//         ref={mobileMenuRef}
//         aria-hidden={!navbarOpen}
//         className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
//           navbarOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
//         }`}
//       >
//         {/* Sidebar Header */}
//         <div className="flex items-center justify-between gap-2 p-4 border-b border-gray-100">
//           <Logo />

//           <button
//             type="button"
//             onClick={closeMobileMenu}
//             className="flex items-center justify-center p-2 rounded-lg text-black hover:bg-gray-100 transition-colors"
//             aria-label="Close mobile navigation"
//           >
//             <Icon
//               icon="material-symbols:close-rounded"
//               width={26}
//               height={26}
//             />
//           </button>
//         </div>

//         {/* Mobile Navigation Links */}
//         <nav
//           className="flex flex-col items-start p-4 overflow-y-auto max-h-[calc(100vh-80px)]"
//           onClick={closeMobileMenu}
//         >
//           {navLink.map((item, index) => (
//             <MobileHeaderLink key={index} item={item} />
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { Icon } from "@iconify/react/dist/iconify.js";
import { HeaderType } from "@/app/types/menu";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [navLink, setNavLink] = useState<HeaderType[]>([]);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Fetch navigation data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");

        if (!res.ok) {
          throw new Error("Failed to fetch navigation data");
        }

        const data = await res.json();
        setNavLink(data.HeaderData || []);
      } catch (error) {
        console.error("Error fetching navigation:", error);
      }
    };

    fetchData();
  }, []);

  // Handle sticky header shadow without changing header height
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Show/hide batch announcement based on mobile menu state
  useEffect(() => {
    window.dispatchEvent(
      new Event(navbarOpen ? "grr:hide-announcement" : "grr:show-announcement"),
    );
  }, [navbarOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!navbarOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setNavbarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  // Close menu using Escape key
  useEffect(() => {
    if (!navbarOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setNavbarOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [navbarOpen]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [navbarOpen]);

  // Close mobile navigation
  const closeMobileMenu = () => {
    setNavbarOpen(false);
  };

  return (
    // <header
    //   className={`fixed top-0 left-0 right-0 z-50 h-20 w-full bg-white transition-shadow duration-300 ${
    //     sticky ? "shadow-lg" : "shadow-none"
    //   }`}
    // >
    <header className={`site-header ${sticky ? "site-header-scrolled" : ""}`}>
      {/* Header Container - Fixed 80px Height */}
      <div className="container flex h-full items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex grow items-center lg:gap-5 xl:gap-8 justify-center">
          {navLink.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setNavbarOpen(true)}
          className="flex lg:hidden items-center justify-center p-2 rounded-lg text-black hover:bg-gray-100 transition-colors"
          aria-label="Open mobile navigation"
          aria-expanded={navbarOpen}
          aria-controls="mobile-navigation"
        >
          <Icon icon="material-symbols:menu-rounded" width={30} height={30} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar */}
      <div
        id="mobile-navigation"
        ref={mobileMenuRef}
        aria-hidden={!navbarOpen}
        inert={!navbarOpen}
        className={`lg:hidden fixed top-0 right-0 z-50 h-full w-full max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          navbarOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between gap-2 p-4 border-b border-gray-100">
          <Logo />

          <button
            type="button"
            onClick={closeMobileMenu}
            className="flex items-center justify-center p-2 rounded-lg text-black hover:bg-gray-100 transition-colors"
            aria-label="Close mobile navigation"
          >
            <Icon
              icon="material-symbols:close-rounded"
              width={26}
              height={26}
            />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav
          className="flex flex-col items-start p-4 overflow-y-auto max-h-[calc(100vh-80px)]"
          onClick={closeMobileMenu}
        >
          {navLink.map((item, index) => (
            <MobileHeaderLink key={index} item={item} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
