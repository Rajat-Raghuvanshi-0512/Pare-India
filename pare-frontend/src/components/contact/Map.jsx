import { MapImg } from '../../assets'
import { Img } from '../custom'

const Map = () => {
  return (
    <div>
      <Img src={MapImg} alt={'map'} width={1300} height={300} className={'h-full w-full'} />
    </div>
  )
}

export default Map
