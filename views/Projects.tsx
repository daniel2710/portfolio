import Image from 'next/image';
import Line from '../public/img/line_pink.svg';
import { projects } from '@/data/projects';

const Projects = () => {
  return (
    <section className='pt-[34px] px-4 bg-main'>
        <div className='flex gap-2'>
            <h2 className='text-white text-2xl'><span className='text-pink'>#</span>Projects</h2>
            <Image className='w-[50%]' src={Line} alt='Line' />
        </div>
        <div className='flex flex-col gap-6 mt-[34px]'>
            { projects.map((item, idx)=>(  
                <div key={idx} className='flex flex-col gap-2 pb-2 border-[1px] border-gray text-gray'>
                    <div>
                        <Image className='w-full h-48' priority src={item.image} alt='crud' height={192} width={192} />
                    </div>
                    <div className='pl-1 border-b-[1px] border-gray'>
                        <p className='text-base'>{item.technologies}</p>
                    </div>
                    <div className='pl-3 flex flex-col gap-4 pb-2'>
                        <h2 className='text-2xl text-white'>{item.name}</h2>
                        <p>{item.description}</p>
                        <div className='flex gap-2'>
                            <a className='p-1 text-center border-[1px] border-gray' href={item.demo}>Demo</a>
                            <a className='p-1 text-center border-[1px] border-gray' href={item.code}>Code</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Projects