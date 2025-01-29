import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const PaginationComponent = () => {
  return (
    <div className='mt-5 flex items-center justify-between w-full'>
        <div>
          <p className='text-sm text-[#110D15]'>Showing 1 to 10 of 2500 Entries</p>
        </div>
        <div className='bg-[#110D15] rounded-full text-white px-2 flex gap-1 items-center'>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={() => console.log('Previous page')} className='bg-white p-0 h-[25px] w-[25px] border-[#F5BE4A] border-2 rounded-full text-black' />
              </PaginationItem>
              <PaginationItem className='flex gap-1 items-center'>
                <PaginationLink onClick={() => console.log('Page 1')} className='bg-[#F5BE4A] h-[25px] w-[25px] border-[#fff] border-2 rounded-full text-black'>1</PaginationLink>
                <PaginationLink onClick={() => console.log('Page 2')} className=' h-[25px] w-[25px] rounded-full'>2</PaginationLink>
                <PaginationLink onClick={() => console.log('Page 3')} className=' h-[25px] w-[25px] rounded-full'>3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem className='flex gap-1 items-center'>
                <PaginationLink onClick={() => console.log('Page 10')} className='h-[25px] w-[25px] rounded-full'>10</PaginationLink>
                <PaginationNext onClick={() => console.log('Next page')} className='bg-white p-0 h-[25px] w-[25px] border-[#F5BE4A] border-2 rounded-full text-black' />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
  )
}

export default PaginationComponent