import { Img } from '../custom'

const ShadeBox = ({ item }) => {
  return (
    <div className="relative mb-20 mt-10 h-[380px] w-[310px]">
      <Img src={item.img} alt={'metallic'} className={'h-full w-[310px]'} />
      <Img
        src={item.shade}
        alt={'shade'}
        width={100}
        height={100}
        className={'absolute bottom-0 right-0 translate-x-[40%] translate-y-[40%]'}
      />
    </div>
  )
}

export default ShadeBox
