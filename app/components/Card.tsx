import Image from "next/image";
import Link from "next/link";

interface Props {
  createdAt: Date;
  title: string;
  desc: string;
  img: string;
  views: number;
  catSlug: string;
  userEmail: string;
}

const Card = (props : Props) => {
  return (
    <div className="flex gap-5 items-center">
      <div className="hidden xl:block relative -z-10 w-1/2 h-80">
        <Image src="/images/luca-bravo-XJXWbfSo2f0-unsplash.jpg" alt='' fill priority={true} className='object-cover relative'/>
      </div>
      <div className="xl:w-1/2">
        <div>
          <span className="text-gray">{props.createdAt.toString().slice(0, 10)} - </span>
          <span className="text-lightBlue font-medium">{props.catSlug}</span>
        </div>
        <Link href="/">
          <h1 className="text-2xl font-bold my-3">{props.title}</h1>
        </Link>
        <p className="line-clamp-4 mb-3 font-light">{props.desc}</p>
        <Link href="/" className="underline underline-offset-4">Read More</Link>
      </div>
    </div>
  )
}

export default Card;