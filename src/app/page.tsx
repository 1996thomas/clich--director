"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      router.push("/films");
    }
  }, [progress, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-5 text-6xl font-black">{progress}%</div>
      <div className="w-48 h-12 bg-gray-800 overflow-hidden">
        <div
          className="h-full bg-gray-100 transition-all duration-75"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
