import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <>

      <div className={'md:h-[151px] h-[210px] w-full bg-white'}/>
      <div className={'w-full md:aspect-[1512/672] md:px-[98px] px-[58px] pb-[136px] aspect-[393/1427] relative flex flex-col items-center justify-end'}>
        <Image quality={100} src={'/ship.png'} alt={'shipping-yidao'} fill={true} objectFit={'cover'} className={'md:object-center object-[8%_50%]'}/>
        <div className={'flex items-center 2xl:max-w-[1400px] max-w-[1200px] mx-auto flex-col z-10'}>
          <h1 className={'text-white text-center text-[62px] font-bold'}>关于我们</h1>
          <p className={'text-white mt-8 text-center leading-[20px]'}>Yidao 是  家专注于艺术与文具用品的国际分销公司，致力于将高品质的创作工具带给世界各地的创作者、机构与零售合作伙伴。我们的品牌灵感源于“艺道”——意为“艺术之道”，强调创作背后的精神、工艺与坚持。我们相信，艺术不仅仅是一种表达形式，更是  种态度和生活方式；而每一个创作者，都值得拥有匹配其理念与追求的工具。 我们与全球范围内值得信赖的制造商与设计团队紧密合作，精心甄选符合专业标准的产品。从色彩铅笔、自动绘图笔、画纸到包装解决方案，我们致力于提供兼具美学与功能性的产品，并满足不同客户在教学、设计、办公及创作等领域的需求。在选择产品的过程中，我们坚持“三重标准”：品质稳定、环保友好、长期可持续。<br/>在可持续发展方面，Yidao 不仅关注产品本身的使用寿命与环保性能，更注重整个供应链的责任感。我们推广使用可替换笔芯、无木结构等创新设计，减少资源浪费，同时倡导环保包装，降低运输过程中的碳足迹。每  件产品的背后，不仅是品质的保证，更是对地球的尊重。</p>
          <p className={'text-white mt-4 text-center leading-[20px]'}>作为连接东西方文化与市场的桥梁，我们的使命是将优秀的产品与理念传播至全球。在 YiDao，我们不仅销售产品，更希望成为客户创意旅程中的可靠支持者。无论您是艺术家、设计师、教育机构，还是正在寻找优质文具的分销商，我们都欢迎与您建立长期合作关系，共同探索创意与价值的更多可能。</p>
        </div>
      </div>

    </>
  )
}

export default Banner