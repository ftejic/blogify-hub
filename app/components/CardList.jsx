import Pagination from "@/app/components/Pagination";
import Card from "@/app/components/Card"

function CardList() {
  return (
    <div className='lg:w-4/6'>
      <h1 className="text-2xl font-bold mb-5">Recent Posts</h1>
      <div className="flex flex-col gap-10">
        <Card />
        <Card />
        <Card />
      </div>  
      <Pagination />
    </div>
  )
}

export default CardList;