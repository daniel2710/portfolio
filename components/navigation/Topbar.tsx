import { useState } from 'react';
import { RiMenu4Line } from 'react-icons/ri';
import { AiFillGithub, AiFillLinkedin, AiOutlineClose, AiOutlineWhatsApp } from 'react-icons/ai';
import { navigation } from '@/data/navigation';  

const Topbar = () => {
    const [ showNav, setShowNav ] = useState(false)

    const navigationFc = (section: string = 'home', offsetOp: number = 30) =>{
        setShowNav(false)
        const element = document.getElementById(section);
        if (element) {
            const offset = -offsetOp;
            const rect = element.getBoundingClientRect();
            const scrollPosition = rect.top + window.pageYOffset + offset;
        
            window.scrollTo({
              top: scrollPosition,
              behavior: 'smooth',
            });
        }
    }

    return (
        <nav className='lg:hidden bg-main z-[100] sticky top-0'>
            <div className='flex justify-between p-4'>
                <div
                    onClick={()=>navigationFc('Home', 30)}
                    className='flex gap-2 items-center'
                >
                    <p className='text-base text-white'>Daniel De Avila - </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1200 800">
                        <rect width="1200" height="800" fill="#FCD116"/>
                        <path fill="#003893" d="M0 267.81h1200V532.2H0z"/>
                        <path fill="#CE1126" d="M0 532.2h1200v267.81H0z"/>
                        <path fill="#fcdf03" d="M0 0h1200v267.81H0z"/>
                    </svg>
                </div>
                <div>
                    { showNav ? (
                        <AiOutlineClose onClick={()=>setShowNav(false)} className='h-6 w-6 text-white' />
                    ) : (
                        <RiMenu4Line onClick={()=>setShowNav(true)} className='h-6 w-6 text-white' />
                        )
                    }
                </div>
            </div>
            
            { showNav && (
                <div className='absolute w-full flex justify-between flex-col h-[calc(100vh-56px)] bg-main pt-[47px] pl-4 pb-16'>
                    <ul className='flex items-start gap-8 flex-col'>
                        { navigation.map((item, idx: number) => (
                            <li
                                onClick={()=>navigationFc(item.navigation, 30)}
                                key={idx}
                                className='text-[32px] text-gray'
                            >
                                <span className='text-pink mr-1'>#</span>{item.title}
                            </li>
                        ))}
                    </ul>
                    <div className='flex gap-5 justify-center items-center text-gray'>
                        <a
                            href='https://github.com/daniel2710'
                            target='_blank'
                        >
                            <AiFillGithub className='h-10 w-10' />
                        </a>
                        <a
                            href='https://api.whatsapp.com/send?phone=+573244933254&text=Hello'
                            target='_blank'
                        >
                            <AiOutlineWhatsApp className='h-10 w-10' />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/daniel-de-avila'
                            target='_blank'
                        >
                            <AiFillLinkedin className='w-10 h-10' />
                        </a>
                    </div>
                </div>
            )}

        </nav>
    )
}

export default Topbar