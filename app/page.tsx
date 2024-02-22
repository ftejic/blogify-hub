import Featured from "@/app/components/Featured";
import CategoryList from "@/app/components/CategoryList";
import CardList from "@/app/components/CardList";
import Menu from "@/app/components/Menu";
 
interface SearchParams {
  page?: string;
}


export default function Home({searchParams} : {searchParams : SearchParams}) {

  const page = searchParams?.page ? parseInt(searchParams.page) : 1;

  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="flex">
        <CardList 
          page = {page}
        />
        <Menu />
      </div>
    </div>
  );
}
