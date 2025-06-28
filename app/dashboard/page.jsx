import { UserButton } from "@clerk/nextjs";
import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";

const Dashboard = () => {
  return (
    <div className="px-4 py-6 md:px-10 lg:px-20">
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl">Dashboard</h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Create and start your AI Mock Interview
        </p>
      </div>

      {/* Add New Interview Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        <AddNewInterview />
      </div>

      {/* Interview List Section */}
      <div className="w-full">
        <InterviewList />
      </div>
    </div>
  );
};

export default Dashboard;
