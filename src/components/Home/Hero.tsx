'use client'

import React from 'react'
import Image from 'next/image'
import { Easing, motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' as Easing } },
}

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1, duration: 0.8 } }, // Delay to match stagger group
}

const Hero = () => {
  return (
    <div
      className={
        'w-screen flex items-end center pb-[100px] justify-center gap-[120px] min-h-[700px] h-[80vh]'
      }
      style={{
        background:
          'linear-gradient(180deg, rgba(247, 247, 247, 0) 29.64%, #F3F3F3 100%)',
      }}
    >
      <motion.div
        className={'md:flex hidden items-end gap-6 translate-y-[170px]'}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          id={'item-1'}
          variants={itemVariants}
          className={'relative aspect-[130/360] h-[60vh]'}
        >
          <Image
            quality={100}
            alt={'pencil-yidao'}
            src={'/banner-1.png'}
            fill={true}
            objectFit={'cover'}
          />
        </motion.div>
        <motion.div
          id={'item-2'}
          variants={itemVariants}
          className={'relative aspect-[119/304] h-[50vh]'}
        >
          <Image
            quality={100}
            alt={'pencil-yidao'}
            src={'/banner-2.png'}
            fill={true}
            objectFit={'cover'}
          />
        </motion.div>
        <motion.div
          id={'item-3'}
          variants={itemVariants}
          className={'relative aspect-[77/295] h-[49vh]'}
        >
          <Image
            quality={100}
            alt={'pencil-yidao'}
            src={'/banner-3.png'}
            fill={true}
            objectFit={'cover'}
          />
        </motion.div>
        <motion.div
          id={'item-4'}
          variants={itemVariants}
          className={'relative aspect-[75/295] h-[48vh]'}
        >
          <Image
            quality={100}
            alt={'pencil-yidao'}
            src={'/banner-4.png'}
            fill={true}
            objectFit={'cover'}
          />
        </motion.div>
      </motion.div>

      <motion.div
        id={'item-5'}
        className={'md:flex-col flex flex-row items-start'}
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
      >
        <Image
          alt={'pencil-yidao'}
          src={'/single-pencil.png'}
          className={
            'md:rotate-0 -rotate-90 md:static absolute left-[-25%] bottom-[30%]'
          }
          quality={100}
          width={415}
          height={50}
        />
        <div className={'flex flex-col md:ml-0 ml-20'}>
          <Image
            alt={'pencil-yidao'}
            src={'/draw-to.svg'}
            className={'md:flex hidden'}
            quality={100}
            width={466}
            height={62}
          />
          <Image
            alt={'pencil-yidao'}
            src={'/draw-to-mobile.svg'}
            className={'md:hidden'}
            quality={100}
            width={173}
            height={186}
          />
          <span className={'text-[22px] font-[400] h-[26px] md:max-w-auto leading-[24px] max-w-[172px]'}>
            Our new Infinity Mechanical Pencil
          </span>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
