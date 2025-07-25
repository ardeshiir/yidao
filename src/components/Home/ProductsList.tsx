import React, { ReactNode } from 'react'
import Image from 'next/image'
import config from '@payload-config'
import { getPayload } from 'payload'
import { motion } from 'framer-motion'
import ProductsListClientSide from '@/components/Home/ProductsListClientSide'



const ProductsList = async () => {
  const payload = await getPayload({ config })
  const productsData = await payload.find({
    collection: 'products',
    depth: 2,
  })

  const products = productsData?.docs || []

  return (
        <ProductsListClientSide products={products}/>
  )
}



export default ProductsList