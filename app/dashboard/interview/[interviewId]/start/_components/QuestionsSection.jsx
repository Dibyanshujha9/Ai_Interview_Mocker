"use client"

import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

const QuestionsSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
  console.log("🚀 ~ mockInterviewQuestion:", mockInterviewQuestion);

  // ✅ Function to convert question text to speech
  const textToSpeech = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, your browser does not support text-to-speech.");
    }
  }

  // ✅ Don't render anything if no questions are available
  if (!mockInterviewQuestion || mockInterviewQuestion.length === 0) return null;

  return (
    <div className='p-5 border rounded-lg my-10'>
      {/* Question buttons */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {mockInterviewQuestion.map((question, index) => (
          <h2
            key={index} // ✅ Added key here to fix React warning
            className={`p-2 rounded-full text-xs md:text-sm text-center cursor-pointer transition-colors duration-200 ${
  activeQuestionIndex === index
    ? 'bg-blue-500 text-white'
    : 'bg-secondary text-black'
}`}

          >
            Question #{index + 1}
          </h2>
        ))}
      </div>

      {/* Active question */}
      <h2 className='my-5 text-md md:text-lg'>
        {mockInterviewQuestion[activeQuestionIndex]?.question}
      </h2>

      {/* Text-to-speech icon */}
      <Volume2
        className='cursor-pointer'
        onClick={() => textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)}
      />

      {/* Note Section */}
      <div className='border rounded-lg p-5 bg-blue-100 mt-20'>
        <h2 className='flex gap-2 items-center text-primary'>
          <Lightbulb />
          <strong>Note:</strong>
        </h2>
        <h2 className='text-sm text-primary my-2'>
          Enable Video Web Cam and Microphone to start your AI Generated Mock Interview.
          It has 5 questions which you can answer, and at the end, you will get a report based on your answers.
          <br />
          <strong>NOTE:</strong> We never record your video. Webcam access can be disabled at any time.
        </h2>
      </div>
    </div>
  )
}

export default QuestionsSection
