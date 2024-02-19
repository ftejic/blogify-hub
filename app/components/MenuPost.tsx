import Link from 'next/link'
import React from 'react'

function MenuPost() {
  return (
    <Link href="/" className='text-base'>
        <span className='text-primary font-medium'>Code</span>
        <h3 className='font-light'>Praesent ornare mattis tellus, at sagittis eros eleifend molestie</h3>
        <div className='text-sm text-text text-opacity-50'>
            <span>Filip</span>
            <span className='font-light'> - 24.02.2084</span>
        </div>
    </Link>
  )
}

export default MenuPost