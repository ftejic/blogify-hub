import Pagination from "@/app/components/Pagination";
import Card from "@/app/components/Card"

interface Props {
  page: number;
  cat?: string;
}

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
  posts: Post[];
  count: number;
}

const getData = async (page: number, cat: string | undefined) => {
  const res = await fetch(`${process.env.BASEURL}/api/posts?cat=${cat || ""}&page=${page}`, {
    cache: "no-cache"
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();

}

async function CardList(props : Props) {

  const data : Data = await getData(props.page, props.cat);

  const POST_PER_PAGE = 3;

  const hasPrev = POST_PER_PAGE * (props.page - 1) > 0;
  const hasNext = POST_PER_PAGE * (props.page - 1) + POST_PER_PAGE < data.count;

  return (
    <div className='lg:w-4/6'>
      <h1 className="text-2xl font-bold mb-5">Recent Posts</h1>
      <div className="flex flex-col gap-10">
        {data?.posts.map((item: any) => (
          <Card 
            key={item._id}
            createdAt={item.createdAt}
            title={item.title}
            desc={item.desc}
            img={item.img}
            views={item.views}
            catSlug={item.catSlug}
            userEmail={item.userEmail}
          />
        ))}
      </div>  
      <Pagination
        page={props.page}
        hasPrev={hasPrev}
        hasNext={hasNext}
        cat={props.cat}
      />
    </div>
  )
}

export default CardList;