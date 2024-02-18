import Featured from "@/app/components/Featured";
import CategoryList from "@/app/components/CategoryList";
import CardList from "@/app/components/CardList";
import Menu from "@/app/components/Menu";


export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="flex">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
