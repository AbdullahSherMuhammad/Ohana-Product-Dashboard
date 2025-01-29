"use client";

import React, { useState } from "react";
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
import { Card } from "@/components/ui/card";
import PaginationComponent from "@/components/layout/Pagination/PaginationComponent";



const data = [
    {
      srNo: "1",
      first: "Kokou",
      last: "Agbo",
      country: "Togo",
      phone: "+22890876543",
      loanType: "Quick Cash",
      date: "12/10/25",
      dueDate: "12/10/25",
      amount: "45000",
      paid: "45000 (30%)",
      left: "45000 (30%)",
      missed: "1",
      friends: "1",
    },
    {
      srNo: "2",
      first: "Kokou",
      last: "Agbo",
      country: "Togo",
      phone: "+22890876543",
      loanType: "Flexi Loan",
      date: "13/10/25",
      dueDate: "13/10/25",
      amount: "45001",
      paid: "45001 (30%)",
      left: "45001 (30%)",
      missed: "2",
      friends: "2",
    },
    {
      srNo: "3",
      first: "Kokou",
      last: "Agbo",
      country: "Togo",
      phone: "+22890876543",
      loanType: "Growth",
      date: "14/10/25",
      dueDate: "14/10/25",
      amount: "45002",
      paid: "45002 (30%)",
      left: "45002 (30%)",
      missed: "3",
      friends: "2",
    },
    {
      srNo: "4",
      first: "Kokou",
      last: "Agbo",
      country: "Togo",
      phone: "+22890876543",
      loanType: "Quick Cash",
      date: "15/10/25",
      dueDate: "15/10/25",
      amount: "45003",
      paid: "45003 (30%)",
      left: "45003 (30%)",
      missed: "1",
      friends: "3",
    },
    {
      srNo: "5",
      first: "Kokou",
      last: "Agbo",
      country: "Togo",
      phone: "+22890876543",
      loanType: "Flexi Loan",
      date: "16/10/25",
      dueDate: "16/10/25",
      amount: "45004",
      paid: "45004 (30%)",
      left: "45004 (30%)",
      missed: "4",
      friends: "1",
    },
    {
      srNo: "6",
      first: "Kokou",
      last: "Agbo",
      country: "Togo",
      phone: "+22890876543",
      loanType: "Growth",
      date: "17/10/25",
      dueDate: "17/10/25",
      amount: "45005",
      paid: "45005 (30%)",
      left: "45005 (30%)",
      missed: "1",
      friends: "4",
    },
    {
      srNo: "7",
      first: "Kokou",
      last: "Agbo",
      country: "Togo",
      phone: "+22890876543",
      loanType: "Quick Cash",
      date: "18/10/25",
      dueDate: "18/10/25",
      amount: "45006",
      paid: "45006 (30%)",
      left: "45006 (30%)",
      missed: "2",
      friends: "3",
    },
    {
      srNo: "8",
      first: "Kokou",
      last: "Agbo",
      country: "Togo",
      phone: "+22890876543",
      loanType: "Flexi Loan",
      date: "19/10/25",
      dueDate: "19/10/25",
      amount: "45007",
      paid: "45007 (30%)",
      left: "45007 (30%)",
      missed: "1",
      friends: "2",
    },
    {
      srNo: "9",
      first: "Kokou",
      last: "Agbo",
      country: "Togo",
      phone: "+22890876543",
      loanType: "Growth",
      date: "20/10/25",
      dueDate: "20/10/25",
      amount: "45008",
      paid: "45008 (30%)",
      left: "45008 (30%)",
      missed: "3",
      friends: "1",
    },
    {
      srNo: "10",
      first: "Kokou",
      last: "Agbo",
      country: "Togo",
      phone: "+22890876543",
      loanType: "Quick Cash",
      date: "21/10/25",
      dueDate: "21/10/25",
      amount: "45009",
      paid: "45009 (30%)",
      left: "45009 (30%)",
      missed: "1",
      friends: "4",
    },
  ];
  

export default function DistressedTable() {
  return (
    <>
      <Card className="mt-10 p-5 shadow-custom ">
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
                <SelectValue placeholder="Loan Type: All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Type">Type</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="overflow-x-auto mt-4">
          <Card className="overflow-x-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#F7F8FA]">
                  <TableHead>Sr# No</TableHead>
                  <TableHead>First</TableHead>
                  <TableHead>Last Name</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead className="text-[#E72E2E] bg-[#F4D0D1]">Phone</TableHead>
                  <TableHead>Loan Type</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Paid</TableHead>
                  <TableHead>Left</TableHead>
                  <TableHead className="text-[#E72E2E] bg-[#F4D0D1]">Missed</TableHead>
                  <TableHead>Friends</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index} className="font-light">
                    <TableCell>{row.srNo}</TableCell>
                    <TableCell>{row.first}</TableCell>
                    <TableCell>{row.last}</TableCell>
                    <TableCell>{row.country}</TableCell>
                    <TableCell className="text-red-500">{row.phone}</TableCell>
                    <TableCell>{row.loanType}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.dueDate}</TableCell>
                    <TableCell>{row.amount}</TableCell>
                    <TableCell>{row.paid}</TableCell>
                    <TableCell>{row.left}</TableCell>
                    <TableCell className="text-red-500">{row.missed}</TableCell>
                    <TableCell>{row.friends}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </Card>

      <PaginationComponent />
    </>
  );
}
