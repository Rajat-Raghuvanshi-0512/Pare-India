import { useNavigate } from 'react-router-dom'

const LastSection = ({ dark = true }) => {
  const navigate = useNavigate()
  return (
    <div className="hidden md:block">
      <div
        className={`flex items-center justify-between gap-10 p-5 text-2xl font-light uppercase text-white md:gap-20 md:p-10 md:px-10 md:text-4xl lg:gap-40 lg:px-28 lg:pb-0 lg:text-5xl ${
          dark ? 'bg-black-base' : 'bg-red-base'
        } `}
      >
        <div className="w-[70%] font-montserrat leading-snug">
          Let&apos;s work together to create the space of your dreams.
        </div>
        <div>
          <div
            className="flex h-28 w-28 cursor-pointer items-center justify-center rounded-full border border-white font-metropolis text-sm"
            onClick={() => navigate('/contact')}
          >
            Contact us
          </div>
        </div>
      </div>
    </div>
  )
}

export default LastSection
