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
} from "@/components/ui/select";

import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import view from "@/public/Action_Icon/view.svg";
import edit from "@/public/Action_Icon/edit.svg";
import trash from "@/public/Action_Icon/trash.svg";
import Image from "next/image";
import PaginationComponent from "@/components/layout/Pagination/PaginationComponent";

const data = [
  {
    username: "Alex Jack",
    group: "Open Saving Group",
    loanAmount: "$5000",
    startDate: "04-09-24",
    duration: "6 Months",
    interestRate: "4%",
    paidPercentage: "10%",
    debt: "$9,710.25",
  },
  {
    username: "Joe Smith",
    group: "Open Saving Group 1",
    loanAmount: "$5000",
    startDate: "04-09-24",
    duration: "6 Months",
    interestRate: "4%",
    paidPercentage: "10%",
    debt: "$9,710.25",
  },
  {
    username: "Ezabel Robert",
    group: "Open Saving Group 2",
    loanAmount: "$5000",
    startDate: "04-09-24",
    duration: "6 Months",
    interestRate: "4%",
    paidPercentage: "10%",
    debt: "$9,710.25",
  },
  {
    username: "Albert Spin",
    group: "Open Saving Group 3",
    loanAmount: "$5000",
    startDate: "04-09-24",
    duration: "6 Months",
    interestRate: "4%",
    paidPercentage: "10%",
    debt: "$9,710.25",
  },
  {
    username: "Dianne Russel",
    group: "Open Saving Group 4",
    loanAmount: "$5000",
    startDate: "04-09-24",
    duration: "6 Months",
    interestRate: "4%",
    paidPercentage: "10%",
    debt: "$9,710.25",
  },
  {
    username: "Jacob John",
    group: "Open Saving Group 5",
    loanAmount: "$5000",
    startDate: "04-09-24",
    duration: "6 Months",
    interestRate: "4%",
    paidPercentage: "10%",
    debt: "$9,710.25",
  },
  {
    username: "Kristen Watson",
    group: "Open Saving Group 6",
    loanAmount: "$5000",
    startDate: "04-09-24",
    duration: "6 Months",
    interestRate: "4%",
    paidPercentage: "10%",
    debt: "$9,710.25",
  },
  {
    username: "Devan Lane",
    group: "Open Saving Group 7",
    loanAmount: "$5000",
    startDate: "04-09-24",
    duration: "6 Months",
    interestRate: "4%",
    paidPercentage: "10%",
    debt: "$9,710.25",
  },
  {
    username: "Arlene McCoy",
    group: "Open Saving Group 9",
    loanAmount: "$5000",
    startDate: "04-09-24",
    duration: "6 Months",
    interestRate: "4%",
    paidPercentage: "10%",
    debt: "$9,710.25",
  },
  {
    username: "Cody Fisher",
    group: "Open Saving Group 10",
    loanAmount: "$5000",
    startDate: "04-09-24",
    duration: "6 Months",
    interestRate: "4%",
    paidPercentage: "10%",
    debt: "$9,710.25",
  },
];

export default function LoanUserTable() {
  return (
    <>
      <Card className="mt-5 p-5">
        {/* Search and Filters */}
        <div className="flex gap-2 flex-col lg:flex-row items-center justify-between border-b-2 border-[#DCDCDC] pb-4">
          <div className="border-2 border-[#DCDCDC] w-full lg:w-96 h-11 rounded-lg p-2 flex gap-2 items-center">
            <Search className="text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full h-full outline-none border-0 text-[#16151C33]"
            />
          </div>
          <div className="flex flex-col w-full lg:w-auto md:flex-row mt-5 lg:m-0 gap-5">
            <Select>
              <SelectTrigger className="h-[40px] rounded-lg outline-none border border-[#110D15]">
                <SelectValue placeholder="Country: All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="h-[40px] rounded-lg outline-none border border-[#110D15]">
                <SelectValue placeholder="Group type: All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Type">Type</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="h-[40px] rounded-lg outline-none border border-[#110D15]">
                <SelectValue placeholder="Loan Status: Active" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Type">Type</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Table */}
        <Card className="mt-5 overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#F7F8FA]">
                    <TableHead>User Name</TableHead>
                    <TableHead>Groups</TableHead>
                    <TableHead>Loan Amount</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Interest Rate</TableHead>
                    <TableHead>Paid(%)</TableHead>
                    <TableHead>Debt</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((row, index) => (
                    <TableRow key={index} className="font-light">
                      <TableCell>{row.username}</TableCell>
                      <TableCell>{row.group}</TableCell>
                      <TableCell>{row.loanAmount}</TableCell>
                      <TableCell>{row.startDate}</TableCell>
                      <TableCell>{row.duration}</TableCell>
                      <TableCell>{row.interestRate}</TableCell>
                      <TableCell>{row.paidPercentage}</TableCell>
                      <TableCell>{row.debt}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2 text-sm">
                          <Image src={view} alt="view icon" className="cursor-pointer" />
                          <Image src={edit} alt="edit icon" className="cursor-pointer" />
                          <Image src={trash} alt="trash icon" className="cursor-pointer" />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </Card>

      <PaginationComponent />
    </>
  );
}
