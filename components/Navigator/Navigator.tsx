import { Route } from "@/models"
import Link from "next/link"

interface Props{
    pathNames: Route[]
}

function Navigator({pathNames}:Props) {
  return (
    <div>
        {
            pathNames.map(pathName => (
                <Link key={pathName.name} href={pathName.path}>{pathName.name}</Link>
            ))
        }
    </div>
  )
}

export default Navigator