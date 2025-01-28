"use client"
import { TypeAnimation } from "react-type-animation";
import React, {useState} from "react";

export default function Home() {
  const [showImage, setShowImage] = useState(false)

  return (
    <div className="flex items-center justify-center h-screen text-center mb-10">
      {!showImage ? (
        <TypeAnimation
          sequence={[
            "Hi.", 2000,
            "I have a question.", 2000,
            "And there is only one right answer...", 2000,
            "So.", 2000,
            "When I ask it, think very carefully.", 2000,
            "No pressure.", 2000,
            () => setShowImage(true),
          ]}
          wrapper="span"
          speed={50}
          style={{ 
            fontSize: "1.9em", 
            display: "inline-block",
            color: "black",
            fontWeight: "bold"
          }}
          repeat={0}
        />
      ) : (
        <img
          src="/images/IMG_0999.GIF"
          alt="Centered"
          className="opacity-0 animate-fade-in w-1/2"
        />
      )}
    </div>
  );
}
