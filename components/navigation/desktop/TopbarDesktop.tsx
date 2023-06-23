import { navigation } from '@/data/navigation';  

const TopbarDesktop = () => {
    const navigationFc = (section: string = 'home', offsetOp: number = 30) =>{
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
        <nav className='lg:block hidden bg-main z-[100] sticky top-0'>
            <div className='flex justify-between py-4 px-4 xl:pl-36 xl:pr-36 items-center'>
                <div onClick={()=>navigationFc('Home', 30)} className='flex gap-2 items-center cursor-pointer'>
                    <p className='text-base text-white'>Daniel De Avila - </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1200 800">
                        <rect width="1200" height="800" fill="#FCD116"/>
                        <path fill="#003893" d="M0 267.81h1200V532.2H0z"/>
                        <path fill="#CE1126" d="M0 532.2h1200v267.81H0z"/>
                        <path fill="#fcdf03" d="M0 0h1200v267.81H0z"/>
                    </svg>
                </div>
                <div>
                    <ul className='flex gap-5 items-center'>
                        { navigation.map((item, idx: number)=>(
                            <li onClick={()=>navigationFc(item.title, 30)} key={idx} className='text-base 2xl:text-xl text-gray cursor-pointer'><span className='text-pink mr-1'>#</span>{item.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default TopbarDesktop