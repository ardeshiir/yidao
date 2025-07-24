'use client'
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathName=usePathname()
  return (
    <div className={'flex flex-col md:px-[98px] px-[58px] pb-[140px]'}>
      {!pathName.includes('faq') &&<div className={'w-full h-px bg-[#0000004D]'} />}
      <div className={'grid grid-cols-3 justify-between w-full mt-[33px] md:px-[32px]'}>
        <div className={'md:col-span-1 col-span-3'}>
          <Image
            alt={'footer-water-mark'}
            src={'/footer-water-mark-desktop.svg'}
            className={'md:flex hidden'}
            width={417}
            height={81}
          />
          <Image
            alt={'footer-water-mark'}
            src={'/footer-water-mark-mobile.svg'}
            className={'flex md:hidden'}
            width={277}
            height={126}
          />
        </div>
        <div className={'col-span-1 md:flex hidden justify-center'}>
          <Image
            alt={'footer-water-mark'}
            src={'/footer-description-1.svg'}
            width={334}
            height={87}
          />
        </div>
        <div className={'col-span-1 md:flex hidden justify-end'}>
          <Image
            alt={'footer-water-mark'}
            src={'/footer-description-2.svg'}
            width={334}
            height={87}
          />
        </div>
      </div>
    </div>
  )
}

export default Footer