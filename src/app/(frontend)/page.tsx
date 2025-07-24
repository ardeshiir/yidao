import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import Hero from '@/components/Home/Hero'
import ProductsList from '@/components/Home/ProductsList'
import SecondSection from '@/components/Home/SecondSection'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })



  return (
    <div className="flex flex-col">
      <Hero/>
      <ProductsList/>
      <SecondSection/>
    </div>
  )
}
