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
import edit from "@/public/Action_Icon/edit.svg"
import Image from "next/image";

const data = [
  {
    srNo: "1",
    first: "Kokou",
    last: "Agbo",
    country: "Togo, Benin, Cote-D’voire",
    phone: "+22890876543",
    group: "16",
  },
  {
    srNo: "2",
    first: "Kokou",
    last: "Agbo",
    country: "Togo, Benin, Cote-D’voire",
    phone: "+22890876543",
    group: "16",
  },
  {
    srNo: "3",
    first: "Kokou",
    last: "Agbo",
    country: "Togo, Benin, Cote-D’voire",
    phone: "+22890876543",
    group: "16",
  },
  {
    srNo: "4",
    first: "Kokou",
    last: "Agbo",
    country: "Togo, Benin, Cote-D’voire",
    phone: "+22890876543",
    group: "16",
  },
  {
    srNo: "5",
    first: "Kokou",
    last: "Agbo",
    country: "Togo, Benin, Cote-D’voire",
    phone: "+22890876543",
    group: "16",
  },
  {
    srNo: "6",
    first: "Kokou",
    last: "Agbo",
    country: "Togo, Benin, Cote-D’voire",
    phone: "+22890876543",
    group: "16",
  },
  {
    srNo: "7",
    first: "Kokou",
    last: "Agbo",
    country: "Togo, Benin, Cote-D’voire",
    phone: "+22890876543",
    group: "16",
  },
  {
    srNo: "8",
    first: "Kokou",
    last: "Agbo",
    country: "Togo, Benin, Cote-D’voire",
    phone: "+22890876543",
    group: "16",
  },
  {
    srNo: "9",
    first: "Kokou",
    last: "Agbo",
    country: "Togo, Benin, Cote-D’voire",
    phone: "+22890876543",
    group: "16",
  },
  {
    srNo: "10",
    first: "Kokou",
    last: "Agbo",
    country: "Togo, Benin, Cote-D’voire",
    phone: "+22890876543",
    group: "16",
  },
];

export default function SupervisorsTable() {

    const [isChecked, setIsChecked] = useState(false);

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
                <SelectValue placeholder="Group Status: Active" />
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
                  <TableHead>Phone</TableHead>
                  <TableHead>Assigned Country</TableHead>
                  <TableHead>Groups</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index} className="font-light">
                    <TableCell>{row.srNo}</TableCell>
                    <TableCell>{row.first}</TableCell>
                    <TableCell>{row.last}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell>{row.country}</TableCell>
                    <TableCell>{row.group}</TableCell>
                    <TableCell>
                        <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                            <div className="group peer ring-0 bg-[#110D1566]  rounded-full outline-none duration-300 after:duration-300 w-12 h-6  shadow-md peer-checked:bg-[#110D1566]  peer-focus:outline-none  after:content-['✖️']  after:rounded-full after:absolute after:bg-[#110D15] after:outline-none after:h-6 after:w-6 after:top-0 after:left-0 after:flex after:justify-center after:items-center peer-checked:after:translate-x-6 peer-checked:after:content-['✔️'] peer-hover:after:scale-95">
                            </div>
                        </label>
                    </TableCell>
                    <TableCell>
                        <Image src={edit} alt="edit icon"/>
                    </TableCell>
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
