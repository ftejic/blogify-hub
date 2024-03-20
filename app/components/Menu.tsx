import MenuPost from "@/app/components/MenuPost"
import MenuCategories from "@/app/components/MenuCategories"

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
  user: User;
}

interface User {
  _id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string;
}

interface Data {
  posts: Post[];
}


const getData = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/most-popular`, {
    method: "GET",
  });

  if (!res.ok) {
    console.error(`Failed to fetch data. Status: ${res.status}, Status Text: ${res.statusText}`);
    throw new Error("Failed!");
  }

  return res.json();
}

async function Menu() {

  const data : Data = await getData();

  return (
    <div className="hidden lg:block w-2/6 pl-5 mb-10">
      <h2 className="text-base text-gray">What&apos;s hot</h2>
      <h1 className="text-2xl font-bold mb-5 -mt-1">Most Popular</h1>
      <div className="flex flex-col gap-5">
        {data?.posts?.map((item: any) => (
          <MenuPost 
            key={item.id}
            id={item.id}
            slug={item.slug}
            createdAt={item.createdAt}
            title={item.title}
            desc={item.desc}
            img={item.img}
            views={item.views}
            catSlug={item.catSlug}
            userName={item.user.name}
          />
        ))}
      </div>
      <h2 className="text-base text-gray mt-10">Discover by topic</h2>
      <h1 className="text-2xl font-bold mb-5 -mt-1">Categories</h1>
      <MenuCategories />
    </div>
  )
}

export default Menu;