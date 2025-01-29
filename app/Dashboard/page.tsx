'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import StyledAreaChart from '@/components/Dashboard/AreaChart/AreaChart'
import RadialChart from '@/components/Dashboard/RadialChart/RadialChart'
import UserTable from '@/components/Dashboard/Table/RecentTransactionTable'
import AnalyticCards from '@/components/layout/AnalyticCards/AnalyticCards'

const Home = () => {


  return (
    <div className='p-5'>

      <Card className='border-0 shadow-none flex flex-col md:flex-row md:items-center justify-between'>
        <CardHeader className='p-0'>
          <CardTitle className='text-[32px] text-[#1A1C21]'>Welcome Back Mawuna!</CardTitle>
          <CardDescription className='text-[16px] text-[#667085]'>Here’s what happening with your money today</CardDescription>
        </CardHeader>
        <div className='flex flex-col sm:flex-row gap-5 mt-5 md:mt-0'>
          <Select>
            <SelectTrigger className="h-[40px] rounded-lg outline-none border border-[#110D15]">
              <SelectValue placeholder="Coutry: All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className=" h-[40px] rounded-lg outline-none border border-[#110D15]">
              <SelectValue placeholder="Group type: All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Type">Type</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Cards Sections */}
      <AnalyticCards/>
        
      <div className='mt-5 flex flex-col lg:flex-row gap-10'>
        <Card className='lg:w-[70%] border-0 shadow-lg'>
          <CardHeader>
            <CardTitle>Member, Saving, Loans</CardTitle>
          </CardHeader>
          <StyledAreaChart/>
          <Card className='m-5 p-5 flex flex-wrap justify-between items-center'>
            <div className='flex flex-col gap-1'>
              <span>Period</span>
              <strong className='text-3xl'>2025</strong>
            </div>
            <span className='w-[1px] h-[60px] bg-[#DCDCDC]'></span>
            <div className='flex flex-col gap-1'>
              <span>Deposit Total</span>
              <strong className='text-3xl'>92,770,350.00F</strong>
            </div>
            <span className='w-[1px] h-[60px] bg-[#DCDCDC]'></span>
            <div className='flex flex-col gap-1'>
              <span>Income</span>
              <strong className='text-3xl'>42,770,350.00F</strong>
            </div>
          </Card>
        </Card>

        <Card className='lg:w-[30%] border-0 shadow-lg'>
          <CardHeader>
              <CardTitle>Loans</CardTitle>
              <CardDescription>Loans Detail</CardDescription>
          </CardHeader>
          <RadialChart/>
          <div className="flex justify-between items-center px-5 mb-2">
            <h3>Loans ammount</h3>
            <strong className='font-semibold'>$140.00</strong>
          </div>  
          <div className="flex justify-between items-center px-5 mb-2">
            <h3>Total Interest</h3>
            <strong className='font-semibold'>$140.00</strong>
          </div>
          <div className="flex justify-between items-center px-5 mb-2">
            <h3>Monthly Payments</h3>
            <strong className='font-semibold'>$140.00</strong>
          </div>
          <div className="flex justify-between items-center px-5 mb-2">
            <h3>Already Paid</h3>
            <strong className='font-semibold'>$140.00</strong>
          </div>
          <div className="flex justify-between items-center px-5 mb-2">
            <h3>Current Debt</h3>
            <strong className='font-semibold'>$140.00</strong>
          </div>
        </Card>
      </div>

      <Card className='mt-5 p-5'>
        <div className='flex flex-col md:flex-row items-center justify-between border-b-2 border-[#DCDCDC] pb-4'>
            <CardTitle className='text-[32px] text-[#1A1C21]'>Recent Transactions</CardTitle>
            <div className='flex gap-5'>
              <Select>
                <SelectTrigger className="h-[40px] rounded-lg outline-none border border-[#110D15]">
                  <SelectValue placeholder="Coutry: All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className=" h-[40px] rounded-lg outline-none border border-[#110D15]">
                  <SelectValue placeholder="Group type: All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Type">Type</SelectItem>
                </SelectContent>
              </Select>
              </div>
        </div>
        <UserTable/>
      </Card>

    </div>
  )
}

export default Home