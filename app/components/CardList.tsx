import Pagination from "@/app/components/Pagination";
import Card from "@/app/components/Card";
import { headers } from "next/headers";

interface Props {
  page: number;
  cat?: string;
  myPosts?: string;
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

const getData = async (page: number, cat: string | undefined, myPosts: string | undefined) => {
  
  const url = myPosts ? 
              `${process.env.BASEURL}/api/my-posts?page=${page}` :
              `${process.env.BASEURL}/api/posts?cat=${cat || ""}&page=${page}`;

  const cookie = headers().get('cookie')

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Cookie": cookie || "",
    },
    cache: "no-cache",
  });

  if (!res.ok) {
    console.error(`Failed to fetch data. Status: ${res.status}, Status Text: ${res.statusText}`);
    throw new Error("Failed!");
  }

  return res.json();
}

async function CardList(props : Props) {

  const data : Data = await getData(props.page, props.cat, props.myPosts);

  const POST_PER_PAGE = 3;

  const hasPrev = POST_PER_PAGE * (props.page - 1) > 0;
  const hasNext = POST_PER_PAGE * (props.page - 1) + POST_PER_PAGE < data.count;

  return (
    <div>
      <div className="flex flex-col gap-10">
        {data?.posts.map((item: any) => (
          <Card 
            key={item._id}
            slug={item.slug}
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