import { LineaImg1, LineaImg2, LineaImg3, LineaImg4 } from '../../../assets'
import { Img } from '../../custom'
const ImgGallery = () => {
  return (
    <div className="grid grid-cols-4 md:h-screen">
      <div>
        <Img src={LineaImg1} height={500} alt={'img1'} className={'h-full w-full'} />
      </div>
      <div>
        <Img src={LineaImg2} height={500} alt={'img2'} className={'h-[50%] w-full'} />
        <Img src={LineaImg3} height={500} alt={'img3'} className={'h-[50%] w-full'} />
      </div>
      <div className="col-span-2">
        <Img src={LineaImg4} height={500} alt={'img4'} className={'h-full w-full'} />
      </div>
    </div>
  )
}

export default ImgGallery
