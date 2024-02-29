import CardList from "@/app/components/CardList";
import Menu from "@/app/components/Menu";

interface SearchParams {
  page?: string;
}

function MyPostsPage({searchParams} : {searchParams : SearchParams}) {

  const page = searchParams?.page ? parseInt(searchParams.page) : 1;

  return (
    <div> 
      <h1 className="text-4xl font-bold text-center py-3 my-5 bg-darkBlue">My Posts</h1>
      <div className="flex">
          <div className="w-full lg:w-4/6">
            <CardList 
              page={page}
              myPosts={"true"}
            />
          </div>
          <Menu />
      </div>
    </div>
  )
}

export default MyPostsPage;