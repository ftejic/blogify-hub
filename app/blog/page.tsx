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
          <div className='w-full lg:w-4/6'>
            <h1 className="text-2xl font-bold mb-5">Recent Posts</h1>
            <CardList 
              page={page}
              cat={cat}
            />
          </div>
          
          <Menu />
        </div>
    </div>
  )
}

export default BlogPage;