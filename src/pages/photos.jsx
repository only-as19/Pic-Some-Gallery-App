import { useContext } from "react"
import getClass from "../utilis/getClass"
import Image from "../components/Image"
import { Context  } from "../context/context"
const Photos = () => {
    const {allPhotos} = useContext(Context)
    const imageElement = allPhotos.map((img,i)=>
    <Image key={img.id} img={img} getClass={()=>getClass(i)}/>
    )
  return (
    <div>
      {imageElement}
    </div>
  )
}

export default Photos
