import Image from "next/image";
import Featured from "@/app/components/Featured";
import CategoryList from "@/app/components/CategoryList";
import CardList from "@/app/components/CardList";
import Menu from "@/app/components/Menu";


export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
