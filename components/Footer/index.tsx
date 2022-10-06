import React from "react";
import Image from "next/image";

// Footer
export default function Footer() {
  return (
    <footer className="border-t border-solid border-gray-100 py-4">
      <div className="container mx-auto px-4 md:px-6 ">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Workflow Inc. All rights reversed.
        </p>
      </div>
    </footer>
  );
}
