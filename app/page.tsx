'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/Dashboard')
  }, [router])

  return (
    <div className='w-full h-screen bg-[#F5BE4A] flex justify-center items-center'>
      <div className='w-10 h-10 rounded-full animate-bounce border-4 border-black'></div>
    </div>
  )
}

export default Page
