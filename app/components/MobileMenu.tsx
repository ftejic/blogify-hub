'use client'
import { useState } from 'react';
import Link from 'next/link';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AuthLinks from '@/app/components/AuthLinks';

function MobileMenu() {

    const [open, setOpen] = useState(false)


    return (
        <div className='block md:hidden'>
            <FontAwesomeIcon
                icon={open ? faX : faBars}
                color="#EDF1F6"
                width="20px"
                onClick={() => {
                    let opened; 
                    setOpen(prevOpen => {opened = prevOpen; return !prevOpen});
                    
                    document.body.style.overflow = !opened ? "hidden" : "";
                }}
                className="relative z-50"
            />
            {open && (
                <div className="flex flex-col gap-3 absolute top-[68px] mr-auto px-5 py-5 left-0 w-full min-h-screen text-center bg-black text-white">
                    <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                    <AuthLinks setOpen={setOpen}/>
                </div>
            )}
            

        </div>
    )
}

export default MobileMenu;