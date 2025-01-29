'use client'

import React from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Settings } from 'lucide-react';
import UserTable from '@/components/Groups/UserTable/UserTable'
import AnalyticCards from '@/components/layout/AnalyticCards/AnalyticCards'
import Link from 'next/link';

const Groups = () => {

  return (
    <div className='p-5'>
      {/* Header */}
      <Card className='border-0 shadow-none flex flex-col md:flex-row md:items-center justify-between'>
        <CardHeader className='p-0'>
          <CardTitle className='text-[32px] text-[#1A1C21]'>Groups</CardTitle>
          <CardDescription className='text-[16px] text-[#667085]'>Here’s what happening with your Groups</CardDescription>
        </CardHeader>
        <div className='flex flex-col sm:flex-row gap-5 mt-5 md:mt-0'>
          <Select>
            <SelectTrigger className="h-[45px] rounded-lg outline-none border border-[#110D15]">
              <SelectValue placeholder="Coutry: All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className=" h-[45px] rounded-lg outline-none border border-[#110D15]">
              <SelectValue placeholder="Group type: All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Type">Type</SelectItem>
            </SelectContent>
          </Select>

          <Link
            href={'/Dashboard/groups/GroupsSetting'}
            className='flex gap-1 items-center justify-center h-[45px] w-full rounded-lg bg-black text-white max-w-[100px] px-3'
          >
            <Settings className='text-lg' />
            <span>Setting</span>
          </Link>

        </div>
      </Card>
      
      {/* Cards Sections Component */}
      <AnalyticCards/>

      {/* User Table Section */}
      <UserTable/>

    </div>
  )
}

export default Groups