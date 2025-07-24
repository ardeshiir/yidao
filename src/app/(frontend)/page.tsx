import React from 'react'

import Hero from '@/components/Home/Hero'
import ProductsList from '@/components/Home/ProductsList'
import SecondSection from '@/components/Home/SecondSection'
export const revalidate = 30

export default async function HomePage() {


  return (
    <div className="flex flex-col">
      <Hero/>
      <ProductsList/>
      <SecondSection/>
    </div>
  )
}
