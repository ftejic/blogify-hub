import Link from "next/link";

function MenuCategories() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 text-center">
        <Link href="/blog?cat=code" className='bg-primary bg-opacity-50 py-2 px-4'>Code</Link>
        <Link href="/blog?cat=code" className='bg-primary bg-opacity-50 py-2 px-4'>Tech</Link>
        <Link href="/blog?cat=code" className='bg-primary bg-opacity-50 py-2 px-4'>Security</Link>
        <Link href="/blog?cat=code" className='bg-primary bg-opacity-50 py-2 px-4'>Gadgets</Link>
        <Link href="/blog?cat=code" className='bg-primary bg-opacity-50 py-2 px-4'>Insights</Link>
        <Link href="/blog?cat=code" className='bg-primary bg-opacity-50 py-2 px-4'>Innovation</Link>
    </div>
  )
}

export default MenuCategories;