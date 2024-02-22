import CardList from '@/app/components/CardList';
import Menu from '@/app/components/Menu';

interface SearchParams {
  page?: string;
  cat: string;
}

function BlogPage({searchParams} : {searchParams : SearchParams}) {

  const page = searchParams?.page ? parseInt(searchParams.page) : 1;
  const cat = searchParams.cat || "";

  return (
    <div>
        <h1 className="text-4xl font-bold text-center py-3 my-5 bg-darkBlue">{cat}</h1>
        <div className='flex'>
            <CardList 
              page={page}
              cat={cat}
            />
            <Menu />
        </div>
    </div>
  )
}

export default BlogPage;