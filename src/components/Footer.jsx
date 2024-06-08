import { useEffect, useState } from 'react';


export const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 900) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        }
    }, []);

    return (
        <div className='fondo fixed bottom-0 w-full'>
            <div className='flex justify-center items-center mt-2 cursor-pointer text-sm'>
                {isVisible && (
                    <div
                        onClick={() => scrollToTop()}
                    >
                        <p className='text-2xl hover:text-yellow-700 text-red-500'>
                            Go to Home</p>
                    </div>
                )}
            </div>
            <footer className='flex justify-between items-center botton-0 py-3 px-8 text-sm font-light'>
                <p className='bg-slate-600 text-lg text-white font-medium rounded-xl '>Apni Dukaan</p>
               
            </footer>
        </div>
    )
};