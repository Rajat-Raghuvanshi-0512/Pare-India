import {
  BigImg1,
  BigImg2,
  BigImg3,
  BigPhoneImg1,
  BigPhoneImg2,
  BigPhoneImg3,
  HorizontalImg1,
  HorizontalImg2,
  HorizontalImg3,
  HorizontalImg4,
  SmallImg1,
  SmallImg2,
  SmallImg3,
  SmallImg4,
  SmallImg5,
  SmallImg6,
  SmallImg7,
  SmallImg8,
  VerticalImg1,
  VerticalImg2,
  VerticalImg3,
  VerticalImg4,
} from '../../assets'
import { useMediaQuery } from '../../utils/custom-hooks'
import { Button } from '../custom'

const Collection = ({ verticalImg, horizontalImg, images = [], order = 'normal' }) => {
  return (
    <>
      <div className="flex h-full w-full gap-5">
        <div className={`flex-[1.3] md:flex-[0.7] ${order != 'normal' && 'order-2'} `}>
          <img src={verticalImg} alt="verticalimg" className="h-full w-full object-cover" />
        </div>
        <div className="flex-[0.7] md:flex-[1.3]">
          <div className="flex h-full w-full flex-col md:h-auto md:gap-5">
            <div className={`flex h-full w-full flex-col gap-3 md:flex-row md:gap-0 ${order == 'second' && 'order-2'}`}>
              {images.map((image, i) => (
                <img
                  src={image}
                  alt="imaz"
                  key={image + i}
                  className="w-full object-cover first:h-[55%] last:h-[45%] md:h-full md:w-[50%] md:first:h-full md:first:pr-3 md:last:h-full md:last:pl-3"
                />
              ))}
            </div>
            <div className="hidden md:block">
              <img src={horizontalImg} alt="horizontalimg" className=" w-full object-contain" />
            </div>
          </div>
        </div>
      </div>
      <img src={horizontalImg} alt="horizontalimg" className=" w-full object-contain pt-5 md:hidden" />
    </>
  )
}

const BigImage = ({ imageSrc }) => {
  return <img src={imageSrc} alt="ima" className="h-full w-full object-cover py-10" />
}

const GallerySection = () => {
  const isPhone = useMediaQuery('(max-width: 768px)')
  return (
    <div className="p-5 pt-10 md:p-10">
      <Collection verticalImg={VerticalImg1} horizontalImg={HorizontalImg1} images={[SmallImg1, SmallImg2]} />
      <BigImage imageSrc={isPhone ? BigPhoneImg1 : BigImg1} />
      <Collection
        verticalImg={VerticalImg2}
        horizontalImg={HorizontalImg2}
        images={[SmallImg3, SmallImg4]}
        order="second"
      />
      <BigImage imageSrc={isPhone ? BigPhoneImg2 : BigImg2} />
      <Collection
        verticalImg={VerticalImg3}
        horizontalImg={HorizontalImg3}
        images={[SmallImg5, SmallImg6]}
        order="third"
      />
      <BigImage imageSrc={isPhone ? BigPhoneImg3 : BigImg3} />
      <Collection verticalImg={VerticalImg4} horizontalImg={HorizontalImg4} images={[SmallImg7, SmallImg8]} />
      <div className="flex justify-end py-5">
        <Button>Load more</Button>
      </div>
    </div>
  )
}

export default GallerySection
