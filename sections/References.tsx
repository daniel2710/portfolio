import Image from 'next/image';
import Line from '../public/img/line_pink.svg';
import { references } from '@/data/references';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const References = () => {

    return (
        <section id='References' className='pt-[34px] bg-main px-4 py-4 xl:pl-36 xl:pr-36'>
            <div className='flex gap-2'>
                <h2 className='text-white text-2xl xl:text-4xl'><span className='text-pink'>#</span>Referencias laborales</h2>
                <Image className='w-[50%]' src={Line} alt='Line' />
            </div>
            <div className='mt-[34px] pb-3 flex justify-center'>
                {/* <div className='flex gap-2 justify-end items-center'>
                    <p className='text-white'>Slide</p>
                    <FaLongArrowAltRight className='text-white' />
                </div> */}
                {/* <ScrollContainer className='flex gap-5'>  */}
                <div className='flex gap-5 md:w-[50%]'> 
                    { references.map((item, idx) =>(
                        <div key={idx} className='flex flex-col gap-1 min-w-fit items-center'>
                            <div className='max-h-[190px] max-w-[190px] rounded-full'>
                                <Image priority src={item.profile} className='h-full w-full rounded-full' width={150} height={150} alt='jaishir bayuelo' />
                            </div>
                            <h3 className='text-xl text-white text-center'>{item.name}</h3>
                            <h4 className='text-base text-pink text-center'>{item.ocupation}</h4>
                            <p className='text-sm text-gray text-center'>{item.message}</p>
                            <div className='flex gap-2 mt-2'>    
                                <a href={item.linkdin} target='_blank' className='flex gap-2 items-center text-gray hover:text-pink transition-all duration-300'>
                                    <AiFillLinkedin className='w-10 h-10' />
                                </a>
                                {item.ig && <a href={item.ig} target='_blank' className='flex gap-2 items-center text-gray hover:text-pink transition-all duration-300'>
                                    <AiFillInstagram className='w-10 h-10' />
                                </a>}
                                {item.github && <a href={item.github} target='_blank' className='flex gap-2 items-center text-gray hover:text-pink transition-all duration-300'>
                                    <AiFillGithub className='w-10 h-10' />
                                </a>}
                            </div>
                        </div>
                    )) }
                </div>
                {/* <ScrollContainer/> */}
            </div>
        </section>
    )
}

export default References