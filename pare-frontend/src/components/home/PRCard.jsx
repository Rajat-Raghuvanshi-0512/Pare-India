import { Button, Img } from '../custom'

const PRCard = ({ id, heading, desc, img }) => {
  return (
    <div className="mx-3 my-10 grid grid-cols-2 gap-3 md:mx-10 lg:mx-16 2xl:mx-40">
      <div className={`ml-3 ${id === '02' ? 'order-3' : ''} `}>
        <div className="flex items-start gap-1 font-metropolis md:gap-2">
          <span className="text-xs font-bold md:text-sm">{id}</span>
          <h3 className=" text-3xl font-bold uppercase md:text-4xl lg:text-6xl">{heading}</h3>
        </div>
        <p className="my-3 font-montserrat text-[10px] leading-3 md:text-sm lg:text-xl">{desc}</p>
        <Button type="outlined" className="md:my-5">
          view products
        </Button>
      </div>
      <div className={`flex items-end ${id === '02' ? 'justify-start' : 'justify-end'}`}>
        <Img
          src={img}
          alt={`product-${id}`}
          width={200}
          height={300}
          className={' object-contain md:h-[300px] md:w-[400px] lg:h-[400px] lg:w-[500px]'}
        />
      </div>
    </div>
  )
}

export default PRCard
