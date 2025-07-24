import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import ShippingIcon from '@/components/Icons/ShippingIcon'


const SecondSection = () => {
  return (
    <div className={'flex flex-col items-center my-[130px] md:mb-[130px] mb-[100px] md:px-[98px] px-[58px] gap-[39px]'}>
<div className={'flex md:flex-row flex-col text-center items-center md:gap-[60px] gap-[48px]'}>
  <div className={'min-w-[107px]'}><ShippingIcon/></div>
  <div className={cn('flex md:w-[85%] w-full flex-col text-center gap-5')}>
    <h2 className={'font-bold'}>安心发货，服务全球</h2>
    <p>我们很高兴为全球客户提供服务。对于大宗出口订单，请了解：不同国家/地区可能会根据当地海关政策产生进口税费和合规要求。虽然这些费用不由 YiDao Trade 控制或承担，但我们将尽全力协助您顺利完成采购流程  包括提供商业发票、产品认证等必要文件。如您对运输细节或所在地区有任何疑问，我们的团队乐意为您提供支持。让跨境采购变得更简单、更安心，是我们一直努力的方向。</p>
  </div>
</div>
<div className={'md:flex hidden items-center gap-[36px] w-full max-w-7xl'}>
<div className={'flex-grow h-full min-h-full'}><FirstCard/></div>
<div className={'w-[27%]'}><SecondCard/></div>
</div>
    </div>
  )
}

const FirstCard = () => {
  return (<div className={'pt-[60px] px-[40px] rounded-[30px] flex flex-col justify-between'} style={{background: 'linear-gradient(180deg, rgba(247, 247, 247, 0) 29.64%, #F3F3F3 100%)'}}>
            <div className={'flex flex-col'}>
              <span className={cn('text-[16px] font-[600] text-[#ff0004]')}>无限色彩，精心之作</span>
              <span className={cn('text-[24px] font-[600] text-black')}>Endless Color,<br/>
                Thoughtfully Designed</span>
            </div>
    <p className={cn('text-[16px] mt-[30px] font-[400] leading-[20px] max-w-[541px]')}>体验全新的色彩时代，我们的36色高品质自动彩铅专为创意与可持续发展而设计。与传统彩色铅笔随着使用而不断缩短不同，自动彩铅采用可更换笔芯设计，让每一抹鲜艳色彩持久如新，既减少浪费，又提升价值。提供多种精美包装选择，这套彩铅是艺术家、设计师和学生的理想之选，兼顾性能与环保。耐用、精准、可持续补充  这是可以“永远使用”的色彩体验。</p>
    <div className={'flex items-end justify-center mt-[69px] w-full'}><div className={'aspect-[694/152] w-[80%] relative'}><Image fill={true} src={'/card-pencils.png'} alt={'/'} objectFit={'contain'}/></div></div>
  </div>)
}

const SecondCard = () => {
  return (<div className={'pt-[34px] pb-[40px] size-full px-[40px] rounded-[30px] flex flex-col itemx-center'} style={{background: 'linear-gradient(180deg, rgba(247, 247, 247, 0) 29.64%, #F3F3F3 100%)'}}>
    <div className={'relative w-full aspect-[281/350]'}><Image src={'/card-package.png'} alt={'/'} fill={true} objectFit={'cover'}/></div>
    <span className={cn('text-[16px] font-[600]')}>Packaging Die-Cut Files</span>
    <span className={cn('text-[16px] font-[600] text-[#ff0004]',)}>包装刀模文件</span>
  </div>)
}

export default SecondSection