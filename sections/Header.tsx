import Image from "next/image";
import headerImg from '../public/img/header_image.png';
import outline from '../public/img/outline.svg';
import planet from '../public/img/planet.png';
import dots from '../public/img/Dots.svg';
import quote from '../public/icons/quotation.svg';
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import line from '../public/icons/line.svg';

const Header = () => {
  return (
      <header id="Home" className="pt-[34px] bg-main px-4 py-4 xl:pl-36 xl:pr-36 relative">
        <div className='hidden xl:flex absolute left-5 top-[-100px] flex-col justify-center items-center'>
          <Image className='h-full z-[500]' src={line} alt='line' />
          <div className='flex flex-col mt-1 gap-3 justify-center items-center'>
            <a className="text-gray hover:text-pink transition-all duration-300" href='https://github.com/daniel2710' target='_blank'>
              <AiFillGithub className='h-8 w-8' />
            </a>
            <a className="text-gray hover:text-pink transition-all duration-300" href='https://api.whatsapp.com/send?phone=+573244933254&text=Hello' target='_blank'>
              <AiOutlineWhatsApp className='h-8 w-8' />
            </a>
            <a className="text-gray hover:text-pink transition-all duration-300" href='https://www.linkedin.com/in/daniel-de-avila' target='_blank'>
              <AiFillLinkedin className='w-8 h-8' />
            </a>
          </div>
        </div>

        <div className="xl:flex items-center">
          <div className="xl:w-[60%]">
            <div>
              <p className='text-[32px] text-white'>Hi, I'm <span className="text-pink">Daniel De Avila</span>. A guy passionate about <span className="text-pink">frontend development</span> and technology</p>
            </div>
            <div className="pt-[25px]">
              <p className="text-base text-gray">I have 1 year of work experience. My main focus is the creation of user experiences using libraries and programming languages such as TypeScript, JavaScript, Next js, React js, React query, HTML5, CSS, Tailwind and the entire JavaScript environment.</p>
            </div>
            <div className="flex gap-3 mt-5">
              <div className="border border-pink hover:bg-pink transition-all duration-300 w-fit py-2 px-3 cursor-pointer">
                <a href="/pdf/cv.pdf" target="_blank" className="text-center text-white">Download cv</a>
              </div>
              <div className="border border-pink hover:bg-pink transition-all duration-300 w-fit py-2 px-3 cursor-pointer">
                <a href="https://www.linkedin.com/in/daniel-de-avila" target="_blank" className="text-center text-white">Contact me</a>
              </div>
            </div>
          </div>

          <div>
            <div className="pt-6 relative">
              <Image priority className="z-50 relative select-none" src={headerImg} alt="header image" />
              <Image priority className="z-10 absolute bottom-[140px] left-5 2xl:left-[-30px] rotateImg w-20 h-20 xl:w-36 xl:h-36 select-none" src={planet} alt="planet image" />
              <Image priority className="z-[60] absolute bottom-[30px] left-10 w-[120px] h-20 select-none" src={dots} alt="dots image" />
              <Image priority className="z-10 absolute bottom-[140px] right-0 w-[120px] h-[120px] select-none" src={outline} alt="outline image" />
            </div>

            <div className="py-2 pl-2 border-[1px] border-white flex justify-center gap-2 items-center">
              <div className="w-4 h-4 bg-[#5CFA4C]"></div>
              <p className="text-white">currently available to join your workgroup</p>
            </div>
          </div>
        </div>

        <div className="mt-10 m-auto w-fit border relative border-gray py-5 px-5">
          <Image className="w-5 h-5 absolute top-[-10px]" src={quote} alt="quote" />
          <p className="text-xl text-white">don't give up when faced with a difficult problem, just look for a creative solution</p>
        </div>
        <div className="flex justify-center">
          <div className="w-fit border-x border-b border-gray py-2 px-2 relative">
            <Image className="w-5 h-5 absolute top-[-10px] right-0" src={quote} alt="quote" />
            <p className="text-xl text-white">@danielfront</p>
          </div>
        </div>

      </header>
  )
}

export default Header