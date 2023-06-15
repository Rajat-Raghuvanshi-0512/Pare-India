import { Parth } from '../../assets'

const Team = () => {
  return (
    <div>
      <div className="font-metropolis uppercase">
        <h4 className="text-xl font-light md:text-3xl lg:text-4xl">meet</h4>
        <h3 className="text-2xl font-semibold md:text-4xl lg:text-5xl">our team</h3>
      </div>
      <div className="my-3 grid grid-cols-2 gap-5 md:my-10 md:gap-10 lg:my-16 lg:gap-16">
        <div className="flex flex-col items-center">
          <img src={Parth} alt="parth" width={300} height={300} />
          <p className="mt-3 font-montserrat text-xs font-medium uppercase md:text-lg lg:text-xl">Parth Parmar</p>
          <p className="font-montserrat text-[10px] font-light  uppercase md:text-sm">Director</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={Parth} alt="parth" width={300} height={300} />
          <p className="mt-3 font-montserrat text-xs font-medium uppercase md:text-lg lg:text-xl">Parth Parmar</p>
          <p className="font-montserrat text-[10px] font-light  uppercase md:text-sm">Director</p>
        </div>
      </div>
    </div>
  )
}

export default Team
