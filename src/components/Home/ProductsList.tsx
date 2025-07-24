import React, { ReactNode } from 'react'
import Image from 'next/image'

interface ProductsListProps {
  count: number
  title: string
  subtitle:  ReactNode
  description: string
  price: number
  image: string
}

const SingleProduct = ({count,subtitle,title,price,description, image}:ProductsListProps) => {
  return (
    <div className={'px-[14px] relative md:max-h-[310px] py-[15px] bg-[#D9D9D94D] md:pt-[15px] pt-[200px] md:flex-row flex-col flex items-center justify-center gap-[50px] rounded-[30px]'}>
      <div className={'md:flex-grow md:h-full flex justify-center md:px-0 px-14 md:static absolute top-[-25%] md:w-auto w-full'}>
        <div className={'relative aspect-[140/260] md:w-auto w-full h-full'}><Image quality={100}  src={image} alt="" fill={true} objectFit={'contain'} /></div>
      </div>
      <div className={'md:w-[62%] w-[100%] md:h-full rounded-[20px] bg-white flex gap-[12px] flex-col px-[36px] py-[28px]'}>
          <span className={'text-[16px] leading-[16px] text-[#ff0004]'}>{`${count} PCS`}</span>
          <span className={'text-[26px] font-bold'}>{title}</span>
          <span className={'text-[14px]'}>{subtitle}</span>
          <span className={'text-[12px] text-[#00000080] leading-[16px]'}>{description}</span>
          <div className={'flex flex-col'}>
            <span className={'text-[24px] font-bold'}>{`约 ¥${price} CNY`}</span>
            <span className={'text-[12px] text-[#00000080]'}>On minimum order</span>
          </div>
</div>

    </div>
  )
}

const ProductsList = () => {
  return (
    <div
      className={'grid md:mt-[150px] mt-[240px] md:gap-[30px] gap-[180px] mx-auto md:px-[98px] px-[58px] md:grid-cols-2 grid-cols-1'}
    >
      {products.map((prod,index)=><SingleProduct {...prod} key={index}/>)}
    </div>
  )
}

const products = [{
  count:34,
  title: 'Mechanical Color Pencils',
  subtitle: <div className={'flex flex-col'}><span className={'leading-[16px]'}>Pencil Sharpener Included</span>
    <span className={'leading-[16px]'}>2.6mm lead</span></div> as ReactNode,
  description:'这款环保铅笔采用可更换设计，减少资源浪费，结合无木创新结构，实现真正的树木友好型方案。配合高品质笔芯，带来顺滑、耐用的真实铅笔书写体验。',
  price: 36,
  image: '/prod-card-1.png'
},
  {
    count:24,
    title: 'Mechanical Color Pencils',
    subtitle: <div className={'flex flex-col'}><span className={'leading-[16px]'}>Pencil Sharpener Included</span>
    <span className={'leading-[16px]'}>2.6mm lead</span></div>  as ReactNode,
    description:'这款环保铅笔采用可更换设计，减少资源浪费，结合无木创新结构，实现真正的树木友好型方案。配合高品质笔芯，带来顺滑、耐用的真实铅笔书写体验。',
    price: 36,
    image: '/prod-card-2.png'
  },
  {
    count:18,
    title: 'Mechanical Color Pencils',
    subtitle: <div className={'flex flex-col'}><span className={'leading-[16px]'}>Pencil Sharpener Included</span>
    <span className={'leading-[16px]'}>2.6mm lead</span></div>  as ReactNode,
    description:'这款环保铅笔采用可更换设计，减少资源浪费，结合无木创新结构，实现真正的树木友好型方案。配合高品质笔芯，带来顺滑、耐用的真实铅笔书写体验。',
    price: 36,
    image: '/prod-card-3.png'
  },
  {
    count:12,
    title: 'Mechanical Color Pencils',
    subtitle: <div className={'flex flex-col'}><span className={'leading-[16px]'}>Pencil Sharpener Included</span>
    <span className={'leading-[16px]'}>2.6mm lead</span></div>  as ReactNode,
    description:'这款环保铅笔采用可更换设计，减少资源浪费，结合无木创新结构，实现真正的树木友好型方案。配合高品质笔芯，带来顺滑、耐用的真实铅笔书写体验。',
    price: 36,
    image: '/prod-card-4.png'
  }

]

export default ProductsList