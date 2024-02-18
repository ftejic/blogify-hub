import Link from 'next/link';

function CategoryList() {
  return (
    <div className='CategoryList py-10'>
      <h1 className='text-2xl font-bold mb-5'>Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5 text-center">
          <Link href="/blog?cat=code" className='bg-primary bg-opacity-50 py-2 px-4'>Code</Link>
          <Link href="/blog?cat=code" className='bg-primary bg-opacity-50 py-2 px-4'>Tech</Link>
          <Link href="/blog?cat=code" className='bg-primary bg-opacity-50 py-2 px-4'>Security</Link>
          <Link href="/blog?cat=code" className='bg-primary bg-opacity-50 py-2 px-4'>Gadgets</Link>
          <Link href="/blog?cat=code" className='bg-primary bg-opacity-50 py-2 px-4'>Insights</Link>
          <Link href="/blog?cat=code" className='bg-primary bg-opacity-50 py-2 px-4'>Innovation</Link>
      </div>
    </div>
  )
}

export default CategoryList;