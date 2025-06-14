"use client";

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Client } from '@neondatabase/serverless';

const AddNewInterview = () => {
  // ✅ Correct spelling: openDialog
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div>
      <div
        className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'
        onClick={() => setOpenDialog(true)} // ✅ opens dialog on click
      >
        <h2 className='font-bold text-lg text-center'>+ Add New</h2>
      </div>

      {/* dialog starts */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      {/* dialog ends */}
    </div>
  );
};

export default AddNewInterview;
