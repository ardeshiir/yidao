'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'


const Header = () => {
  const pathName  = usePathname()
  return (
    <div className={'absolute top-0 z-10 flex justify-between pt-[50px] md:items-start items-center md:inset-x-[98px] inset-x-[58px]'}>
      <div className={'md:w-[88px] w-[104px] aspect-[88/155] relative'}><Image quality={100} fill={true} objectFit={'cover'} src={'/logo.png'} alt={'Logo'} /></div>
      <div className={cn('md:flex-row flex flex-col items-center md:gap-[64px] gap-[17px] md:mt-[22px]')}>
        <Link className={cn('font-[400] text-[16px] text-black',pathName === '/' && 'font-[600] text-[#ff0000]')} href='/'>Home/首页</Link>
      <Link className={cn('font-[400] text-[16px] text-black',pathName === '/about' && 'font-[600] text-[#ff0000]')} href='/about'>About Us/关于我们</Link>
        <Link className={cn('font-[400] text-[16px] text-black',pathName === '/faq' && 'font-[600] text-[#ff0000]')} href='/faq'>FAQ/常见问题</Link></div>
    </div>
  )
}

export default Header