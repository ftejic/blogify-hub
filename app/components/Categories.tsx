import Link from 'next/link';

interface Category {
    _id: string;
    slug: string;
    title: string
}
  
const getData = async () => {
const res = await fetch(`${process.env.BASEURL}/api/categories`);

if (!res.ok) {
    throw new Error("Failed!");
}

return res.json();

}

async function Categories() {

    const data: { categories: Category[] } = await getData();

    return (
        <>
            {data?.categories.map((item: any) => (
                <Link key={item._id} href={`/blog?cat=${item.slug}`} className='bg-grayBlue py-2 px-4'>{item.title}</Link>
            ))}
        </>    
    )
}

export default Categories;