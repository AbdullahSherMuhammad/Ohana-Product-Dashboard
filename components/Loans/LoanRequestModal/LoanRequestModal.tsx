"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import copyIcon from "@/public/assets/clipboard-text.svg";
import Image from "next/image";
import img1 from "@/public/images/img1.svg";
import img2 from "@/public/images/img2.svg";

interface LoanRequestModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const LoanRequestModal: React.FC<LoanRequestModalProps> = ({isOpen, setIsOpen}) => {

    const loanRequestData = [
        { title: "Applicant", name: "Mawuna Koutonin" },
        { title: "Country", name: "Togo" },
        { title: "Phone", name: "+228 92105147" },
        { title: "Trust Score", name: "345 (level: low)" },
        { title: "Amount in Groups", name: "$345" },
        { title: "Previous Loan", name: "0" },
        { title: "Interest", name: "3%" },
        { title: "Payment Cycle", name: "Weekly" },
        { title: "Registration Date", name: "12-10-25" },
        { title: "Group Balance", name: "34000" },
        { title: "Loan Level", name: "Quick Cash" },
        { title: "Fees 1", name: "3%" },
        { title: "Group Progress", name: "2/6 Months" },
        { title: "Amount in Wallet", name: "$345" },
        { title: "Fees 2", name: "3%" },
        { title: "Amount", name: "34 000F" },
      ];
      
      const recommendations = [
        {
          name: "Recommendation 1",
          details: [
            { title: "Name", name: "Komi Also" },
            { title: "Country", name: "Togo" },
            { title: "Phone", name: "+228 98765432" },
            { title: "Trudt Score", name: "+0 unKnown" },
            { title: "Registration Date", name: "12-10-25" },
            { title: "Groupse", name: "Open Saving Groups" },
            { title: "Amount in Wallet", name: "$345" },
            { title: "Recommended Friends", name: "1" },
          ],
        },
        {
          name: "Recommendation 2",
          details: [
            { title: "Name", name: "Komi Also" },
            { title: "Country", name: "Togo" },
            { title: "Phone", name: "+228 98765432" },
            { title: "Registration Date", name: "12-10-25" },
            { title: "Amount in Wallet", name: "$345" },
            { title: "Recommended Friends", name: "3" },
          ],
        },
      ];
      
      const idVerification = [
        { title: "Age", name: "27" },
        { title: "Location", name: "Lome" },
        { title: "ID Number", name: "12345" },
        { title: "Gender", name: "Male" },
      ];
      

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="custom-scrollbar max-w-xl p-6 rounded-none md:rounded-lg overflow-y-auto max-h-screen md:max-h-[90vh] w-full"
            style={{ width: "750px", maxWidth: "100%" }}
        >
            <span className="bg-[#110D15] text-white w-12 h-12 flex justify-center items-center rounded-lg">
                <Image src={copyIcon} alt="copy icon" className="filter invert w-7"/>
            </span>
            <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                    Loan Request Details
                </DialogTitle>
                <p className="text-sm text-gray-500">
                    United States OF America | Basic | 6 Months
                </p>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    loanRequestData.map((data, id) => (
                        <div key={id} className="flex gap-2">
                            <Label className="text-sm">{data.title}:</Label>
                            <p className="font-light text-sm">{data.name}</p>
                        </div>
                    ))  
                }
            </div>

            <div>
                {recommendations.map((data, id) => (
                    <div key={id} className="mt-5">
                        <div className="mb-2">
                            <Label className="text-lg">{data.name}</Label>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {data.details.map((detail, index) => (
                            <div key={index} className="flex gap-2">
                                <Label className="text-sm">{detail.title}:</Label>
                                <p className="font-light text-sm">{detail.name}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <div className="mb-2">
                    <Label className="text-lg">ID Verification</Label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                    {
                        idVerification.map((data, id) => (
                            <div key={id} className="flex gap-2">
                                <Label className="text-sm">{data.title}:</Label>
                                <p className="font-light text-sm">{data.name}</p>
                            </div>
                        ))  
                    }
                </div>
            </div>
                
            <div className="flex flex-col md:flex-row gap-5 items-center justify-between mt-5">
                <Image src={img1} width={350} height={350} alt="img1" />
                <Image src={img2} width={350} height={350} alt="img1" />
            </div>
            

            {/* Footer */}
            <DialogFooter className="mt-20">
                <Button variant="ghost" className="border border-gray-300 w-[140px] h-[45px]">
                     Approved
                </Button>
                <Button variant="ghost" className="border border-gray-300 w-[140px] h-[45px]">
                     Reject
                </Button>
                <Button className="w-[140px] h-[45px]">Send Message</Button>
            </DialogFooter>

            <DialogClose className="absolute top-4 right-4 w-6 h-6 text-gray-500 hover:text-black" />
        </DialogContent>
    </Dialog>
  );
};

export default LoanRequestModal;
