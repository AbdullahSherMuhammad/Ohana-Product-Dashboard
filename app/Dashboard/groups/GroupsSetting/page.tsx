"use client";

import React, { useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Button,
} from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Settings, ChevronRight } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Plus } from 'lucide-react';

import CountryTable from "@/components/Groups/CountryTable/CountryTable";

const GroupsSetting = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-5">
      {/* Header Section */}
      <Card className="border-0 shadow-none flex flex-col md:flex-row md:items-center justify-between">
        <CardHeader className='p-0 pt-5'>
          <CardTitle className="text-[32px] text-[#1A1C21]">Groups Setting</CardTitle>
          <CardDescription className="text-[16px] text-[#667085] flex gap-2">
            <span>Groups</span>
            <p className="flex text-[#1A1C21]">
              <ChevronRight />
              Groups Setting | Countries: 5 | Available Groups: 45
            </p>
          </CardDescription>
        </CardHeader>
        <Button
          className="h-[45px] rounded-lg flex items-center gap-2 mt-5"
          onClick={() => setIsOpen(true)}
        >
          <Settings className="text-lg" />
          <span>Add Setting</span>
        </Button>
      </Card>

      {/* Country Table Section */}
      <CountryTable />

      {/* Popup Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-xl p-6 rounded-lg">
          <span className="bg-[#110D15] text-white w-10 h-10 flex justify-center items-center rounded-lg">
            <Settings className="w-6 h-6" />
          </span>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              Groups Setting
            </DialogTitle>
            <p className="text-sm text-gray-500">
              United States OF America | Basic | 6 Months
            </p>
          </DialogHeader>

          {/* Form Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-[#333843] text-sm">Country* (Auto-Filled)</Label>
              <Input className="h-10 bg-[#F7F8FA] border-2 border-[#DCDCDC]" placeholder="USA" readOnly />
            </div>
            <div>
              <Label  className="text-[#333843] text-sm">Currency* (Auto-Filled)</Label>
              <Input className="h-10 bg-[#F7F8FA] border-2 border-[#DCDCDC]" placeholder="USD ($)" readOnly />
            </div>
            <div>
              <Label  className="text-[#333843] text-sm">Group Type* (Auto-Filled)</Label>
              <Input className="h-10 bg-[#F7F8FA] border-2 border-[#DCDCDC]" placeholder="Basic" readOnly />
            </div>
            <div>
              <Label  className="text-[#333843] text-sm">Monthly Saving Amount*</Label>
              <Input className="h-10 bg-[#F7F8FA] border-2 border-[#DCDCDC]" placeholder="e.g. $500" />
            </div>
            <div>
              <Label  className="text-[#333843] text-sm">Duration*</Label>
              <Input className="h-10 bg-[#F7F8FA] border-2 border-[#DCDCDC]" placeholder="e.g. 6 Months" />
            </div>
            <div>
              <Label  className="text-[#333843] text-sm">Interest Rate*</Label>
              <Input className="h-10 bg-[#F7F8FA] border-2 border-[#DCDCDC]" placeholder="e.g. 10%" />
            </div>
            <div>
              <Label  className="text-[#333843] text-sm">Payout*</Label>
              <Input className="h-10 bg-[#F7F8FA] border-2 border-[#DCDCDC]" placeholder="$5000" />
            </div>
            <div>
              <Label  className="text-[#333843] text-sm">Membership Threshold*</Label>
              <Input className="h-10 bg-[#F7F8FA] border-2 border-[#DCDCDC]" placeholder="e.g. 10" />
            </div>
            <div className="col-span-2">
              <Label  className="text-[#333843] text-sm">Group Supervisors</Label>
              <div className="flex items-center gap-2">
                <div className="rounded-lg w-full h-10 bg-[#F7F8FA] border-2 border-[#DCDCDC] flex items-center overflow-hidden">
                    <Input className="outline-none border-0 rounded-none h-full w-full" placeholder="Supervisor 1, Supervisor 2" readOnly />
                    <Button variant="ghost" className="p-2 h-full bg-black text-white hover:bg-black hover:text-white rounded-none">
                        <Plus />
                    </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <DialogFooter>
            <Button
              variant="ghost"
              onClick={() => setIsOpen(false)}
              className="border border-gray-300"
            >
              Cancel
            </Button>
            <Button>Submit</Button>
          </DialogFooter>

          <DialogClose className="absolute top-4 right-4 w-6 h-6 text-gray-500 hover:text-black" />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GroupsSetting;
