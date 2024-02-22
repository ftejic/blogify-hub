import Image from "next/image";

function Comment() {
  return (
    <div>
        <div className="flex items-center gap-3 mb-3">
            <div className="relative w-8 h-8 -z-10">
                <Image src="/images/luca-bravo-XJXWbfSo2f0-unsplash.jpg" alt='' fill priority={true} className='object-cover relative rounded-full'/>
            </div>
            <div className="flex flex-col text-xs text-gray">
                <span className="font-medium">Filip Tejic</span>
                <span>12.23.1933</span>
            </div>
        </div>
        <p className="text-base font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste vitae incidunt quia maxime labore qui. Obcaecati, pariatur modi officiis soluta iusto dolor veritatis autem, quasi hic totam id doloremque cumque!</p>
    </div>
  )
}

export default Comment; 