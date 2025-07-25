import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LogoAsIcon = () => {
  return (
    <Image quality={100} width={88} height={155} src={'/logo.png'} alt={'Logo'} />
  )
}

export default LogoAsIcon