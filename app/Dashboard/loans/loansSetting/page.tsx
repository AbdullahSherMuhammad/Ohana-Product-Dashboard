"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Button,
} from "@/components/ui/button";
import { Settings, ChevronRight } from "lucide-react";
import LoanCountryTable from "@/components/Loans/CountryTable/LoanCountryTable";
import LoanSettingsModal from "@/components/Loans/LoanSettingsModal/LoanSettingsModal";

const GroupsSetting = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="p-5">
      {/* Header Section */}
      <Card className="border-0 shadow-none flex flex-col md:flex-row sm:items-center justify-between">
        <CardHeader className='p-0 pt-5'>
          <CardTitle className="text-[32px] text-[#1A1C21]">Loans Setting</CardTitle>
          <CardDescription className="text-[16px] text-[#667085] flex gap-2">
            <span>Loans</span>
            <p className="flex text-[#1A1C21]">
              <ChevronRight />
              Loans Setting | Countries: 10 | Available Loans: 35
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
      <LoanCountryTable/>

       <LoanSettingsModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default GroupsSetting;
