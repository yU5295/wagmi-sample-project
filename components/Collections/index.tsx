import React from "react";
import Collection from "./Collection";

export default function Collections() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {/* Display BAYC Collections */}
      {Array.from(Array(20))
        .map((_, key) => key)
        .map((index: number) => (
          <Collection key={index.toString()} index={index} />
        ))}
    </div>
  );
}
