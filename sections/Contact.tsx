import Image from 'next/image';
import Line from '../public/img/line_pink.svg';
import { AiFillLinkedin, AiOutlineMail, AiOutlineWhatsApp, AiFillGithub } from 'react-icons/ai';

const Contact = () => {
  return (
    <section id='Contact' className='pt-[34px] bg-main px-4 py-4 2xl:pr-36 '>
        <div className='flex gap-2'>
            <h2 className='text-white text-2xl xl:text-4xl'><span className='text-pink'>#</span>Contact</h2>
            <Image className='w-[50%]' src={Line} alt='Line' />
        </div>
        <div className='mt-[34px]  max-w-[1000px]'>
            <p className='text-gray text-base'>Estoy interesado en formar parte de un equipo de trabajo, si quieres contactarme puedes hacerlo a través de las diferentes opciones que te dejaré a continuación.</p>
        </div>

        <div className='flex flex-col gap-6 mt-2 border-[1px] border-gray text-gray  max-w-[1000px]'>
            <div className='flex flex-col gap-2 pb-2'>
                <div className='pl-3 mt-3 flex flex-col gap-4'>
                    <p className='text-xl text-white text-center'>Contáctame</p>
                    <div className='flex gap-2 flex-col w-fit'>
                        <a href='mailto:daniel2710es@gmail.com' target='_blank' className='flex gap-2 items-center text-gray hover:text-pink transition-all duration-300'>
                            <AiOutlineMail className='w-8 h-8'/>
                            <p className='text-base'>daniel2710es@gmail.com</p>
                        </a>
                        <a href='https://www.linkedin.com/in/daniel-de-avila' target='_blank' className='flex gap-2 items-center text-gray hover:text-pink transition-all duration-300'>
                            <AiFillLinkedin className='w-8 h-8' />
                            <p className='text-base'>Daniel De Avila</p>
                        </a>
                        <a href='https://api.whatsapp.com/send?phone=+573244933254&text=Hello' target='_blank' className='flex gap-2 items-center text-gray hover:text-pink transition-all duration-300'>
                            <AiOutlineWhatsApp className='w-8 h-8' />
                            <p className='text-base'>Whatsapp</p>
                        </a>
                        <a href='https://github.com/daniel2710' target='_blank' className='flex gap-2 items-center text-gray hover:text-pink transition-all duration-300'>
                            <AiFillGithub className='w-8 h-8' />
                            <p className='text-base'>Github</p>
                        </a>
                    </div>
                </div>   
            </div>  
        </div>
    </section>
  )
}

export default Contact