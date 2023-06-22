import Image from 'next/image';
import Line from '../public/img/line_pink.svg';

const About = () => {
  return (
    <section id='About-me' className='pt-[34px] px-4 bg-main'>
        <div className='flex gap-2'>
            <h2 className='text-white text-2xl'><span className='text-pink'>#</span>About-me</h2>
            <Image className='w-[50%]' src={Line} alt='Line' />
        </div>
        <div className='mt-[34px]'>
            <p className='text-gray text-base'>I live in Barranquilla, Colombia, I am 19 years old and in addition to my technical experience, I consider myself a collaborative person, with a positive attitude and good communication skills. I enjoy working in a team, sharing knowledge and learning from others. I am adaptable, I like to face new challenges and I am constantly learning and improving my skills to keep abreast of the latest trends and technologies in frontend development.</p>
        </div>
    </section>
  )
}

export default About