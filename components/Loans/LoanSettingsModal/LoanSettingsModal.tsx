"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Settings, X } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import { Card } from "@/components/ui/card";

interface LoanSettingsModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const LoanSettingsModal: React.FC<LoanSettingsModalProps> = ({isOpen, setIsOpen}) => {

    const loanData = [
        { level: "Quick Cash Loan", saving: 3, trust: "Level 1", recommendation: 2, paid: 0 },
        { level: "Flexi Loan", saving: 4, trust: "Level 2", recommendation: 0, paid: 2 },
        { level: "Growth Loan", saving: 5, trust: "Level 3", recommendation: 0, paid: 3 },
        { level: "Dream Loan", saving: 6, trust: "Level 4", recommendation: 0, paid: 4 },
        { level: "Builder Loan", saving: 7, trust: "Level 5", recommendation: 0, paid: 5 },
      ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="custom-scrollbar max-w-xl p-6 rounded-none md:rounded-lg overflow-y-auto max-h-screen md:max-h-[90vh] w-full"
            style={{ width: "850px", maxWidth: "100%" }}
        >
            <span className="bg-[#110D15] text-white w-10 h-10 flex justify-center items-center rounded-lg">
                <Settings className="w-6 h-6" />
            </span>
            <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                Groups Setting
                </DialogTitle>
                <p className="text-sm text-gray-500">
                United States OF America | Basic | 6 Months
                </p>
            </DialogHeader>

            <div>
                <Label className="text-[#333843] text-sm">Country* (Auto-Filled)</Label>
                <Input className="h-10 bg-[#F7F8FA] border-2 border-[#DCDCDC]" placeholder="USA" />
            </div>
            
            {/* General Fees Section */}
            <div>
                <Label className="text-[#333843] text-base">General Fees</Label>
                <div className="">
                    <div className="my-4 flex items-center gap-3">
                        <Checkbox  className="w-6 h-6" />
                        <Label className="font-normal">Insurance</Label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Input className="h-10 bg-[#F7F8FA] border-2 border-[#DCDCDC]" placeholder="Insurance %" />
                        <Input className="h-10 bg-[#F7F8FA] border-2 border-[#DCDCDC]" placeholder="USA" />
                    </div>
                </div>

                <div className="">
                    <div className="my-4 flex items-center gap-3">
                        <Checkbox  className="w-6 h-6" />
                        <Label className="font-normal">Service Fees</Label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Input className="h-10 bg-[#F7F8FA] border-2 border-[#DCDCDC]" placeholder="Service Fees %" />
                        <Input className="h-10 bg-[#F7F8FA] border-2 border-[#DCDCDC]" placeholder="USA" />
                    </div>
                </div>

                <div className="">
                    <div className="my-4 flex items-center gap-3">
                        <Checkbox  className="w-6 h-6" />
                        <Label className="font-normal">Tax</Label>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Input className="h-10 bg-[#F7F8FA] border-2 border-[#DCDCDC]" placeholder="Tax %" />
                        <Input className="h-10 bg-[#F7F8FA] border-2 border-[#DCDCDC]" placeholder="USA" />
                    </div>
                </div>

            </div>
            
            {/* Grace Period Section */}
            <div>
                <Label className="text-[#333843] text-base">Grace Period</Label>
                <div className="flex items-center gap-5">
                    <div className="my-4 flex items-center gap-3">
                        <Checkbox className="w-6 h-6" />
                        <Label className="font-normal">3 days</Label>
                    </div>
                    <div className="my-4 flex items-center gap-3">
                        <Checkbox className="w-6 h-6" />
                        <Label className="font-normal">5 days</Label>
                    </div>
                    <div className="my-4 flex items-center gap-3">
                        <Checkbox className="w-6 h-6" />
                        <Label className="font-normal">10 days</Label>
                    </div>
                </div>
                <div className="my-5">
                    <Label className="text-[#333843] text-sm">Required Trust Score Per Loan</Label>
                </div>
                <Card className="overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border border-gray-200">
                        <thead>
                            <tr className="bg-[#F7F8FA]">
                            <th className="border px-4 py-2 w-[180px]">Loan Level</th>
                            <th className="border px-4 py-2 w-[180px]">Saving Multiple</th>
                            <th className="border px-4 py-2">Trust Score</th>
                            <th className="border px-4 py-2">Recommendation</th>
                            <th className="border px-4 py-2">Paid Loan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loanData.map((row, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{row.level}</td>
                                <td className="border px-4 py-2">
                                <Input
                                    className="h-10 bg-[#F7F8FA] border-2 border-[#DCDCDC]"
                                    placeholder={`${row.saving}`}
                                
                                />
                                </td>
                                <td className="border px-4 py-2">
                                <Input
                                    className="h-10 bg-[#F7F8FA] border-2 border-[#DCDCDC]"
                                    placeholder={row.trust}
                                
                                />
                                </td>
                                <td className="border px-4 py-2">
                                <Input
                                    className="h-10 bg-[#F7F8FA] border-2 border-[#DCDCDC]"
                                    placeholder={`${row.recommendation}`}
                                
                                />
                                </td>
                                <td className="border px-4 py-2">
                                <Input
                                    className="h-10 bg-[#F7F8FA] border-2 border-[#DCDCDC]"
                                    placeholder={`${row.paid}`}
                                
                                />
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                </Card>
            </div>

            {/* Other Conditions */}
            <div>
                <div className="mb-3">
                    <Label className="text-[#333843] text-base">Other Conditions</Label>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                        <Checkbox className="w-6 h-6" />
                        <Label className="font-normal">No loan durning the last month of the cycle</Label>
                    </div>
                    <div className="flex items-center gap-3">
                        <Checkbox className="w-6 h-6" />
                        <Label className="font-normal">No loan during the last</Label>
                         <Select>
                            <SelectTrigger className="h-[40px] w-[300px] rounded-lg outline-none border border-[#110D15]">
                                <SelectValue placeholder="1 Month" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">1</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center gap-3">
                        <Checkbox className="w-6 h-6" />
                        <Label className="font-normal">No loans for members with late payment</Label>
                    </div>
                </div>
            </div>

            <div>
                <div className="my-4">
                    <Label className="text-[#333843] text-base">Interests Rate</Label>
                </div>
                <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                 <table className="min-w-full table-auto border-collapse border border-gray-200">
                    <thead>
                      <tr className="bg-[#F7F8FA]">
                        <th></th>
                        <th className="border px-4 py-2 font-medium">Trust Level 1</th>
                        <th className="border px-4 py-2 font-medium">Trust Level 2</th>
                        <th className="border px-4 py-2 font-medium">Trust Level 3</th>
                        <th className="border px-4 py-2 font-medium">Trust Level 4</th>
                        <th className="border px-4 py-2 font-medium">Trust Level 5</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2 w-[220px] font-light">6 Month Loan Duration</td>
                        </tr>
                      <tr>
                        <td className="border px-4 py-2 font-light">Month 1</td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="6,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="4,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="3,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="2,000%"
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 font-light">Month 2</td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="5,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="4,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="3,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="2,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="1,500%"
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 font-light">Month 3</td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                            <td className="border px-4 py-2 w-[220px] font-light">10 Month Loan Duration</td>
                        </tr>
                      <tr>
                        <td className="border px-4 py-2 font-light">Month 1</td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="6,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="4,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="3,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="2,000%"
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 font-light">Month 2</td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="5,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="4,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="3,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="2,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="1,500%"
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 font-light">Month 3</td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 font-light">Month 4</td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 font-light">Month 5</td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 font-light">Month 6</td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 font-light">Month 7</td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                            <td className="border px-4 py-2 w-[220px] font-light">12 Month Loan Duration</td>
                        </tr>
                      <tr>
                        <td className="border px-4 py-2 font-light">Month 1</td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="6,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="4,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="3,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="2,000%"
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 font-light">Month 2</td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="5,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="4,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="3,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="2,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="1,500%"
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 font-light">Month 3</td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 font-light">Month 4</td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 font-light">Month 5</td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 font-light">Month 6</td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 font-light">Month 7-9</td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                        <td className="border px-4 py-2">
                          <input
                            className="w-full text-center border px-2 py-1 rounded-md font-light bg-[#F7F8FA]"
                            type="text"
                            value="8,000%"
                            readOnly
                          />
                        </td>
                      </tr>
                    </tbody>
                 </table>
                </div>
                </Card>
            </div>

            {/* Footer */}
            <DialogFooter className="mt-20">
                <Button
                variant="ghost"
                onClick={() => setIsOpen(false)}
                className="border border-gray-300 w-[140px] h-[45px]"
                >
                Update
                </Button>
                <Button className="w-[140px] h-[45px]">Clone</Button>
            </DialogFooter>

            <DialogClose className="absolute top-4 right-4 w-6 h-6 text-gray-500 hover:text-black" />
        </DialogContent>
    </Dialog>
  );
};

export default LoanSettingsModal;
