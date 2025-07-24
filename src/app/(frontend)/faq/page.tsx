import React from 'react'
import FAQList from '@/components/FAQ/FAQList'


const Page = () => {
  return (
    <div className="flex flex-col">
      <div className={'w-full md:h-[40vh] h-[55vh]'} style={{background: 'linear-gradient(180deg, rgba(247, 247, 247, 0) 29.64%, #F3F3F3 100%)'}}>
        <div className={'w-full h-full mx-auto md:px-[98px] px-[58px] max-w-[988px]  flex items-end justify-start pb-[39px]'}>
          <div className={'flex flex-col md:items-start items-center'}>
            <h1 className={'text-[26px] font-semibold'}>常见问题解答</h1>
            <h2 className={'text-[26px] font-semibold md:text-start text-center text-[#ff0000]'}>Frequently Asked Questions</h2>
          </div>
        </div>
      </div>
      <FAQList/>
    </div>
  )
}

export default Page