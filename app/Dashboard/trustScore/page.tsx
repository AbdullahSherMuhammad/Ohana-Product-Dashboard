import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Search, Settings } from 'lucide-react'
import view from "@/public/Action_Icon/view.svg";
import edit from "@/public/Action_Icon/edit.svg";
import trash from "@/public/Action_Icon/trash.svg";
import Image from 'next/image'

const TrustScore = () => {

   const data = {
        "categories": [
          {
            "category": "Group Engagement (20%)",
            "actions": [
              {
                "to_do": "Inviting at least 2 friends to a group",
                "weight_percent": "10 percent of group engagement (2%)",
                "points": "+9",
                "max_points": "+9"
              },
              {
                "to_do": "Each additional friend beyond 2",
                "weight_percent": "10 percent of group engagement (2%)",
                "points": "+1 per friend (max 9)",
                "max_points": "+9"
              },
              {
                "to_do": "Joining an active savings group",
                "weight_percent": "50 percent of group engagement (10%)",
                "points": "+30",
                "max_points": "+30"
              },
              {
                "to_do": "Joining an additional group (up to 3 groups)",
                "weight_percent": "50 percent of group engagement (10%)",
                "points": "+20 (2nd group) / +10 (3rd group)",
                "max_points": "+30"
              },
              {
                "to_do": "Staying in an active group for the entire duration",
                "weight_percent": "40 percent of group engagement (8%)",
                "points": "+72",
                "max_points": "+72"
              }
            ]
          },
          {
            "category": "Financial Discipline (50%)",
            "actions": [
              {
                "to_do": "Each on-time contribution or installment",
                "weight_percent": "60 percent of Financial engagement (30%)",
                "points": "+5 per payment",
                "max_points": "+270"
              },
              {
                "to_do": "Late contribution or installment",
                "weight_percent": "60 percent of Financial engagement (30%)",
                "points": "-50",
                "max_points": "-50"
              },
              {
                "to_do": "Daily penalty for late contributions or installments",
                "weight_percent": "60 percent of Financial engagement (30%)",
                "points": "-5 per day",
                "max_points": "-135"
              },
              {
                "to_do": "First savings installment",
                "weight_percent": "40 percent of Financial engagement (20%)",
                "points": "+10",
                "max_points": "+10"
              },
              {
                "to_do": "Not taking a loan until half of the savings period",
                "weight_percent": "40 percent of Financial engagement (20%)",
                "points": "+20",
                "max_points": "+20"
              }
            ]
          },
          {
            "category": "Loan Management (20%)",
            "actions": [
              {
                "to_do": "Not taking a loan until the end of the savings period",
                "weight_percent": "40 percent of Financial engagement (20%)",
                "points": "+30",
                "max_points": "+30"
              },
              {
                "to_do": "Each subsequent on-time savings contribution",
                "weight_percent": "40 percent of Financial engagement (20%)",
                "points": "+5 per payment",
                "max_points": "+50"
              },
              {
                "to_do": "Late savings contribution",
                "weight_percent": "40 percent of Financial engagement (20%)",
                "points": "-10 per contribution",
                "max_points": "-100"
              },
              {
                "to_do": "Taking a loan",
                "weight_percent": "50 percent of Loan Management (10%)",
                "points": "+5",
                "max_points": "+5"
              },
              {
                "to_do": "Paying the first loan installment",
                "weight_percent": "50 percent of Loan Management (10%)",
                "points": "+5",
                "max_points": "+5"
              },
              {
                "to_do": "Paying the first installment on time",
                "weight_percent": "50 percent of Loan Management (10%)",
                "points": "+3",
                "max_points": "+3"
              },
              {
                "to_do": "Paying each subsequent loan installment",
                "weight_percent": "50 percent of Loan Management (10%)",
                "points": "+5 per payment",
                "max_points": "+45"
              },
              {
                "to_do": "Paying each subsequent installment on time",
                "weight_percent": "50 percent of Loan Management (10%)",
                "points": "+10 per payment",
                "max_points": "+90"
              },
              {
                "to_do": "Paying the final loan installment",
                "weight_percent": "50 percent of Loan Management (10%)",
                "points": "+50",
                "max_points": "+50"
              },
              {
                "to_do": "Paying the final loan installment on time",
                "weight_percent": "50 percent of Loan Management (10%)",
                "points": "+90",
                "max_points": "+90"
              },
              {
                "to_do": "Late loan installment payment",
                "weight_percent": "50 percent of Loan Management (10%)",
                "points": "-50",
                "max_points": "-50"
              },
              {
                "to_do": "Daily penalty for late loan payments",
                "weight_percent": "50 percent of Loan Management (10%)",
                "points": "-5 per day",
                "max_points": "-50"
              }
            ]
          }
        ]
      }
      

  return (
    <div className='p-5'>
         <Card className='border-0 shadow-none flex flex-col lg:flex-row md:items-center justify-between'>
            <CardHeader className='p-0'>
                <CardTitle className='text-[32px] text-[#1A1C21]'>TrustScore</CardTitle>
                <CardDescription className='text-[16px] text-[#667085]'>Here’s your Details About Trust-score. </CardDescription>
            </CardHeader>
            <div className='flex flex-col gap-5 mt-5 lg:mt-0 lg:flex-row justify-between w-full lg:w-auto'>
                <Select>
                    <SelectTrigger className="h-[45px] rounded-lg outline-none border border-[#110D15]">
                    <SelectValue placeholder="Trust score Category: All" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    </SelectContent>
                </Select>
                <Button
                    className="h-[45px] rounded-lg flex items-center gap-2 bg-black text-white px-5"
                >
                <Settings className="text-lg" />
                    <span>Setting</span>
                </Button>
            </div>
        </Card>

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
            </div>

            <div className="my-6">
                <Card className="overflow-hidden mb-4">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F7F8FA]">
                                <TableHead className="px-4">Category</TableHead>
                                <TableHead className="px-4">To-DO Actions</TableHead>
                                <TableHead className="px-4">Weight (%)</TableHead>
                                <TableHead className="px-4">Points</TableHead>
                                <TableHead className="px-4">Max Points Per Action</TableHead>
                                <TableHead className="px-4">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.categories.map((category, index) => (
                                category.actions.map((action, actionIndex) => (
                                    <TableRow key={`${index}-${actionIndex}`}>
                                        <TableCell className="px-4">{category.category}</TableCell>
                                        <TableCell className="px-4">{action.to_do}</TableCell>
                                        <TableCell className="px-4">{action.weight_percent}</TableCell>
                                        <TableCell className="px-4">{action.points}</TableCell>
                                        <TableCell className="px-4">{action.max_points}</TableCell>
                                        <TableCell className="px-4">
                                            <div className="flex gap-5 px-4">
                                                <Image className="cursor-pointer" src={view} alt="view" />
                                                <Image className="cursor-pointer" src={edit} alt="edit" />
                                                <Image className="cursor-pointer" src={trash} alt="trash" />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ))}
                        </TableBody>
                    </Table>
                </Card>
            </div>

            
        </Card>
        
    </div>
  )
}

export default TrustScore