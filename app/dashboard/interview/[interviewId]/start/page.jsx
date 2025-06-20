"use client"; // ✅ Marks this as a Client Component

import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // ✅ Import useParams to access route params in Client Components
import QuestionsSection from './_components/QuestionsSection';
import RecordAnswerSection from './_components/RecordAnswerSection';

const StartInterview = () => {
  const params = useParams(); // ✅ Get route params using useParams
  const interviewId = params.interviewId; // ✅ Extract interviewId from params

  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);


  useEffect(() => {
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, interviewId)); // ✅ Use extracted interviewId

    const jsonMockResp = JSON.parse(result[0].jsonMockResp);
    console.log(jsonMockResp);

    setMockInterviewQuestion(jsonMockResp);
    setInterviewData(result[0]);
  };

  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
{/* Questions  */}
<QuestionsSection
mockInterviewQuestion={mockInterviewQuestion}
activeQuestionIndex={activeQuestionIndex}
/>
{/* Record video or audio recording  */}
<RecordAnswerSection 

/>
        </div>
    </div>
  );
};

export default StartInterview;
