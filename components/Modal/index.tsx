import React, { useRef } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

// Modal Container
export default function Modal({
  isOpen,
  onDismiss,
  children,
}: {
  isOpen: boolean;
  onDismiss: () => void;
  children: React.ReactNode;
}) {
  const node = useRef<HTMLDivElement>();

  // Close modal when outside click
  useOnClickOutside(node, isOpen ? onDismiss : undefined);

  return (
    <>
      <div
        className={`fixed z-10 top-0 bottom-0 left-0 right-0 items-center justify-center bg-gray-800 opacity-10 ${
          isOpen ? "flex" : "hidden"
        }`}
      ></div>
      <div
        ref={node as any}
        className={`fixed z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[420px] w-full max-h-[80%] overflow-y-auto bg-white shadow-lg border border-solid border-gray-200 rounded-lg p-4 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {children}
      </div>
    </>
  );
}
