import CardList from '@/app/components/CardList';
import Menu from '@/app/components/Menu';

function BlogPage() {
  return (
    <div>
        <h1 className="text-4xl font-bold text-center py-3 my-5 bg-secondary bg-opacity-80">Code</h1>
        <div className='flex'>
            <CardList />
            <Menu />
        </div>
    </div>
  )
}

export default BlogPage;