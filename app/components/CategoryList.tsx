import Categories from "@/app/components/Categories";

async function CategoryList() {

  return (
    <div className='CategoryList py-10'>
      <h1 className='text-2xl font-bold mb-5'>Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5 text-center">
        <Categories />
      </div>
    </div>
  )
}

export default CategoryList;