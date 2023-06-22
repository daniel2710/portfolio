import Image from 'next/image';
import Line from '../public/img/line_pink.svg';
import { skills } from '@/data/skills';

const Skills = () => {
  return (
    <section className='pt-[34px] px-4 bg-main'>
        <div className='flex gap-2'>
            <h2 className='text-white text-2xl'><span className='text-pink'>#</span>Skills</h2>
            <Image className='w-[50%]' src={Line} alt='Line' />
        </div>
        <div className='flex flex-col gap-6 mt-[34px]'>
            { skills.map((item, idx)=>(
                <div key={idx} className='flex flex-col gap-2 pb-2 border-[1px] border-gray text-gray'>
                    <div className='pl-3 py-2 border-b-[1px] border-gray'>
                        <h2 className='text-2xl text-white'>{item.title}</h2>
                    </div>
                    { item.content.map((item, idx)=>(
                        <div key={idx} className='pl-3 flex flex-col gap-4'>
                            <p className='text-xl text-gray'>{item.name}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </section>
  )
}

export default Skills