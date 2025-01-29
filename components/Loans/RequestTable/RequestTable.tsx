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
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import PaginationComponent from "@/components/layout/Pagination/PaginationComponent";
import view from "@/public/Action_Icon/view.svg";
import LoanRequestModal from "../LoanRequestModal/LoanRequestModal";

const viewImg = (
  <Image
    src={view}
    alt="view icon"
    className="cursor-pointer text-gray-500 hover:text-black text-sm"
  />
);

const data = [
  { srNo: "001", first: "Kokou", last: "Agbo", country: "Togo", group: "+22890876543", loanType: "Quick Cash", firstLoan: "Yes", interest: "5.00%", trustScore: "16", date: "21/10/25", action: viewImg },
  { srNo: "002", first: "Kokou", last: "Agbo", country: "Togo", group: "+22890876543", loanType: "Flexi Loan", firstLoan: "No (2)", interest: "3.00%", trustScore: "16", date: "22/10/25", action: viewImg },
  { srNo: "003", first: "Kokou", last: "Agbo", country: "Togo", group: "+22890876543", loanType: "Growth", firstLoan: "No (5)", interest: "3.00%", trustScore: "16", date: "21/10/25", action: viewImg },
  { srNo: "004", first: "Kokou", last: "Agbo", country: "Togo", group: "+22890876543", loanType: "Quick Cash", firstLoan: "Yes", interest: "8.00%", trustScore: "16", date: "22/10/25", action: viewImg },
  { srNo: "005", first: "Kokou", last: "Agbo", country: "Togo", group: "+22890876543", loanType: "Flexi Loan", firstLoan: "Yes", interest: "6.00%", trustScore: "16", date: "21/10/25", action: viewImg },
  { srNo: "006", first: "Kokou", last: "Agbo", country: "Togo", group: "+22890876543", loanType: "Growth", firstLoan: "No (1)", interest: "4.00%", trustScore: "16", date: "22/10/25", action: viewImg },
  { srNo: "007", first: "Kokou", last: "Agbo", country: "Togo", group: "+22890876543", loanType: "Quick Cash", firstLoan: "Yes", interest: "5.00%", trustScore: "16", date: "21/10/25", action: viewImg },
  { srNo: "008", first: "Kokou", last: "Agbo", country: "Togo", group: "+22890876543", loanType: "Flexi Loan", firstLoan: "No (2)", interest: "3.00%", trustScore: "16", date: "22/10/25", action: viewImg },
  { srNo: "009", first: "Kokou", last: "Agbo", country: "Togo", group: "+22890876543", loanType: "Growth", firstLoan: "No (3)", interest: "8.00%", trustScore: "16", date: "21/10/25", action: viewImg },
  { srNo: "010", first: "Kokou", last: "Agbo", country: "Togo", group: "+22890876543", loanType: "Quick Cash", firstLoan: "Yes", interest: "6.00%", trustScore: "16", date: "22/10/25", action: viewImg }
];

export default function RequestTable() {

    const [isOpen, setIsOpen] = useState(false);
    
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
                        <TableHead>Group</TableHead>
                        <TableHead>Loan Type</TableHead>
                        <TableHead>First Loan?</TableHead>
                        <TableHead>Interest</TableHead>
                        <TableHead>Trust Score</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={index} className="font-light">
                            <TableCell>{row.srNo}</TableCell>
                            <TableCell>{row.first}</TableCell>
                            <TableCell>{row.last}</TableCell>
                            <TableCell>{row.country}</TableCell>
                            <TableCell>{row.group}</TableCell>
                            <TableCell>{row.loanType}</TableCell>
                            <TableCell>{row.firstLoan}</TableCell>
                            <TableCell>{row.interest}</TableCell>
                            <TableCell>{row.trustScore}</TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell
                                onClick={() => setIsOpen(true)}
                            >
                                {row.action}
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </Card>
            </div>
        </Card>
        
        <LoanRequestModal isOpen={isOpen} setIsOpen={setIsOpen} />
            
        <PaginationComponent/>
    </>
  );
}
