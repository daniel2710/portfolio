import { CSSProperties } from "react";
import Image from "next/image";
import quote from '../public/icons/quotation.svg';
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import line from '../public/icons/line.svg';
import react from '../public/img/animation/react.png'
import github from '../public/img/animation/github.png'
import ts from '../public/img/animation/ts.png'
import js from '../public/img/animation/js.png'
import next from '../public/img/animation/next-js.svg'

const Header = () => {
  return (
      <header id="Home" className="pt-[34px] bg-main px-4 py-4 xl:pl-36 relative">
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

        <div className="flex flex-col xl:flex-row xl:items-center">
          <div className="w-full xl:w-[50%]">
            <div>
              <p className='text-[32px] text-white'>¡Hola, soy <span className="text-pink">Daniel De Avila</span>. un joven apasionado del <span className="text-pink">desarrollo web</span> y la tecnología!</p>
            </div>
            <div className="pt-[25px]">
              <p className="text-base text-gray">Mi enfoque principal es la creación de experiencias de usuario utilizando bibliotecas y lenguajes de programación como TypeScript, JavaScript, Next.js, React.js, React Query, CSS y todo el entorno web. <br/><br/>
              He participado en varios proyectos reales donde he podido aplicar y perfeccionar mis habilidades, asegurándome de que las interfaces sean intuitivas y estén optimizadas para el mejor rendimiento. Además, estoy comprometido con el aprendizaje continuo y me mantengo actualizado con las últimas tendencias y mejores prácticas del desarrollo web.
              </p>
            </div>
            <div className="flex gap-3 mt-5">
              <div className="border border-pink hover:bg-pink transition-all duration-300 w-fit py-2 px-3 cursor-pointer">
                <a href="/pdf/Daniel De Avila - CV.pdf" target="_blank" className="text-center text-white">Obtén mi cv</a>
              </div>
              <div className="border border-pink hover:bg-pink transition-all duration-300 w-fit py-2 px-3 cursor-pointer">
                <a href="https://www.linkedin.com/in/daniel-de-avila" target="_blank" className="text-center text-white">Contáctame</a>
              </div>
            </div>
          </div>

          <div className="mt-10 xl:my-10 w-full xl:w-[50%]">

            <div className="slider-container h-[250px] sm:h-[300px] xl:h-[450px]">
              <div className="slider" style={{ '--quantity': 5 } as CSSProperties}>
                  <div className="item" style={{ '--position': 1 } as CSSProperties}>
                    <Image
                      src={react}
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="item --position: 2" style={{ '--position': 2 } as CSSProperties}>
                    <Image
                      src={ts}
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="item --position: 3" style={{ '--position': 3 } as CSSProperties}>
                    <Image
                      src={js}
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="item --position: 4" style={{ '--position': 4 } as CSSProperties}>
                    <Image
                      src={next}
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="item --position: 5" style={{ '--position': 5 } as CSSProperties}>
                    <Image
                      src={github}
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
              </div>
            </div>

            <div className="w-fit m-auto py-2 p-5 border-[1px] border-white flex justify-center gap-2 items-center">
              <div className="w-4 h-4 bg-[#5CFA4C]"></div>
              <p className="text-white">Me encuentro disponible para formar un equipo</p>
            </div>

          </div>
          
        </div>

        <div className="mt-10 m-auto w-fit border relative border-gray py-5 px-5">
          <Image className="w-5 h-5 absolute top-[-10px]" src={quote} alt="quote" />
          <p className="text-xl text-white">La calma en la tormenta es un arte que se cultiva enfrentando las olas.</p>
        </div>
        <div className="flex justify-center">
          <div className="w-fit border-x border-b border-gray py-2 px-2 relative">
            <Image className="w-5 h-5 absolute top-[-10px] right-0" src={quote} alt="quote" />
            <p className="text-xl text-white">@daniel_de_avila</p>
          </div>
        </div>

      </header>
  )
}

export default Header