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
import copy from "@/public/Action_Icon/copy.svg";
import trash from "@/public/Action_Icon/trash.svg";
import Image from "next/image";
import PaginationComponent from "@/components/layout/Pagination/PaginationComponent";

const viewImg = <Image
src={view}
alt="view icon"
className="cursor-pointer text-gray-500 hover:text-black text-sm"
/>
const data = [
  { country: "Togo", generalFees: viewImg, loanLevels: viewImg, interestRates: viewImg, conditions: viewImg },
  { country: "USA", generalFees: viewImg, loanLevels: viewImg, interestRates: viewImg, conditions: viewImg },
  { country: "Canada", generalFees: viewImg, loanLevels: viewImg, interestRates: viewImg, conditions: viewImg },
  { country: "Australia", generalFees: viewImg, loanLevels: viewImg, interestRates: viewImg, conditions: viewImg },
  { country: "Germany", generalFees: viewImg, loanLevels: viewImg, interestRates: viewImg, conditions: viewImg },
  { country: "UK", generalFees: viewImg, loanLevels: viewImg, interestRates: viewImg, conditions: viewImg },
  { country: "USA", generalFees: viewImg, loanLevels: viewImg, interestRates: viewImg, conditions: viewImg },
  { country: "USA", generalFees: viewImg, loanLevels: viewImg, interestRates: viewImg, conditions: viewImg },
  { country: "USA", generalFees: viewImg, loanLevels: viewImg, interestRates: viewImg, conditions: viewImg },
  { country: "USA", generalFees: viewImg, loanLevels: viewImg, interestRates: viewImg, conditions: viewImg },
];

export default function LoanCountryTable() {
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
                    <TableHead>Country</TableHead>
                    <TableHead>General Fees</TableHead>
                    <TableHead>Loans Levels</TableHead>
                    <TableHead>Interest Rates</TableHead>
                    <TableHead>Conditions</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((row, index) => (
                    <TableRow key={index} className="font-light">
                      <TableCell>{row.country}</TableCell>
                      <TableCell>
                        <span className="cursor-pointer text-blue-500 hover:underline">{row.generalFees}</span>
                      </TableCell>
                      <TableCell>
                        <span className="cursor-pointer text-blue-500 hover:underline">{row.loanLevels}</span>
                      </TableCell>
                      <TableCell>
                        <span className="cursor-pointer text-blue-500 hover:underline">{row.interestRates}</span>
                      </TableCell>
                      <TableCell>
                        <span className="cursor-pointer text-blue-500 hover:underline">{row.conditions}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2 text-sm">
                          <Image
                            src={edit}
                            alt="edit icon"
                            className="cursor-pointer text-gray-500 hover:text-black text-sm"
                          />
                          <Image
                            src={copy}
                            alt="copy icon"
                            className="cursor-pointer text-gray-500 hover:text-black text-sm"
                          />
                          <Image
                            src={trash}
                            alt="trash icon"
                            className="cursor-pointer text-gray-500 hover:text-black text-sm"
                          />
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
