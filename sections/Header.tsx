import Image from "next/image";
import headerImg from '../public/img/header_image.png';
import outline from '../public/img/outline.svg';
import planet from '../public/img/planet.png';
import dots from '../public/img/Dots.svg';

const Header = () => {
  return (
    <header className="pt-[34px] px-4 bg-main">
      <div>
        <p className='text-[32px] text-white'>Hi, I'm <span className="text-pink">Daniel De Avila</span>. A guy passionate about <span className="text-pink">frontend development</span> and technology</p>
      </div>
      <div className="pt-[25px]">
        <p className="text-base text-gray">I have 1 year of work experience. My main focus is the creation of user experiences using libraries and programming languages such as TypeScript, JavaScript, Next js, React js, React query, HTML5, CSS, Tailwind and the entire JavaScript environment.</p>
      </div>
      <div className="pt-6 relative">
        <Image className="z-50 relative" src={headerImg} alt="header image" />
        <Image className="z-10 absolute bottom-[140px] left-5 rotateImg w-20 h-20" src={planet} alt="planet image" />
        <Image className="z-[60] absolute bottom-[30px] left-10 w-[120px] h-20" src={dots} alt="dots image" />
        <Image className="z-10 absolute bottom-[140px] right-0 w-[120px] h-[120px]" src={outline} alt="outline image" />
      </div>

      <div className="py-2 pl-2 border-[1px] border-white flex gap-2 items-center">
        <div className="w-4 h-4 bg-[#5CFA4C]"></div>
        <p className="text-white">currently available to join work</p>
      </div>
    </header>
  )
}

export default Header