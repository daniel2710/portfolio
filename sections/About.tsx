import Image from 'next/image';
import Line from '../public/img/line_pink.svg';

const About = () => {
  return (
    <section id='About-me' className='pt-[34px] bg-main px-4 py-4 xl:pl-36 xl:pr-36'>
        <div className='flex gap-2'>
            <h2 className='text-white text-2xl xl:text-4xl'><span className='text-pink'>#</span>Conóceme</h2>
            <Image className='w-[50%]' src={Line} alt='Line' />
        </div>
        <div className='mt-[34px]'>
            <p className='text-gray text-base'>Vivo en Colombia, tengo 20 años y además de mi experiencia técnica, me considero una persona colaboradora, con actitud positiva y buena capacidad de comunicación. Disfruto trabajar en equipo, compartir conocimientos y aprender de los demás. Soy adaptable, me gusta afrontar nuevos retos y estoy constantemente aprendiendo y mejorando mis habilidades para mantenerme al tanto de las últimas tendencias y tecnologías en desarrollo web. Me encanta jugar al futbol, ver pelis, escuchar música y el deporte en general.</p>
        </div>
    </section>
  )
}

export default About