import React from 'react'
import './styles.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import './styles.css'
import { Toaster } from '@/components/ui/sonner'

export const metadata = {
  description: 'Yidao',
  title: 'Yidao',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={'w-full'}>
    <Header/>
        <main className={'w-full'}>{children}</main>
    <Footer/>
    <Toaster />
      </body>
    </html>
  )
}
