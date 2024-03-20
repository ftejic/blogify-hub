import Link from 'next/link';

interface Category {
    id: string;
    slug: string;
    title: string
}
  
const getData = async () => {
const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/categories`);

if (!res.ok) {
    throw new Error("Failed!");
}

return res.json();

}

async function Categories() {

    const data: { categories: Category[] } = await getData();

    //console.log(data.categories)

    return (
        <>
            {data?.categories.map((item: any) => (
                <Link key={item.id} href={`/blog?cat=${item.slug}`} className='bg-grayBlue py-2 px-4'>{item.title}</Link>
            ))}
        </>    
    )
}

export default Categories;