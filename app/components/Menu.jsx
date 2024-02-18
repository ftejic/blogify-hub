import MenuPost from "@/app/components/MenuPost"
import MenuCategories from "@/app/components/MenuCategories"


function Menu() {
  return (
    <div className="hidden lg:block w-2/6 pl-5">
      <h2 className="text-base text-text text-opacity-50">What's hot</h2>
      <h1 className="text-2xl font-bold mb-5 -mt-1">Most Popular</h1>
      <div className="flex flex-col gap-5">
        <MenuPost />
        <MenuPost />
        <MenuPost />
      </div>
      <h2 className="text-base text-text text-opacity-50 mt-10">Discover by topic</h2>
      <h1 className="text-2xl font-bold mb-5 -mt-1">Categories</h1>
      <MenuCategories />
    </div>
  )
}

export default Menu;