import Image from 'next/image';
import Line from '../public/img/line_pink.svg';
import { AiFillLinkedin, AiOutlineMail, AiOutlineWhatsApp, AiFillGithub } from 'react-icons/ai';

const Contact = () => {
  return (
    <section className='pt-[34px] px-4 bg-main'>
        <div className='flex gap-2'>
            <h2 className='text-white text-2xl'><span className='text-pink'>#</span>Contact</h2>
            <Image className='w-[50%]' src={Line} alt='Line' />
        </div>
        <div className='mt-[34px]'>
            <p className='text-gray text-base'>I am interested in being part of a work team, if you want to contact me you can do it through the different options that I will leave you below.</p>
        </div>

        <div className='flex flex-col gap-6 mt-2 border-[1px] border-gray text-gray'>
            <div className='flex flex-col gap-2 pb-2'>
                <div className='pl-3 flex flex-col gap-4'>
                    <p className='text-xl text-white text-center'>Contact me</p>
                    <div className='flex gap-2 flex-col'>
                        <a href='mailto:daniel2710es@gmail.com' target='_blank' className='flex gap-2 items-center'>
                            <AiOutlineMail className='w-5 h-5'/>
                            <p className='text-base text-gray'>daniel2710es@gmail.com</p>
                        </a>
                        <a href='https://www.linkedin.com/in/daniel-de-avila' target='_blank' className='flex gap-2 items-center'>
                            <AiFillLinkedin className='w-5 h-5' />
                            <p className='text-base text-gray'>Daniel De Avila</p>
                        </a>
                        <a href='https://api.whatsapp.com/send?phone=+573244933254&text=Hello' target='_blank' className='flex gap-2 items-center'>
                            <AiOutlineWhatsApp className='w-5 h-5' />
                            <p className='text-base text-gray'>Whatsapp</p>
                        </a>
                        <a href='https://github.com/daniel2710' target='_blank' className='flex gap-2 items-center'>
                            <AiFillGithub className='w-5 h-5' />
                            <p className='text-base text-gray'>Github</p>
                        </a>
                    </div>
                </div>   
            </div>  
        </div>
    </section>
  )
}

export default Contact