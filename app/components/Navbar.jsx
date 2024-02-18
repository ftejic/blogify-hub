import Link from 'next/link';
import AuthLinks from "@/app/components/AuthLinks";
import MobileMenu from "@/app/components/MobileMenu";

function Navbar() {
  return (
    <div className='Navbar fixed w-full left-0 top-0 bg-bg border-b border-text border-opacity-20'>
      <div className='container mx-auto px-5 sm:px-8 md:px-10 flex justify-between py-5'>
        <div className="logo uppercase font-bold text-xl md:text-3xl">BlogifyHub</div>
        <div className="links">
          <div className='hidden md:flex items-center gap-5 text-xl'>
            <Link href="/">Home</Link>
            <Link href="/">Contact</Link>
            <Link href="/">About</Link>
            <AuthLinks />
          </div>
          <MobileMenu />
        </div>
      </div>
      
    </div>
  )
}

export default Navbar;