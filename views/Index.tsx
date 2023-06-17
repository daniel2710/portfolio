import React from 'react'
import { Fira_Code } from 'next/font/google'
const FiraCode = Fira_Code({ subsets: ['latin'], weight: ['400', '500', '700'] });
import Topbar from '@/components/navigation/Topbar'
import Header from './Header';
import Particles from '@/components/Particles';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';

const Index = () => {
  return (
    <div className={`${FiraCode.className}`}>
      <Topbar/>
      <Header/>
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>
      <Particles/>
    </div>
  )
}

export default Index