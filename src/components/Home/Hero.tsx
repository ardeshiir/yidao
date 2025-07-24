import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className={'w-screen flex items-end center pb-[100px] justify-center gap-[120px] h-[80vh]'} style={{background: 'linear-gradient(180deg, rgba(247, 247, 247, 0) 29.64%, #F3F3F3 100%)' }}>
<div className={'md:flex hidden items-end gap-6 translate-y-[170px]'}>
  <div className={'relative aspect-[130/360] h-[60vh]'}><Image quality={100} alt={'pencil-yidao'} src={'/banner-1.png'} fill={true} objectFit={'cover'}/></div>
  <div className={'relative aspect-[119/304] h-[50vh]'}><Image quality={100} alt={'pencil-yidao'} src={'/banner-2.png'} fill={true} objectFit={'cover'}/></div>
  <div className={'relative aspect-[77/295] h-[49vh]'}><Image  quality={100} alt={'pencil-yidao'} src={'/banner-3.png'} fill={true} objectFit={'cover'}/></div>
  <div className={'relative aspect-[75/295] h-[48vh]'}><Image  quality={100} alt={'pencil-yidao'} src={'/banner-4.png'} fill={true} objectFit={'cover'}/></div>
</div>
      <div className={'md:flex-col flex flex-row items-start'}>
        <Image alt={'pencil-yidao'} src={'/single-pencil.png'} className={'md:rotate-0 -rotate-90 md:static absolute left-[-25%] bottom-[30%]'} quality={100} width={415} height={50}/>
       <div className={'flex flex-col md:ml-0 ml-20'}>
         <Image alt={'pencil-yidao'} src={'/draw-to.svg'} className={'md:flex hidden'} quality={100} width={466} height={62}/>
        <Image alt={'pencil-yidao'} src={'/draw-to-mobile.svg'} className={'md:hidden'} quality={100} width={173} height={186}/>
        <span className={'text-[22px] font-[400] h-[26px] md:max-w-auto leading-[24px] max-w-[172px]'}>Our new Infinity Mechanical Pencil</span>
       </div>
      </div>
    </div>
  )
}

export default Hero