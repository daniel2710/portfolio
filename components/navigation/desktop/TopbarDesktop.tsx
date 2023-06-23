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
                <div>
                    <p className='text-base text-white'>Daniel De Avila</p>
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