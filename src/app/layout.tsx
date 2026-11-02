// import { Poppins } from "next/font/google";
// // @ts-ignore Next.js provides side-effect CSS imports.
// import "./globals.css";
// import Header from "@/app/components/Layout/Header";
// import Footer from "@/app/components/Layout/Footer";
// import ScrollToTop from "@/app/components/ScrollToTop";

// const font = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${font.className}`}>
//         <Header />
//         {children}
//         <Footer />
//         <ScrollToTop />
//       </body>
//     </html>
//   );
// }

import { Poppins } from "next/font/google";
import "./globals.css";

import Header from "@/app/components/Layout/Header";
import Footer from "@/app/components/Layout/Footer";
import ScrollToTop from "@/app/components/ScrollToTop";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <Header />

        {/* Main page content */}
        <main className="pt-20">{children}</main>

        <Footer />

        {/* Batch Announcement */}
        <ScrollToTop />
      </body>
    </html>
  );
}
