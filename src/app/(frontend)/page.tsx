import React from 'react'

import Hero from '@/components/Home/Hero'
import ProductsList from '@/components/Home/ProductsList'
import SecondSection from '@/components/Home/SecondSection'

export default async function HomePage() {


  return (
    <div className="flex flex-col">
      <Hero/>
      <ProductsList/>
      <SecondSection/>
    </div>
  )
}
