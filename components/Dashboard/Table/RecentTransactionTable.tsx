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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    username: "Jon Smith",
    group: "Open Saving Group 4",
    country: "Germany",
    saving: "$10,710.25",
    solidarity: "$10,719.25",
    loans: "$11,710.25",
    debt: "13/04/23",
    trustScore: 224,
  },
];

export default function UserTable() {
  return (
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
  );
}
