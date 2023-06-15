import React, { useState } from 'react';
import { RiMenu4Line } from 'react-icons/ri';
import { AiFillGithub, AiFillTwitterCircle, AiOutlineClose, AiOutlineWhatsApp } from 'react-icons/ai';
import { navigation } from '@/data/navigation';

const Topbar = () => {
    const [ showNav, setShowNav ] = useState(false)

    return (
        <nav className='bg-main relative'>
            <div className='flex justify-between p-4'>
                <div>
                    <p className='text-base text-white'>Daniel De Ávila</p>
                </div>
                <div>
                    { showNav ? <AiOutlineClose onClick={()=>setShowNav(false)} className='h-6 w-6 text-white' /> :
                        <RiMenu4Line onClick={()=>setShowNav(true)} className='h-6 w-6 text-white' />
                    }
                </div>
            </div>
            
            { showNav && <div className='absolute w-full flex justify-between flex-col h-[calc(100vh-56px)] bg-main pt-[47px] pl-4 pb-16'>
                <ul className='flex items-start gap-8 flex-col'>
                    { navigation.map((item, idx: number)=>(
                        <li key={idx} className='text-[32px] text-gray'><span className='text-pink mr-1'>#</span>{item.title}</li>
                    ))}
                </ul>
                <div className='flex gap-5 justify-center items-center text-gray'>
                    <AiFillGithub className='h-10 w-10' />
                    <AiOutlineWhatsApp className='h-10 w-10' />
                    <AiFillTwitterCircle className='h-10 w-10' />
                </div>
            </div>}

        </nav>
    )
}

export default Topbar