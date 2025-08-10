
const Image = ({img,imageClass}) => {
  return (
    <div className={`relative ${imageClass} rounded-lg ` }>
        <img src={img.url}
        className='block w-full h-full object-cover '
        loading="lazy"  />
    </div>
  )
}

export default Image
