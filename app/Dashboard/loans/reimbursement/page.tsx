import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import moneyWallet from "@/public/Dashboard_Icons/wallet-money.svg"
import people from "@/public/Loan_Request_icons/people.svg"
import global from "@/public/Loan_Request_icons/global.svg"
import Image from 'next/image'
import ReimbursementTable from '@/components/Loans/ReimbursementTable/ReimbursementTable'

const Reimbursement = () => {

    const cardData = [
        {title: '5', subTitle: 'Number of Loans', icon: moneyWallet},
        {title: '9', subTitle: 'Number of Groups', icon: people},
        {title: '3', subTitle: 'Number of Countries', icon: global},
      ]

  return (
    <div className='p-5'>
        <Card className='border-0 shadow-none flex flex-col md:flex-row md:items-center justify-between'>
            <CardHeader className='p-0 pt-5'>
                <CardTitle className='text-[32px] text-[#1A1C21]'>Loan Reimbursement</CardTitle>
                <CardDescription className='text-[16px] text-[#667085]'>Here’s what happening with your Loan Reimbursement</CardDescription>
            </CardHeader>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
            {cardData.slice(0, 3).map((data, id) => (
                <Card key={id} className="h-[120px] w-full flex items-center gap-5 p-5 border-0 shadow-custom">
                <span className="h-14 w-14 border-2 border-[#DCDCDC] rounded-lg flex items-center justify-center">
                    <Image src={data.icon} alt="Group icon" />
                </span>
                <div>
                    <CardTitle className="text-[26px]">{data.title}</CardTitle>
                    <CardDescription className="text-[13px]">{data.subTitle}</CardDescription>
                </div>
                </Card>
            ))}
        </div>

        <ReimbursementTable/>
    </div>
  )
}

export default Reimbursement