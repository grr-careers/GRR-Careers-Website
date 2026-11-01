// import { Configuration } from "./Configuration"
// import { DocNavigation } from "./DocNavigation"
// import { Introduction } from "./Introduction"
// import { PackageStructure } from "./PackageStructure"
// import { QuickStart } from "./QuickStart"

// export const Documentation = () => {
//     return (
//         <div className="" >
//             <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) p-6 lg:pt-44 pt-16">
//                 <div className="grid grid-cols-12 gap-6">
//                     <div className="lg:col-span-3 col-span-12 lg:block hidden">
//                         <DocNavigation />
//                     </div>
//                     <div className="lg:col-span-9 col-span-12">
//                         <Introduction />
//                         <PackageStructure />
//                         <QuickStart />
//                         <Configuration />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

import { DocNavigation } from "./DocNavigation";
import { Introduction } from "./Introduction";
import { PackageStructure } from "./PackageStructure";
import { QuickStart } from "./QuickStart";
import { Configuration } from "./Configuration";

export const Documentation = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto max-w-[1440px] px-4 md:px-6 pt-12 lg:pt-20 pb-20">
        <div className="grid grid-cols-12 gap-8">
          {/* LEFT SIDEBAR */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <DocNavigation />
            </div>
          </aside>

          {/* MAIN DOCUMENTATION */}
          <main className="col-span-12 lg:col-span-9 min-w-0">
            <Introduction />

            <PackageStructure />

            <QuickStart />

            <Configuration />
          </main>
        </div>
      </div>
    </div>
  );
};
