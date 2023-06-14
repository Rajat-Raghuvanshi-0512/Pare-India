import { LeftArrow, NextArrow, PrevArrow, Project1Img, Project2Img, Project3Img, RightArrow } from '../../assets'
import { Img } from '../custom'

const Projects = () => {
  return (
    <section className="p-5 md:p-10 lg:px-20 ">
      <div className="flex justify-between">
        <div className="font-metropolis">
          <div className="text-3xl font-bold uppercase md:text-4xl lg:text-5xl">Projects</div>
          <p className="mb-8 mt-3 text-xs md:mb-0 md:w-60 md:text-base lg:w-80">
            Browse through and see how we have transformed spaces and exceeded our client&apos;s expectations, one
            project at a time.
          </p>
        </div>
        <div className="hidden font-metropolis font-light md:block md:text-lg lg:text-xl">01/10</div>
      </div>

      <hr className="hidden md:m-5 md:block lg:m-8" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-10 lg:gap-20">
        <Img src={Project1Img} alt={'project'} width={300} height={300} className="hidden md:block" />
        <Img src={Project2Img} alt={'project'} width={300} height={300} className="mx-auto" />
        <Img src={Project3Img} alt={'project'} width={300} height={300} className="hidden md:block" />
      </div>

      <hr className="hidden md:m-5 md:block lg:m-8" />

      <div className=" hidden justify-between md:flex">
        <Img
          src={PrevArrow}
          alt={'prev'}
          width={100}
          height={100}
          className={'cursor-pointer duration-200 hover:scale-95'}
        />
        <Img
          src={NextArrow}
          alt={'prev'}
          width={100}
          height={100}
          className={'cursor-pointer duration-200 hover:scale-95'}
        />
      </div>
      <div className="mt-10 flex flex-col justify-between gap-5 md:flex-row md:gap-10 lg:gap-20">
        <div className="flex-1 font-metropolis text-3xl !leading-snug md:text-4xl lg:text-5xl">
          WHAT OUR <span className="font-bold text-red-base">CLIENTS</span> HAVE TO SAY ABOUT US
        </div>
        <div className="ml-20 mr-5 flex flex-1 items-end text-right font-helvetica text-xs font-light md:mx-0 md:text-xl lg:text-3xl">
          Browse through our client testimonials to hear first-hand accounts of our quality products and exceptional
          customer service.
        </div>
      </div>
      <div>
        <iframe
          width="90%"
          height="500"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?showinfo=0&controls=0"
          className="mx-auto my-5 h-[200px] md:my-10 md:h-[400px] lg:h-[500px]"
          allowFullScreen
        ></iframe>
        <div className="flex items-center justify-center gap-5">
          <Img src={LeftArrow} alt={'larrow'} width={40} height={10} className={'hidden cursor-pointer md:block'} />
          <div className="font-metropolis text-xs font-light md:text-xl">01/07</div>
          <Img src={RightArrow} alt={'rarrow'} width={40} height={10} className={'hidden cursor-pointer md:block'} />
        </div>
      </div>
    </section>
  )
}

export default Projects
