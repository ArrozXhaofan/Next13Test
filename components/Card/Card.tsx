import { dtfBlur } from "@/app/models"
import Image from "next/image"

export interface CardData{
  
  name:string,
  type?:string,
  created:string,
  image?:string
}

interface Props{
    data:CardData
}


function Card({data}:Props) {

  let newType = data.type
  newType ||= "No type"

  return (
    <div className="border border-green-600 flex flex-col p-2 text-sm
    justify-center items-center gap-4 hover:rounded-xl
    hover:bg-green-600 hover:scale-90 duration-700 transition-all ease-in-out">
        
        <p> {data.name} </p>
        <p> {newType} </p>
        <p> {data.created} </p>
        {
          !!data.image && (
            
           <Image placeholder="blur" blurDataURL={dtfBlur} className="rounded-xl" src={data.image} alt="Image" width={100} height={100} />
          )
        }
        

    </div>
  )
}

export default Card