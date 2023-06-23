import { useNavigate } from 'react-router-dom'
import { Product1Img1, Product1Img11, Product1Img2, Product1Img21, Product1Img3, Product1Img31 } from '../../../assets'
import { Button, Img } from '../../custom'

const P1Section2 = () => {
  const navigate = useNavigate()
  return (
    <section className="p-5 md:px-10 lg:px-20">
      <div className="grid grid-cols-2 gap-5 md:gap-10">
        <div className="pt-10">
          <p className="font-metropolis text-3xl font-light">
            <span className="text-4xl font-semibold text-red-base"> Linea</span> lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h5 className="mt-10 font-metropolis text-2xl font-medium">Highlights</h5>
          <ul className="m-5 list-disc font-montserrat font-light">
            <li className="my-1">Easy to install</li>
            <li className="my-1">Recyclable</li>
            <li className="my-1">Termite Proof & Rust Proof</li>
            <li className="my-1">No Ply required Can Be Screwed Directly on the walls</li>
            <li className="my-1">Appropriate for walls and ceilings</li>
          </ul>
          <Button onClick={() => navigate('/product/linea')}>View range</Button>
        </div>
        <div className="relative">
          <div className="before:absolute before:-top-5 before:left-5 before:-z-10 before:h-full before:w-[80%] before:border-[3px] before:border-red-base">
            <Img src={Product1Img1} alt={'pr1'} className={'relative w-[80%] object-contain'} />
          </div>
          <div className="relative">
            <div className="before:absolute before:-bottom-16 before:-right-4 before:-z-20 before:h-[333px] before:w-[268px] before:border-[3px] before:border-red-base"></div>
            <Img src={Product1Img11} alt={'pr1.1'} className={'absolute -bottom-20 right-0 h-[333px] w-[268px]'} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 py-40 md:gap-10">
        <div className="order-2 pt-10">
          <p className="font-metropolis text-3xl font-light">
            <span className="text-4xl font-semibold text-red-base">Pyramid</span> lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h5 className="mt-10 font-metropolis text-2xl font-medium">Highlights</h5>
          <ul className="m-5 list-disc font-montserrat font-light">
            <li className="my-1">Easy to install</li>
            <li className="my-1">Recyclable</li>
            <li className="my-1">Termite Proof & Rust Proof</li>
            <li className="my-1">No Ply required Can Be Screwed Directly on the walls</li>
            <li className="my-1">Appropriate for walls and ceilings</li>
          </ul>
          <div className="flex w-full justify-end">
            <Button>View range</Button>
          </div>
        </div>
        <div className="relative">
          <div className="before:absolute before:-top-5 before:left-5 before:-z-10 before:h-full before:w-[80%] before:border-[3px] before:border-red-base">
            <Img src={Product1Img2} alt={'pr2'} className={'relative w-[80%] object-contain'} />
          </div>
          <div className="relative">
            <div className="before:absolute before:-bottom-16 before:-right-4 before:-z-20 before:h-[333px] before:w-[268px] before:border-[3px] before:border-red-base"></div>
            <Img src={Product1Img21} alt={'pr2.1'} className={'absolute -bottom-20 right-0 h-[333px] w-[268px]'} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 pb-20 md:gap-10">
        <div className="pt-10">
          <p className="font-metropolis text-3xl font-light">
            <span className="text-4xl font-semibold text-red-base">Arch</span> lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h5 className="mt-10 font-metropolis text-2xl font-medium">Highlights</h5>
          <ul className="m-5 list-disc font-montserrat font-light">
            <li className="my-1">Easy to install</li>
            <li className="my-1">Recyclable</li>
            <li className="my-1">Termite Proof & Rust Proof</li>
            <li className="my-1">No Ply required Can Be Screwed Directly on the walls</li>
            <li className="my-1">Appropriate for walls and ceilings</li>
          </ul>
          <Button>View range</Button>
        </div>
        <div className="relative">
          <div className="before:absolute before:-top-5 before:left-5 before:-z-10 before:h-full before:w-[80%] before:border-[3px] before:border-red-base">
            <Img src={Product1Img3} alt={'pr3'} className={'relative w-[80%] object-contain'} />
          </div>
          <div className="relative">
            <div className="before:absolute before:-bottom-16 before:-right-4 before:-z-20 before:h-[333px] before:w-[268px] before:border-[3px] before:border-red-base"></div>
            <Img src={Product1Img31} alt={'pr3.1'} className={'absolute -bottom-20 right-0 h-[333px] w-[268px]'} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default P1Section2
