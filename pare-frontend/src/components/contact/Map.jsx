import { useMemo } from 'react'
import { MapImg, MapMobImg } from '../../assets'
import { Img } from '../custom'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  })
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), [])
  if (!isLoaded) return
  return (
    <div className="p-5 pb-7 md:p-16 lg:p-20 lg:pt-28 2xl:px-40" id="map">
      <Img src={MapImg} alt={'map'} width={1300} height={300} className={'hidden h-full w-full md:block'} />
      <GoogleMap mapContainerClassName="map-container" center={center} zoom={10}>
        <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
      </GoogleMap>
      <Img src={MapMobImg} alt={'map'} width={1300} height={300} className={'h-full w-full md:hidden'} />
    </div>
  )
}

export default Map
