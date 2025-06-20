"use client"; // Important if you're using Next.js with App Router

import React from 'react'
import Webcam from 'react-webcam' // ✅ Correct Webcam component
import Image from 'next/image' // ✅ You must import this too

const RecordAnswerSection = () => {
  return (
    <div className="flex flex-col my-20 justify-center items-center bg-black rounded-lg p-5">
      <Image src="/webcam.png" width={200} height={200} alt="Webcam Icon" />
      <Webcam /> {/* ✅ Real webcam feed */}
    </div>
  )
}

export default RecordAnswerSection
