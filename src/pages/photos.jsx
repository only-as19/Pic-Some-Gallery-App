import { useContext } from "react"
import getClass from "../utilis/getClass"
import Image from "../components/Image"
import { Context  } from "../context/context"
const Photos = () => {
    const {allPhotos} = useContext(Context)
    const imageElement = allPhotos.map((img,i)=>
    <Image key={img.id} img={img} imageClass={getClass(i)}/>
    )
  return (
    <div className='p-2 grid gap-1 auto-rows-[100px] grid-cols-[repeat(auto-fit,minmax(100px,1fr))] lg:auto-rows-[200px] lg:grid-cols-4 lg:p-4'>
      {imageElement}
    </div>
  )
}

export default Photos
