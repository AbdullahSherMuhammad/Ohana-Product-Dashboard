"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Search } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import PaginationComponent from "@/components/layout/Pagination/PaginationComponent";

const data = [
    {
      username: "Alex Jack",
      group: "Open Saving Group",
      country: "USA",
      saving: "$10,710.25",
      solidarity: "$10,719.25",
      loans: "$11,710.25",
      debt: "$9,710.25",
      trustScore: 728,
    },
    {
      username: "Joe Smith",
      group: "Open Saving Group 1",
      country: "United Kingdom",
      saving: "$10,710.25",
      solidarity: "$10,719.25",
      loans: "$11,710.25",
      debt: "$9,710.25",
      trustScore: 728,
    },
    {
      username: "Ezabel Robert",
      group: "Open Saving Group 2",
      country: "Australia",
      saving: "$10,710.25",
      solidarity: "$10,719.25",
      loans: "$11,710.25",
      debt: "$9,710.25",
      trustScore: 728,
    },
    {
      username: "Albert Spin",
      group: "Open Saving Group 3",
      country: "Canada",
      saving: "$10,710.25",
      solidarity: "$10,719.25",
      loans: "$11,710.25",
      debt: "$9,710.25",
      trustScore: 728,
    },
    {
      username: "Dianne Russel",
      group: "Open Saving Group 4",
      country: "Germany",
      saving: "$10,710.25",
      solidarity: "$10,719.25",
      loans: "$11,719.25",
      debt: "13/04/23",
      trustScore: 224,
    },
    {
      username: "Jacob John",
      group: "Open Saving Group 5",
      country: "Canada",
      saving: "$10,710.25",
      solidarity: "$10,719.25",
      loans: "$11,719.25",
      debt: "13/04/23",
      trustScore: 224,
    },
    {
      username: "Kristen Watson",
      group: "Open Saving Group 6",
      country: "UAE",
      saving: "$10,710.25",
      solidarity: "$10,719.25",
      loans: "$11,719.25",
      debt: "13/04/23",
      trustScore: 224,
    },
    {
      username: "Devan Lane",
      group: "Open Saving Group 7",
      country: "Germany",
      saving: "$10,710.25",
      solidarity: "$10,719.25",
      loans: "$11,719.25",
      debt: "13/04/23",
      trustScore: 224,
    },
    {
      username: "Arlene McCoy",
      group: "Open Saving Group 9",
      country: "Australia",
      saving: "$10,710.25",
      solidarity: "$10,719.25",
      loans: "$11,719.25",
      debt: "13/04/23",
      trustScore: 224,
    },
    {
      username: "Cody Fisher",
      group: "Open Saving Group 10",
      country: "UAE",
      saving: "$10,710.25",
      solidarity: "$10,719.25",
      loans: "$11,719.25",
      debt: "13/04/23",
      trustScore: 224,
    },
];  

export default function UserTable() {
  return (
   <>
    <Card className="mt-5 p-5">
     <div className='flex gap-2 flex-col lg:flex-row items-center justify-between border-b-2 border-[#DCDCDC] pb-4'>
      <div className='border-2 border-[#DCDCDC] w-full lg:w-96 h-11 rounded-lg p-2 flex gap-2 items-center'>
        <Search className='text-gray-400' />
        <input type="text" placeholder='Search' className='w-full h-full outline-none border-0 text-[#16151C33]' />
      </div>
      <div className='flex flex-col w-full lg:w-auto md:flex-row mt-5 lg:m-0 gap-5'>
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

        <Select>
          <SelectTrigger className=" h-[40px] rounded-lg outline-none border border-[#110D15]">
            <SelectValue placeholder="Group Status: Active" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Type">Type</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
    <Card className="mt-5 overflow-hidden">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className=" bg-[#F7F8FA]">
                <TableHead>User Name</TableHead>
                <TableHead>Groups</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Saving</TableHead>
                <TableHead>Solidarity</TableHead>
                <TableHead>Loans</TableHead>
                <TableHead>Debt</TableHead>
                <TableHead>Trust Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index} className="font-light">
                  <TableCell>{row.username}</TableCell>
                  <TableCell>{row.group}</TableCell>
                  <TableCell>{row.country}</TableCell>
                  <TableCell>{row.saving}</TableCell>
                  <TableCell>{row.solidarity}</TableCell>
                  <TableCell>{row.loans}</TableCell>
                  <TableCell>{row.debt}</TableCell>
                  <TableCell className="font-medium">
                    {row.trustScore}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
    </Card>

    {/* Pagination Component*/}
    <PaginationComponent/>
   </>
  );
}
