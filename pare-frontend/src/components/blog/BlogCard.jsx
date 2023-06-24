import { Img } from '../custom'

const BlogCard = ({ title, image, isRed, issuedBy, month }) => {
  return (
    <div className="relative z-0 overflow-hidden rounded">
      <Img src={image} alt={'blog'} className={'absolute left-0 top-0 -z-10 h-full w-full object-cover'} />
      <div
        className={`flex h-[350px] flex-col justify-end px-2 py-5 md:h-[400px] lg:h-[500px] 2xl:h-[600px] ${
          isRed ? 'bg-red-base text-white' : ' bg-white text-red-base'
        } -z-20 duration-300 hover:bg-opacity-0`}
      >
        <div className="font-metropolis text-xl font-bold md:text-2xl lg:text-3xl 2xl:text-4xl">{title}</div>
        <div className="mt-2 font-montserrat font-light 2xl:text-xl">
          <div className={`border-y ${isRed ? 'border-white' : 'border-red-base'}`}>{issuedBy}</div>
          <div className={`border-b ${isRed ? 'border-white' : 'border-red-base'}`}>{month}</div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
