"use client"; // ✅ Marks this as a client component

import React, { useState, useEffect } from "react";
import useSpeechToText from "react-hook-speech-to-text";
import Webcam from "react-webcam";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";

const RecordAnswerSection = () => {
  const [userAnswer, setUserAnswer] = useState("");

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    if (results?.length) {
      const combined = results.map((r) => r.transcript).join(" ");
      setUserAnswer(combined);
    }
  }, [results]);

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col my-10 justify-center items-center bg-black rounded-lg p-5 w-full">
        <Image src="/webcam.png" width={100} height={100} alt="Webcam Icon" />
        <Webcam
          mirrored={true}
          style={{ height: 300, width: "100%", zIndex: 10 }}
        />
      </div>

      <Button
        variant="outline"
        className="my-5"
        onClick={() => {
          isRecording ? stopSpeechToText() : startSpeechToText();
        }}
      >
        <Mic className="mr-2" />
        {isRecording ? "Recording..." : "Start Recording"}
      </Button>

      <Button
        onClick={() => console.log("📝 User Answer:", userAnswer)}
        className="mt-3"
      >
        Show User Answer
      </Button>

      {error && (
        <p className="text-red-500 mt-2 text-sm">Error: {error.message}</p>
      )}
    </div>
  );
};

export default RecordAnswerSection;
