import Categories from "@/app/components/Categories";

function MenuCategories() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 text-center">
        <Categories />
    </div>
  )
}

export default MenuCategories;