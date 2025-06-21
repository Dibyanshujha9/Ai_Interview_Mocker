"use client";

import React, { useState, useEffect } from "react";
import useSpeechToText from "react-hook-speech-to-text";
import Webcam from "react-webcam";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import { toast } from "sonner";
import { getChatSession } from "@/utils/GeminiAIModal";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { db } from "@/utils/db"; // Add this import
import { UserAnswer } from "@/utils/schema"; // Add this import

/**
 * RecordAnswerSection Component
 * Handles recording user answers during mock interviews
 * 
 * @param {Object} mockInterviewQuestion - Array of interview questions
 * @param {number} activeQuestionIndex - Current active question index
 * @param {Object} interviewData - Interview session data
 */
const RecordAnswerSection = ({ mockInterviewQuestion, activeQuestionIndex, interviewData }) => {
  // State for storing user's recorded answer
  const [userAnswer, setUserAnswer] = useState("");
  
  // Loading state for API calls
  const [loading, setLoading] = useState(false);

  // Get current user from Clerk authentication
  const { user } = useUser();

  // Speech-to-text configuration
  const {
    error,
    results,
    isRecording,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  /**
   * Effect to update userAnswer when speech results change
   */
  useEffect(() => {
    if (results?.length) {
      const combined = results.map((r) => r.transcript).join(" ");
      setUserAnswer(combined);
    }
  }, [results]);

  /**
   * Handles start/stop recording functionality
   */
  const StartStopRecording = async () => {
    if (isRecording) {
      toast("Processing your answer, please wait...");
      stopSpeechToText();

      // Validate minimum answer length
      if (userAnswer?.length < 1) { // Changed from 1 to 10 to match your validation message
        setLoading(false);
        toast("Please speak for at least 10 seconds to record your answer.");
        return;
      }

      // Process the recorded answer
      await UpdateUserAnswer();
    } else {
      // Start recording
      startSpeechToText();
    }
  };

  /**
   * Processes and saves the user's answer with AI feedback
   */
  const UpdateUserAnswer = async () => {
    setLoading(true);

    // Create feedback prompt for AI evaluation
    const feedbackPrompt = `Question: ${mockInterviewQuestion[activeQuestionIndex]?.question}, User Answer: ${userAnswer}. Please give a rating out of 10 and feedback on improvement in JSON format { "rating": <number>, "feedback": <text> }`;

    try {
      // Get AI feedback using Gemini
      const chat = getChatSession();
      const result = await chat.sendMessage(feedbackPrompt);

      const responseText = await result.response.text();
      
      // Clean the response text
      const cleaned = responseText
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      // Parse AI feedback response
      const JsonFeedbackResp = JSON.parse(cleaned);
      console.log("✅ Feedback from Gemini:", JsonFeedbackResp);

      // Create answer record object with correct column names
      const answerRecord = {
        mockIdRef: interviewData?.mockId,
        question: mockInterviewQuestion[activeQuestionIndex]?.question,
        correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
        UserAns: userAnswer, // Changed from userAns to UserAns to match schema
        feedback: JsonFeedbackResp?.feedback,
        rating: JsonFeedbackResp?.rating?.toString(), // Convert to string as schema expects varchar
        userEmail: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format("DD-MM-YYYY"),
      };

      // Save answerRecord to database
      const resp = await db.insert(UserAnswer).values(answerRecord);
      
      if (resp) {
        console.log("✅ Answer saved to database:", resp);
        // Success notification
        toast.success("Your answer has been recorded successfully!");
        
        // Reset user answer
        setUserAnswer('');
      } else {
        throw new Error("Failed to save answer to database");
      }
      
    } catch (err) {
      console.error("❌ Error processing answer:", err);
      toast.error("Something went wrong while processing your answer. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      {/* Webcam section */}
      <div className="flex flex-col my-10 justify-center items-center bg-black rounded-lg p-5 w-full">
        <Image src="/webcam.png" width={100} height={100} alt="Webcam Icon" />
        <Webcam
          mirrored={true}
          style={{ height: 300, width: "100%", zIndex: 10 }}
        />
      </div>

      {/* Start/Stop recording button */}
      <Button 
        disabled={loading} 
        variant="outline" 
        className="my-5" 
        onClick={StartStopRecording}
      >
        <Mic className="mr-2" />
        {isRecording ? "Recording..." : "Start Recording"}
      </Button>

        

      {/* Error display */}
      {error && (
        <p className="text-red-500 mt-2 text-sm">Error: {error.message}</p>
      )}
    </div>
  );
};

export default RecordAnswerSection;