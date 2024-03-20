import Image from "next/image";
import Menu from "@/app/components/Menu";
import Comments from "@/app/components/Comments"

interface Params {
    slug: string;
}

interface User {
    _id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    image: string;
}

interface Data {
    _id: string;
    createdAt: Date;
    slug: string;
    title: string;
    desc: string;
    img: string;
    views: number;
    catSlug: string;
    userEmail: string;
    user: User;
  }

const getData = async (slug: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/posts/${slug}`, {
        method: "GET",
        cache: "no-cache"
    });
  
    if (!res.ok) {
      throw new Error("Failed!");
    }

    return res.json();
  
}  

async function SinglePostPage({ params } : {params: Params}) {

    const { slug } = params;

    const data : Data = await getData(slug);

  return (
    <div className="pt-10">
        <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-10">{data?.title}</h1>
                <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 -z-10">
                        <Image src={data?.user.image} alt='' fill priority={true} className='object-cover relative rounded-full'/>
                    </div>
                    <div className="flex flex-col text-base text-gray">
                        <span className="font-medium">{data?.user.name}</span>
                        <span>{data?.createdAt.toString().slice(0, 10)}</span>
                    </div>
                </div>
                <p className="text-base text-gray mt-5">Views: {data?.views}</p>
            </div>
            {
                data?.img && <div className="relative w-full lg:w-1/2 h-80 -z-10 mt-10 lg:mt-0">
                    <Image src={data?.img} alt='' fill priority={true} className='object-cover relative'/>
                </div>
            }    
        </div>
        <div className="flex mt-10 gap-5">
            <div className="lg:w-4/6">
                <div dangerouslySetInnerHTML={{__html: data?.desc}} />
                <div>
                    <Comments 
                        postSlug={slug}
                    />
                </div>
            </div>
            <Menu />
        </div>
    </div>
  )
}

export default SinglePostPage;