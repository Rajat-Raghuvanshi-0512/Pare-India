import { MapImg } from '../../assets'
import { Img } from '../custom'

const Map = () => {
  return (
    <div className="p-5 pt-20  md:p-16 lg:p-20 lg:pt-28 2xl:px-40">
      <Img src={MapImg} alt={'map'} width={1300} height={300} className={'h-full w-full'} />
    </div>
  )
}

export default Map
