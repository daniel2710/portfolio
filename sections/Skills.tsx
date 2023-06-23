import Image from 'next/image';
import Line from '../public/img/line_pink.svg';
import rectangle from '../public/icons/rectangle-2.svg';
import dots from '../public/img/Dots.svg';
import outline from '../public/img/outline.svg';
import { skills } from '@/data/skills';

const Skills = () => {
  return (
    <section id='Skills' className='pt-[34px] bg-main px-4 py-4 xl:pl-36 xl:pr-36'>
        <div className='flex gap-2'>
            <h2 className='text-white text-2xl 2xl:text-4xl'><span className='text-pink'>#</span>Skills</h2>
            <Image className='w-[50%]' src={Line} alt='Line' />
        </div>
        <div className='flex gap-2'>
            <div className='hidden md:block w-[30%] relative mt-10'>
                <Image className='absolute left-0 w-[60px] h-[60px]' src={dots} alt='dots' />
                <Image className='absolute right-0 w-[86px] h-[86px]' src={rectangle} alt="rectangle" />
                <Image className='absolute right-[160px] top-[160px] w-[90px] h-[90px]' src={dots} alt='dots' />
                <Image className='absolute bottom-0 w-[100px] h-[100px]' src={outline} alt='outline' />
            </div>
            <div className='flex flex-row flex-wrap justify-center gap-6 mt-[34px]'>
                { skills.map((item, idx)=>(
                    <div key={idx} className='flex flex-col gap-2 pb-2 xl:h-fit border-[1px] border-gray text-gray'>
                        <div className='text-center px-3 py-2 border-b-[1px] border-gray'>
                            <h2 className='text-2xl text-white'>{item.title}</h2>
                        </div>
                        { item.content.map((item, idx)=>(
                            <div key={idx} className='px-3 flex flex-col gap-4'>
                                <p className='text-xl text-gray'>{item.name}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skills