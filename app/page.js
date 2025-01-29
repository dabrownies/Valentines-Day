"use client"
import { TypeAnimation } from "react-type-animation";
import React, {useState} from "react";
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"

import { motion } from "framer-motion";


export default function Home() {
  const [showImage, setShowImage] = useState(false)
  const { toast } = useToast()

  return (
    <div className="flex items-center justify-center h-screen text-center mb-10 bg-primary">
      {!showImage ? (
        <TypeAnimation
          sequence={[
            "hi.", 2000,
            "i have a question.", 2000,
            "and there is only one right answer...", 2000,
            "so.", 2000,
            "when I ask it...", 2000,
            "think very carefully.", 2000,
            "no pressure.", 3000,
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
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <TypeAnimation
            sequence={[
              "will you be my valentine? <3", 2000
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
          <img
            src="/images/IMG_0999.GIF"
            alt="Centered"
            className="opacity-0 animate-fade-in w-full max-w-5xl h-auto mt-5"
          />
          <div className="flex items-center justify-center space-x-12 mt-5">
            <motion.div 
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                className="rounded-full px-6 py-4 text-lg font-bold bg-secondary text-white border-secondary hover:bg-secondary hover:text-white"
                variant="outline"
                onClick={() => {
                  toast({
                    title: "Scheduled: Date with me ",
                    description: "Friday, February 14, 2025 at 8:00 PM",
                    className: "bg-secondary text-white border-secondary",
                    action: (
                      <ToastAction altText="Confirm">Confirm</ToastAction>
                    ),
                  })
                }}
              >
                yes
              </Button>
            </motion.div>
            <div className="text-sm text-black">
              or
            </div>
            <motion.div 
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                className="rounded-full px-6 py-4 text-lg font-bold bg-secondary text-white border-secondary hover:bg-secondary hover:text-white"
                variant="outline"
                onClick={() => {
                  toast({
                    title: "Scheduled: Date with me ",
                    description: "Friday, February 14, 2025 at 8:00 PM",
                    className: "bg-secondary text-white border-secondary",
                    action: (
                      <ToastAction altText="Confirm">Confirm</ToastAction>
                    ),
                  })
                }}
              >
                yes
              </Button>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}
