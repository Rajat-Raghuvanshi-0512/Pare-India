import { LineaImg1, LineaImg2, LineaImg3, LineaImg4 } from '../../../assets'
import { Img } from '../../custom'

const ImgGallerySm = () => {
  return (
    <>
      <div className="flex">
        <div className="flex-[0.7]">
          <Img src={LineaImg1} height={500} alt={'img1'} className={'h-full w-full'} />
        </div>
        <div className="flex-[1.3]">
          <Img src={LineaImg2} height={500} alt={'img2'} className={'h-full w-full'} />
        </div>
      </div>
      <div className="flex">
        <div className="flex-[1.3]">
          <Img src={LineaImg3} height={500} alt={'img3'} className={'h-full w-full'} />
        </div>
        <div className="flex-[0.7]">
          <Img src={LineaImg4} height={500} alt={'img4'} className={'h-full w-full'} />
        </div>
      </div>
    </>
  )
}
const ImgGalleryLg = () => {
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

const ImgGallery = () => {
  return (
    <>
      <div className="md:hidden">
        <ImgGallerySm />
      </div>
      <div className="hidden md:block">
        <ImgGalleryLg />
      </div>
    </>
  )
}

export default ImgGallery
