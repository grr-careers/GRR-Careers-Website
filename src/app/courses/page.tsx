import { Suspense } from "react";
import CoursesClient from "./CoursesClient";

export default function CoursesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-500">Loading course details...</p>
        </div>
      }
    >
      <CoursesClient />
    </Suspense>
  );
}
