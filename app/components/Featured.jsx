import Image from 'next/image';

function Featured() {
  return (
    <div className='pt-10'>
      <h1 className='text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold'><span className='uppercase'>BlogifyHub:</span> Discover Tech Treashures</h1>
      <div className="flex flex-col lg:flex-row mt-10 gap-5 lg:gap-10">
        <div className="relative w-full lg:w-1/2 h-72 md:h-96 -z-10">
          <Image src="/images/luca-bravo-XJXWbfSo2f0-unsplash.jpg" alt='' fill priority={true} className='object-cover relative'/>
        </div>
        <div className="lg:w-1/2 flex items-center">
          <div>
            <h1 className='text-2xl md:text-4xl font-bold mb-3 lg:mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
            <p className='line-clamp-5'>Nullam vitae risus fringilla lacus ultrices pulvinar. Ut ac dictum purus, lobortis vehicula tellus. Ut fermentum quis ipsum sit amet mollis. Quisque a tellus scelerisque, aliquam libero sit amet, placerat ante. Praesent enim lorem, sagittis suscipit quam eu, dignissim blandit neque. Sed turpis odio, dapibus non sagittis quis, viverra sed nunc. Fusce vitae eros rhoncus, consectetur lacus eleifend, auctor ipsum. Mauris vel dignissim urna. Vivamus feugiat nisi in arcu porttitor, quis mollis turpis commodo. Phasellus in augue vel purus sodales malesuada eget in lorem. Sed nunc lectus, maximus vestibulum sapien a, blandit tristique felis. Phasellus ac accumsan purus, vitae efficitur ipsum. Aliquam eget semper metus. Aliquam dapibus suscipit metus et interdum.</p>
            <button className='bg-primary bg-opacity-0 border border-text hover:bg-opacity-50 py-2 px-4 mt-5'>Read More</button>
          </div>
          
        </div>    
      </div>
    </div>
  )
}

export default Featured;