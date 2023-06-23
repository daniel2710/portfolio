import { Fira_Code } from 'next/font/google'
const FiraCode = Fira_Code({ subsets: ['latin'], weight: ['400', '500', '700'] });
import Topbar from '@/components/navigation/Topbar'
import Header from '../sections/Header';
import Particles from '@/components/Particles';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Work from '../sections/Work';
import References from '../sections/References';
import Footer from '@/sections/Footer';
import TopbarDesktop from '@/components/navigation/desktop/TopbarDesktop';

const Index = () => {
  return (
    <div className={`${FiraCode.className}`}>
      <Topbar/>
      <TopbarDesktop/>
      <Header/>
      <Projects/>
      <Skills/>
      <Work/>
      <References/>
      <About/>
      <Contact/>
      <Footer/>
      <Particles/>
    </div>
  )
}

export default Index