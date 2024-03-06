import Image from 'next/image';
import Link from "next/link";

interface Post {
  _id: string;
  createdAt: Date;
  slug: string;
  title: string;
  desc: string;
  img: string;
  views: number;
  catSlug: string;
  userEmail: string;
}

interface Data {
  post: Post;
}

const getData = async () => {

  const res = await fetch(`${process.env.BASEURL}/api/featured`, {
    method: "GET",
    cache: "no-cache"
  });

  if (!res.ok) {
    console.error(`Failed to fetch data. Status: ${res.status}, Status Text: ${res.statusText}`);
    throw new Error("Failed!");
  }

  return res.json();
}


async function Featured() {

  const data : Data = await getData();

  return (
    <div className='pt-10'>
      <h1 className='text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold'><span className='uppercase'>BlogifyHub:</span> Discover Tech Treashures</h1>
      <div className="flex flex-col lg:flex-row mt-10 gap-5 lg:gap-10">
        {/* {
        data?.post?.img && <div className="relative w-full lg:w-1/2 h-72 md:h-96 -z-10">
            <Image src={data?.post?.img} alt='' fill priority={true} className='object-cover relative'/>
          </div>
        } */}
        
        <div className={`lg:${data?.post?.img ? 'w-full' : 'w-1/2'} flex items-center`}>
          <div>
            <h1 className='text-2xl md:text-4xl font-bold mb-3 lg:mb-5'>{data?.post?.title}</h1>
            <div className='line-clamp-5 mb-5' dangerouslySetInnerHTML={{__html: data?.post?.desc}}/>
            <Link href={`posts/${data?.post?.slug}`} className='bg-grayBlue bg-opacity-0 border border-text hover:bg-opacity-100 py-2 px-4'>Read More</Link>
          </div>
          
        </div>    
      </div>
    </div>
  )
}

export default Featured;