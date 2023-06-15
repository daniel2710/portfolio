import React from 'react'
import { Fira_Code } from 'next/font/google'
const FiraCode = Fira_Code({ subsets: ['latin'], weight: ['400', '500', '700'] });
import Topbar from '@/components/navigation/Topbar'
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className={`${FiraCode.className}`}>
      <Topbar/>
      <Header/>
    </div>
  )
}

export default Index