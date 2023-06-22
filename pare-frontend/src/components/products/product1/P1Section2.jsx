import { Product1Img1, Product1Img11, Product1Img2, Product1Img21, Product1Img3, Product1Img31 } from '../../../assets'
import { Img } from '../../custom'

const P1Section2 = () => {
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
        </div>
        <div className="relative">
          <Img src={Product1Img1} alt={'pr1'} className={'w-[80%] object-contain'} />
          <Img src={Product1Img11} alt={'pr1.1'} className={'absolute -bottom-20 right-0'} />
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
        </div>
        <div className="relative">
          <Img src={Product1Img2} alt={'pr1'} className={'w-[80%] object-contain'} />
          <Img src={Product1Img21} alt={'pr1.1'} className={'absolute -bottom-20 right-0'} />
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
        </div>
        <div className="relative">
          <Img src={Product1Img3} alt={'pr1'} className={'w-[80%] object-contain'} />
          <Img src={Product1Img31} alt={'pr1.1'} className={'absolute -bottom-20 right-0'} />
        </div>
      </div>
    </section>
  )
}

export default P1Section2
