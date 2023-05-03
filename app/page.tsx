import Image from "next/image"
import dtf from '../public/images/dtf.jpg'
import { dtfBlur } from "./models"


function Home() {
  return (
    <div className="">

        <h1>Home</h1>

        <Image priority  src={dtf} alt="Image" blurDataURL={dtfBlur} placeholder="blur"  />



    </div>
  )
}

export default Home