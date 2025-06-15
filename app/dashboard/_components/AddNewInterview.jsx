"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { getChatSession } from '@/utils/GeminiAIModal';
import { LoaderCircle } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { db } from '@/utils/db'; // Assuming your database connection
import { MockInterview } from '@/utils/schema'; // Assuming your database schema

const AddNewInterview = () => {
  // State management
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [jobExperience, setJobExperience] = useState('');
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  
  // Get current user from Clerk
  const { user } = useUser();

  /**
   * Handles form submission and generates interview questions with answers
   * @param {Event} e - Form submit event
   */
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Enhanced prompt to generate both questions and answers
      const prompt = `
        Job Position: ${jobPosition}
        Job Description: ${jobDesc}
        Years of Experience: ${jobExperience}
        
        Based on the above information, create ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT || 5} interview questions with their corresponding answers in JSON format.
        
        Please structure the response as an array of objects with the following format:
        [
          {
            "question": "Your interview question here",
            "answer": "A comprehensive answer that a qualified candidate should provide"
          }
        ]
        
        Make sure the questions are relevant to the job position and experience level mentioned.
      `;

      // Get new chat session from Gemini AI
      const chat = getChatSession();

      // Send prompt to AI
      const result = await chat.sendMessage(prompt);
      
      // Clean up the response by removing markdown formatting
      const responseText = result.response.text();
      const cleanJsonResponse = responseText
        .replace(/```json/g, '')
        .replace(/```/g, '')
        .trim();

      // Parse and validate JSON response
      let parsedResponse;
      try {
        parsedResponse = JSON.parse(cleanJsonResponse);
        console.log("✅ Generated Interview Q&A:", parsedResponse);
      } catch (parseError) {
        console.error("❌ JSON Parse Error:", parseError);
        throw new Error("Failed to parse AI response. Please try again.");
      }

      // Save to database if response is valid
      if (parsedResponse && Array.isArray(parsedResponse)) {
        const mockId = uuidv4();
        
        const dbResponse = await db.insert(MockInterview).values({
          mockId: mockId,
          jsonMockResp: cleanJsonResponse,
          jobPosition: jobPosition,
          jobDesc: jobDesc,
          jobExperience: jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress || 'anonymous',
          createdAt: moment().format('DD-MM-YYYY'),
        }).returning({ mockId: MockInterview.mockId });

        console.log("✅ Mock Interview Created:", dbResponse);
        
        // Store response in state
        setJsonResponse(parsedResponse);
        
        // Close dialog and reset form
        setOpenDialog(false);
        resetForm();
        
        // Success notification (you can replace with toast notification)
        alert("✅ Interview questions generated successfully!");
        
if(resp)
{
  setOpenDialog(false);
}

      } else {
        throw new Error("Invalid response format from AI");
      }

    } catch (error) {
      console.error("❌ Error:", error);
      
      // Handle different types of errors
      if (error.message.includes("429")) {
        alert("⚠️ Rate limit exceeded. Please wait a moment and try again.");
      } else if (error.message.includes("JSON")) {
        alert("❌ Failed to process AI response. Please try again.");
      } else {
        alert(`❌ Something went wrong: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  /**
   * Resets all form fields to initial state
   */
  const resetForm = () => {
    setJobPosition('');
    setJobDesc('');
    setJobExperience('');
  };

  /**
   * Handles dialog close and resets form if needed
   */
  const handleDialogClose = () => {
    setOpenDialog(false);
    if (!loading) {
      resetForm();
    }
  };

  return (
    <div>
      {/* Add New Interview Card */}
      <div
        className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'
        onClick={() => setOpenDialog(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setOpenDialog(true);
          }
        }}
      >
        <h2 className='font-bold text-lg text-center'>+ Add New</h2>
      </div>

      {/* Interview Details Dialog */}
      <Dialog open={openDialog} onOpenChange={handleDialogClose}>
        <DialogContent className='max-w-2xl'>
          <DialogHeader>
            <DialogTitle className='font-bold text-2xl'>
              Tell Us More About Your Job Interview
            </DialogTitle>
            <DialogDescription>
              Fill in the details below to generate customized interview questions and answers.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={onSubmit} className="space-y-6">
            {/* Job Position Input */}
            <div>
              <label htmlFor="jobPosition" className="block mb-2 font-medium text-sm">
                Job Role/Job Position *
              </label>
              <Input
                id="jobPosition"
                placeholder='e.g. Software Engineer, Data Scientist, Product Manager'
                value={jobPosition}
                onChange={(event) => setJobPosition(event.target.value)}
                required
                disabled={loading}
              />
            </div>

            {/* Job Description Input */}
            <div>
              <label htmlFor="jobDesc" className="block mb-2 font-medium text-sm">
                Tech Stack / Job Description *
              </label>
              <Textarea
                id="jobDesc"
                placeholder='e.g. MERN Stack, React, Angular, Node.js, Python, AWS, etc.'
                value={jobDesc}
                onChange={(event) => setJobDesc(event.target.value)}
                required
                disabled={loading}
                rows={4}
              />
            </div>

            {/* Experience Input */}
            <div>
              <label htmlFor="jobExperience" className="block mb-2 font-medium text-sm">
                Years of Experience *
              </label>
              <Input
                id="jobExperience"
                type='number'
                placeholder='e.g. 5'
                value={jobExperience}
                onChange={(event) => setJobExperience(event.target.value)}
                required
                disabled={loading}
                min="0"
                max="50"
              />
            </div>

            {/* Action Buttons */}
            <div className='flex justify-end gap-3 pt-4'>
              <Button 
                type="button" 
                variant="ghost" 
                onClick={handleDialogClose}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button 
                type='submit' 
                disabled={loading || !jobPosition || !jobDesc || !jobExperience} 
                className='bg-primary hover:bg-primary/90 transition-all min-w-[140px]'
              >
                {loading ? (
                  <>
                    <LoaderCircle className='animate-spin mr-2 h-4 w-4' />
                    Generating...
                  </>
                ) : (
                  'Start Interview'
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewInterview;