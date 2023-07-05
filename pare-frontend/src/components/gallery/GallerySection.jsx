import {
  BigImg1,
  BigImg2,
  BigImg3,
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
import { Button } from '../custom'

const Collection = ({ verticalImg, horizontalImg, images = [], order = 'normal' }) => {
  return (
    <div className="flex h-full w-full gap-5">
      <div className={`flex-[0.7] ${order != 'normal' && 'order-2'} `}>
        <img src={verticalImg} alt="verticalimg" className="h-full w-full object-cover" />
      </div>
      <div className="flex-[1.3]">
        <div className="flex w-full flex-col gap-5">
          <div className={`flex w-full ${order == 'second' && 'order-2'}`}>
            {images.map((image, i) => (
              <img src={image} alt="imaz" key={image + i} className="w-[50%] object-cover first:pr-3 last:pl-3" />
            ))}
          </div>
          <div>
            <img src={horizontalImg} alt="horizontalimg" className=" w-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}

const BigImage = ({ imageSrc }) => {
  return <img src={imageSrc} alt="ima" className="h-full w-full object-cover py-10" />
}

const GallerySection = () => {
  return (
    <div className="p-10">
      <Collection verticalImg={VerticalImg1} horizontalImg={HorizontalImg1} images={[SmallImg1, SmallImg2]} />
      <BigImage imageSrc={BigImg1} />
      <Collection
        verticalImg={VerticalImg2}
        horizontalImg={HorizontalImg2}
        images={[SmallImg3, SmallImg4]}
        order="second"
      />
      <BigImage imageSrc={BigImg2} />
      <Collection
        verticalImg={VerticalImg3}
        horizontalImg={HorizontalImg3}
        images={[SmallImg5, SmallImg6]}
        order="third"
      />
      <BigImage imageSrc={BigImg3} />
      <Collection verticalImg={VerticalImg4} horizontalImg={HorizontalImg4} images={[SmallImg7, SmallImg8]} />
      <div className="flex justify-end py-5">
        <Button>Load more</Button>
      </div>
    </div>
  )
}

export default GallerySection
