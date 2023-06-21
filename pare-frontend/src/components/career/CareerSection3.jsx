import { CareerImg1, CareerImg2, CareerImg3, CareerImg4, CareerImg5 } from '../../assets'
import { Img } from '../custom'

const CareerSection3 = () => {
  return (
    <section className="p-5 md:p-10 lg:px-20">
      <div className="mt-10 grid grid-cols-3 gap-5 lg:mt-20">
        <div className="col-span-2">
          <Img src={CareerImg1} alt={'img1'} className="h-full w-full" />
        </div>
        <div>
          <Img src={CareerImg2} alt={'img2'} className="h-full w-full" />
        </div>
        <div>
          <Img src={CareerImg3} alt={'img3'} className="h-full w-full" />
        </div>
        <div>
          <Img src={CareerImg4} alt={'img4'} className="h-full w-full" />
        </div>
        <div>
          <Img src={CareerImg5} alt={'img5'} className="h-full w-full" />
        </div>
      </div>
    </section>
  )
}

export default CareerSection3
