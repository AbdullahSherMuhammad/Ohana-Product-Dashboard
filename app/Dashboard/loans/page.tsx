import React from 'react'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Settings } from "lucide-react";
import AnalyticCards from '@/components/layout/AnalyticCards/AnalyticCards';
import LoanUserTable from '@/components/Loans/UserTable/UserTable';
import Link from 'next/link';

const Loans = () => {
  return (
    <div className='p-5'>
        <Card className="border-0 shadow-none flex flex-col md:flex-row md:items-center justify-between">
            <CardHeader className='p-0'>
                <CardTitle className="text-[32px] text-[#1A1C21]">Loans</CardTitle>
                <CardDescription className="text-[16px] text-[#667085] flex gap-2">
                    Here’s what happening with your Loans
                </CardDescription>
            </CardHeader>
            <div className='flex flex-col sm:flex-row gap-5 mt-5 md:mt-0'>
                <Select>
                    <SelectTrigger className="h-[40px] rounded-lg outline-none border border-[#110D15]">
                    <SelectValue placeholder="Coutry: All" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger className=" h-[40px] rounded-lg outline-none border border-[#110D15]">
                    <SelectValue placeholder="Group type: All" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="Type">Type</SelectItem>
                    </SelectContent>
                </Select>
                <Link
                    className="h-[45px] rounded-lg flex items-center justify-center gap-2 bg-black text-white p-2"
                    href={'/Dashboard/loans/loansSetting'}
                >
                <Settings className="text-lg" />
                    <span>Setting</span>
                </Link>
            </div>
        </Card>

        <AnalyticCards/>

        <LoanUserTable/>
    </div>
  )
}

export default Loans