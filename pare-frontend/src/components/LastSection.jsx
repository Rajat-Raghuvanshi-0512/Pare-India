import { Link } from 'react-router-dom'

const LastSection = ({ dark = true, mainText, btnText, btnRoute, showOnMobile = false }) => {
  return (
    <div className={` ${showOnMobile ? '' : 'hidden md:block'}`}>
      <div
        className={`flex items-center justify-between gap-5 p-5 text-xl font-light uppercase text-white md:gap-20 md:p-10 md:px-10 md:text-4xl lg:gap-40 lg:px-28 lg:text-5xl ${
          dark ? 'bg-black-base' : 'bg-red-base'
        } `}
      >
        <div className="w-[70%] font-montserrat leading-snug">
          {mainText ? mainText : "Let's work together to create the space of your dreams."}
        </div>
        <div>
          <Link
            className="flex h-20 w-20 cursor-pointer items-center justify-center break-words rounded-full border border-white font-metropolis text-xs md:h-28 md:w-28 md:text-sm"
            to={btnRoute ? btnRoute : '/contact'}
          >
            {btnText ? btnText : 'Contact us'}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LastSection
