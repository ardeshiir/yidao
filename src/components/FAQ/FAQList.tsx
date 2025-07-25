'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import { Easing, motion } from 'framer-motion'

interface IFaqItemProps {
  title: string
  secondaryTitle: string
  description: string
  secondaryDescription: string
  index:number
}
const FaqItem = ({
                   title,
                   secondaryTitle,
                   description,
                   secondaryDescription,
                   index
                 }:IFaqItemProps) => {
  return (
    <div className={cn('flex flex-col py-[32px] ',index !== 8 && 'border-b border-[#0000004D]')}>
<div className={'flex flex-col font-semibold leading-[20px]'}>
  <span>{index}. {title}</span>
  <span>{secondaryTitle}</span>
</div>
      <div className={'flex text-[16px] leading-[20px] mt-4 flex-col'}>
        <p>{description}</p>
        <p>{secondaryDescription}</p>
      </div>
    </div>
  )
}
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as Easing },
  },
}

const FaqList = () => {
  return <div className={'flex items-center w-full justify-center'} style={{
    background: 'linear-gradient(180deg, rgba(247, 247, 247, 0) 29.64%, #F3F3F3 100%)'
  }}>
            <div className={'flex md:px-[98px] mt-[12px] mb-[130px] max-w-[988px] mx-auto px-[58px] flex-col w-full'}>{Items.map((faqItem,index)=><motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            ><FaqItem {...faqItem}  key={index} index={index+1} /></motion.div>)}</div>
          </div>
}

const Items = [{
  title:'Do you accept international orders?',
  secondaryTitle:'你们接受国际订单吗？',
  description:'Yes! We ship worldwide and regularly work with clients across Asia, Europe, and the Middle East. If you have a preferred logistics partner or special requirements, we’re happy to accommodate.',
  secondaryDescription:'当然可以！我们为全球客户提供发货服务，合作伙伴遍及亚洲、欧洲、中东等地区。如您有指定物流或特殊要求，我们也乐意配合安排。',
},{
  title:'Is there a minimum order quantity (MOQ)?',
  secondaryTitle:'是否有最低起订量要求？',
  description:'Yes, for wholesale pricing and B2B orders, we typically require a minimum quantity. The exact MOQ depends on the product category—please contact our sales team for details.',
  secondaryDescription:'有的。对于批发或 B2B 订单，我们通常设有起订量要求，具体数量因产品而异，欢迎联系销售团队了解详情',
},{
  title:'Can I customize the packaging with my own brand?',
  secondaryTitle:'我可以定制自己的品牌包装吗？',
  description:'Absolutely. We offer OEM and private label options for selected products. Custom packaging may require a minimum order and design approval before production.',
  secondaryDescription:'当然可以。我们为部分产品提供 OEM 和贴牌服务。定制包装需达到起订量，并在生产前完成设计确认。',
},
  {
    title:'What documents do you provide for international shipping?',
    secondaryTitle:'出口订单可以提供哪些文件？',
    description:'We provide standard export documents such as commercial invoices, packing lists, certificates of origin, and HS codes. Let us know if you need anything specific.',
    secondaryDescription:'我们可提供标准出口文件，如商业发票、装箱单、原产地证书和海关编码。如有特殊要求，也可按需提供。',
  },
  {
    title:'How long does shipping take?',
    secondaryTitle:'发货和运输周期多久？',
    description:'Shipping time depends on destination and method (air, sea, express). Production usually takes 7–15 business days. We’ll confirm the timeline with your order.',
    secondaryDescription:'运输时间取决于目的地及运输方式（空运、海运或快递）。常规生产周期为 7–15 个工作日，下单后我们将提供详细时效表。',
  },
  {
    title:'Are your products sustainable?',
    secondaryTitle:'你们的产品环保吗？',
    description:'Yes. We prioritize sustainability through refillable designs, long-lasting materials, and minimal packaging.',
    secondaryDescription:'是的。我们致力于环保，采用可更换笔芯、耐用材料及简约包装，减少浪费。',
  },
  {
    title:'Do you offer samples?',
    secondaryTitle:'可以申请样品吗？',
    description:'Yes, sample orders are available. Some fees may apply depending on product type and destination.',
    secondaryDescription:'可以。我们支持样品申请，部分产品或地区可能需支付费用。',
  },
  {
    title:'How can I become a distributor or partner?',
    secondaryTitle:'我如何成为你们的经销商或合作伙伴？',
    description:'We welcome global partnerships. Contact us or fill out our distributor application form to start the process.',
    secondaryDescription:'我们欢迎全球合作伙伴。您可联系我们或填写经销商申请表，我们会尽快与您联系。',
  }]

export default FaqList
