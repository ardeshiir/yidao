import React from 'react'
import FAQList from '@/components/FAQ/FAQList'
import Image from 'next/image'
import Banner from '@/components/ContactUs/Banner'
import Form from '@/components/ContactUs/Form'


const Page = () => {
  return (
    <div className="flex flex-col">
      <Banner/>
      <Form/>
    </div>
  )
}

export default Page