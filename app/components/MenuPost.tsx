import Link from 'next/link'
import React from 'react'

interface Props {
  id: string;
  slug: string;
  createdAt: Date;
  title: string;
  desc: string;
  img: string;
  views: number;
  catSlug: string;
  userName: string;
}

function MenuPost(props: Props) {
  return (
    <Link href={`/posts/${props.slug}`} className='text-base'>
        <span className='text-lightBlue font-medium'>{props.catSlug}</span>
        <h3 className='font-light'>{props.title}</h3>
        <div className='text-sm text-gray'>
            <span>{props.userName}</span>
            <span className='font-light'> - {props.createdAt.toString()}</span>
        </div>
    </Link>
  )
}

export default MenuPost