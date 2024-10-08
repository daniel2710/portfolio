import Image from 'next/image';
import Line from '../public/img/line_pink.svg';
import rectangle from '../public/icons/rectangle.svg';
import { projects } from '@/data/projects';

const Projects = () => {
  return (
    <section id='Projects' className='pt-[34px] relative bg-main px-4 py-4 xl:pl-36 xl:pr-36'>
        <div className='hidden xl:block absolute right-0'>
            <Image src={rectangle} alt='rectangle' />
        </div>
        <div className='hidden xl:block absolute right-0 top-[400px]'>
            <Image id='color-changin' src={rectangle} alt='rectangle' />
        </div>
        <div className='flex gap-2'>
            <h2 className='text-white text-2xl 2xl:text-4xl'><span className='text-pink'>#</span>Proyectos</h2>
            <Image className='w-[50%]' src={Line} alt='Line' />
        </div>  
        <div className='flex flex-col justify-center xl:justify-start gap-6 mt-[34px] sm:flex-row sm:flex-wrap'>
            { projects.map((item, idx)=>(  
                <div key={idx} className='flex flex-col sm:w-[380px] xl:justify-start gap-2 pb-2 border-[1px] border-gray text-gray'>
                    <div className='w-full sm:max-w-[378px] h-[180px] flex justify-center items-center'>
                        <Image
                            className='w-full h-full'
                            priority
                            src={item.image}
                            alt={item.image}
                            height={200}
                            width={200}
                        />
                    </div>
                    <div className='pl-1 border-b-[1px] border-gray'>
                        <p className='text-base'>{item.technologies}</p>
                    </div>
                    <div className='px-2 flex flex-col gap-4 pb-2'>
                        <h2 className='text-2xl text-white'>{item.name}</h2>
                        <p>{item.description}</p>
                        <div className='flex gap-2'>
                            <a
                                className='p-1 text-center border-[1px] border-gray hover:text-white hover:bg-pink transition-all duration-300'
                                href={item.demo} target='_blank'
                            >
                                Ver
                            </a>
                            { item.code && (
                                <a
                                    className='p-1 text-center border-[1px] border-gray hover:text-white hover:bg-pink transition-all duration-300' href={item.code}
                                    target='_blank'
                                >
                                    Código
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Projects