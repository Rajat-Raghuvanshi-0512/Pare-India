import { MapImg, MapMobImg } from '../../assets'
import { Img } from '../custom'

const Map = () => {
  return (
    <div className="p-5 pb-7 md:p-16 lg:p-20 lg:pt-28 2xl:px-40" id="map">
      <Img src={MapImg} alt={'map'} width={1300} height={300} className={'hidden h-full w-full md:block'} />
      <Img src={MapMobImg} alt={'map'} width={1300} height={300} className={'h-full w-full md:hidden'} />
    </div>
  )
}

export default Map
