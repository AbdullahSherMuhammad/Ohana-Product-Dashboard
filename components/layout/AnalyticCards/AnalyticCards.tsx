import React from 'react'
import Image from 'next/image'
import {
    Card,
    CardDescription,
    CardTitle,
  } from "@/components/ui/card"

  import people from "@/public/Dashboard_Icons/people.svg"
  import user from "@/public/Dashboard_Icons/profile-2user.svg"
  import moneyWallet from "@/public/Dashboard_Icons/wallet-money.svg"
  import box from "@/public/Dashboard_Icons/strongbox.svg"
  import group from "@/public/Dashboard_Icons/group.svg"
  import money from "@/public/Dashboard_Icons/moneys.svg"
  import wallet3 from "@/public/Dashboard_Icons/wallet-3.svg"

const AnalyticCards = () => {

      const cardData = [
        {title: '15', subTitle: 'Groups', icon: people},
        {title: '150', subTitle: 'Members', icon: user},
        {title: '$15K', subTitle: 'Savings', icon: moneyWallet},
        {title: '$15K', subTitle: 'Solidarity', icon: box},
        {title: '$5K', subTitle: 'Loans', icon: wallet3},
        {title: '$3K', subTitle: 'Reimbursed', icon: group},
        {title: '$5K', subTitle: 'Earning', icon: money},
      ]
    
  return (
    
    <div className="grid gap-5 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cardData.slice(3).map((data, id) => (
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
      </div>
  )
}

export default AnalyticCards