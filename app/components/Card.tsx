import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  slug: string;
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
    <div className="flex gap-5 items-center" key={props.id}>
      {
        props.img && <div className="hidden xl:block relative -z-10 w-1/2 h-80">
          <Image src={props.img} alt='' fill priority={true} className='object-cover relative'/>
        </div>
      }
      
      <div className="xl:w-1/2">
        <div>
          <span className="text-gray">{props.createdAt.toString().slice(0, 10)} - </span>
          <span className="text-lightBlue font-medium">{props.catSlug}</span>
        </div>
        <Link href={`/posts/${props.slug}`}>
          <h1 className="text-2xl font-bold my-3">{props.title}</h1>
        </Link>
        <div className="line-clamp-4 mb-3 font-light" dangerouslySetInnerHTML={{__html: props.desc}} />
        <Link href={`/posts/${props.slug}`} className="underline underline-offset-4">Read More</Link>
      </div>
    </div>
  )
}

export default Card;