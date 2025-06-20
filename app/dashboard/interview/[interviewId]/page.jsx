"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";
import Link from "next/link";
import Webcam from "react-webcam";
import { useParams } from "next/navigation";

const InterviewPage = () => {
  const params = useParams();
  const interviewId = params?.interviewId;

  const [interviewData, setInterviewData] = useState(null);
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false); // ✅ Controls access

  useEffect(() => {
    if (interviewId) {
      GetInterviewDetails();
    }
  }, [interviewId]);

  const GetInterviewDetails = async () => {
    try {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, interviewId));
      setInterviewData(result[0]);
    } catch (error) {
      console.error("Error fetching interview details:", error);
      alert("Failed to fetch interview details.");
    }
  };

  const handlePermissionRequest = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setPermissionGranted(true);
      setWebCamEnabled(true);
      alert("✅ Camera and Microphone access granted!");
    } catch (err) {
      alert("❌ Permission denied or error occurred.");
      console.error("Permission error:", err);
    }
  };

  return (
    <div className="my-10">
      <h2 className="font-bold text-2xl">Let's get started</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="flex flex-col my-5 gap-5">
          {/* Interview Details */}
          <div className="flex flex-col p-5 rounded-lg border gap-5">
            <h2 className="text-lg">
              <strong>Job Role/Position: </strong>
              {interviewData?.jobPosition}
            </h2>
            <h2 className="text-lg">
              <strong>Tech Stack: </strong>
              {interviewData?.jobDesc}
            </h2>
            <h2 className="text-lg">
              <strong>Experience: </strong>
              {interviewData?.jobExperience}
            </h2>
          </div>

          {/* Info Box */}
          <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-100">
            <h2 className="flex gap-2 items-center text-yellow-500">
              <Lightbulb />
              <span>Information</span>
            </h2>
            <p className="mt-3 text-black">
              <strong>
                Enable your webcam and microphone to start the AI-generated mock interview.
                It includes 5 questions for you to answer, and a report will be generated based on your responses.
              </strong>
              <br />
              <span className="text-sm mt-1 block text-gray-700">
                NOTE: We never record your video. You can disable webcam access at any time.
              </span>
            </p>
          </div>
        </div>

       <div className="flex flex-col items-center justify-center w-full">
  {/* Webcam Preview */}
  {permissionGranted ? (
    <Webcam
      mirrored
      style={{ height: 300, width: "100%" }}
      onUserMedia={() => setWebCamEnabled(true)}
      onUserMediaError={() => {
        alert("Webcam access error");
        setWebCamEnabled(false);
        setPermissionGranted(false);
      }}
    />
  ) : (
    <WebcamIcon className="h-72 my-7 border rounded-lg w-full p-20 bg-secondary" />
  )}

  {/* Always-visible Button */}
  <button
    onClick={handlePermissionRequest}
    className="mt-5 text-sm text-white bg-black border border-gray-500 px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-200"
  >
    Grant Camera & Mic Access
  </button>
</div>

      </div>

      {/* Start Interview Button */}
      <div className="flex justify-end items-end mt-6">
        <Link
          href={`/dashboard/interview/${interviewId}/start`}
          className={permissionGranted ? "" : "pointer-events-none"}
        >
          <Button disabled={!permissionGranted} variant={permissionGranted ? "default" : "secondary"}>
            Start Interview
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default InterviewPage;
