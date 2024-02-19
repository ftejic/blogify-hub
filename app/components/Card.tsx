import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className="flex gap-5 items-center">
      <div className="hidden xl:block relative -z-10 w-1/2 h-80">
        <Image src="/images/luca-bravo-XJXWbfSo2f0-unsplash.jpg" alt='' fill priority={true} className='object-cover relative'/>
      </div>
      <div className="xl:w-1/2">
        <div>
          <span className="text-text text-opacity-50">24.02.2004 - </span>
          <span className="text-primary font-medium">Code</span>
        </div>
        <Link href="/">
          <h1 className="text-2xl font-bold my-3">Praesent ornare mattis tellus, at sagittis eros eleifend molestie</h1>
        </Link>
        <p className="line-clamp-4 mb-3 font-light">Curabitur eros tortor, bibendum pulvinar eros id, aliquet faucibus urna. Nunc eget congue ex. Vestibulum quis maximus nulla. Phasellus ac arcu eu felis molestie ultricies quis eget libero. Donec tincidunt dui scelerisque felis elementum, vitae pretium mauris varius. Sed ante leo, malesuada eleifend libero nec, dapibus varius dolor. Donec efficitur, lectus ac gravida volutpat, lectus augue lobortis lacus, vel porta elit diam vitae lorem. Morbi accumsan purus diam, ut mattis felis efficitur sit amet. Nunc nisi risus, maximus sit amet iaculis porta, pellentesque placerat quam. Curabitur accumsan urna augue, ac molestie lectus ultrices vitae. Nullam vehicula lobortis mi, non pellentesque est tempor vitae. Vestibulum suscipit nunc sed ante convallis scelerisque.</p>
        <Link href="/" className="underline underline-offset-4">Read More</Link>
      </div>
    </div>
  )
}

export default Card;