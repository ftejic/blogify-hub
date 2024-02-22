import Image from "next/image";
import Menu from "@/app/components/Menu";
import Comments from "@/app/components/Comments"


function SinglePostPage() {

  return (
    <div className="pt-10">
        <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12  -z-10">
                        <Image src="/images/luca-bravo-XJXWbfSo2f0-unsplash.jpg" alt='' fill priority={true} className='object-cover relative rounded-full'/>
                    </div>
                    <div className="flex flex-col text-base text-gray">
                        <span className="font-medium">Filip Tejic</span>
                        <span>12.23.1933</span>
                    </div>
                </div>
            </div>
            <div className="relative w-full lg:w-1/2 h-80 -z-10 mt-10 lg:mt-0">
                <Image src="/images/luca-bravo-XJXWbfSo2f0-unsplash.jpg" alt='' fill priority={true} className='object-cover relative'/>
            </div>
        </div>
        <div className="flex mt-10 gap-5">
            <div className="lg:w-4/6">
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum illum blanditiis sapiente autem voluptatibus maxime nemo harum molestias aut voluptate! Perspiciatis ut possimus culpa fugit hic. Excepturi fugit consequatur rerum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quis, iure ea cumque repellendus quisquam id eaque error nobis voluptate, veritatis provident pariatur blanditiis voluptatibus corporis voluptatem earum sapiente! Tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tempora sed ex quia sequi porro, laboriosam omnis asperiores ut temporibus animi enim, voluptatum doloremque dolorum quisquam a quos neque autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam natus ipsam, incidunt tempora est, recusandae non fugiat labore officia a quasi odit magnam voluptatibus sequi cumque dicta nesciunt cupiditate modi.</p>
                </div>
                <div>
                    <Comments />
                </div>
            </div>
            <Menu />
        </div>
    </div>
  )
}

export default SinglePostPage;