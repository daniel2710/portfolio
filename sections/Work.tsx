import Image from 'next/image';
import Line from '../public/img/line_pink.svg';
import { works } from '@/data/work';

const Work = () => {
  return (
    <section id='Work-experience' className='pt-[34px] px-4 bg-main'>
        <div className='flex gap-2'>
            <h2 className='text-white text-2xl'><span className='text-pink'>#</span>Work experience</h2>
            <Image className='w-[30%]' src={Line} alt='Line' />
        </div>
        <div className='mt-[34px] flex flex-col'>
            { works.map((item, idx)=>(
                <div key={idx} className='flex gap-2'>
                    <div className='relative'>
                        <div className='w-[50px] h-[50px] rounded-full border-2 border-pink'>
                            <Image className='w-full h-full rounded-full p-1' width={50} height={50} src={item.logo} alt='icon' />
                        </div>
                        <div className='absolute h-[calc(100%-50px)] left-[50%] border-l-2 border-pink'></div>
                    </div>
                    <div>
                        <h3 className='text-white text-xl'>{item.position}</h3>
                        <h4 className='text-pink text-base'>{item.name}</h4>
                        <p className='text-gray text-sm mb-7'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Work