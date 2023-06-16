import { Button, Img } from '../custom'

const PRCard = ({ id, heading, desc, img }) => {
  return (
    <div
      className={`lg:gap:20 my-10 grid grid-cols-2 gap-3 md:gap-10 lg:gap-20 ${
        id === '02' ? 'mr-3 text-right md:mr-10 lg:mr-16 2xl:mr-40' : 'md:ml-10 lg:ml-16 2xl:ml-40'
      }`}
    >
      <div className={`ml-3 ${id === '02' ? 'order-3' : ''} `}>
        <div className={`flex items-start gap-1 font-metropolis md:gap-2 ${id === '02' ? 'justify-end' : ''}`}>
          <span className="text-xs font-bold md:text-sm">{id}</span>
          <h3 className={`  text-4xl font-bold uppercase lg:text-6xl`}>{heading}</h3>
        </div>
        <p className="my-3 font-montserrat text-[10px] leading-3 md:text-sm lg:text-2xl">{desc}</p>
        <Button variant="outlined" className="md:my-5">
          view products
        </Button>
      </div>
      <div className={`flex items-end ${id === '02' ? 'justify-start' : 'justify-end'}`}>
        <Img
          src={img}
          alt={`product-${id}`}
          width={300}
          height={300}
          className={
            'h-[220px] w-[220px] object-cover md:h-[300px] md:w-[400px] md:object-contain lg:h-[400px] lg:w-[550px]'
          }
        />
      </div>
    </div>
  )
}

export default PRCard
