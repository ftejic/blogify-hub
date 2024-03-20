import Pagination from "@/app/components/Pagination";
import Card from "@/app/components/Card";
import { headers } from "next/headers";
import DeleteBtt from "@/app/components/DeleteBtt";

import { Fragment } from "react";

interface Props {
  page: number;
  cat?: string;
  myPosts?: string;
  postPerPage?: number;
}

interface Post {
  id: string;
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

const getData = async (page: number, cat: string | undefined, myPosts: string | undefined, postPerPage: number | undefined) => {

  const url = myPosts ? 
              `${process.env.NEXT_PUBLIC_BASEURL}/api/my-posts?page=${page}` :
              `${process.env.NEXT_PUBLIC_BASEURL}/api/posts?cat=${cat || ""}&page=${page}&postPerPage=${postPerPage || ""}`;

  const cookie = headers().get('cookie')

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Cookie": cookie || "",
    },
    cache: "no-store"
  });

  if (!res.ok) {
    console.error(`Failed to fetch data. Status: ${res.status}, Status Text: ${res.statusText}`);
    throw new Error("Failed!");
  }

  return res.json();
}



async function CardList(props : Props) {

  const data : Data = await getData(props.page, props.cat, props.myPosts, props.postPerPage);

  const postPerPage = props.postPerPage || 5

  const hasPrev = postPerPage * (props.page - 1) > 0;
  const hasNext = postPerPage * (props.page - 1) + postPerPage < data.count;

  return (
    <div>
      <div className="flex flex-col gap-10">
        {data?.posts.map((item: any) => (
          <Fragment key={item.id}>
            <div className="relative">
              {props.myPosts === "true" ? 
                <DeleteBtt 
                  id={item.id}
                /> : <></>
              }           
              <Card             
                id={item.id}
                slug={item.slug}
                createdAt={item.createdAt}
                title={item.title}
                desc={item.desc}
                img={item.img}
                views={item.views}
                catSlug={item.catSlug}
                userEmail={item.userEmail}
              />
            </div>
            
          </Fragment>
          
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