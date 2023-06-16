const LastSection = ({ dark = true }) => {
  return (
    <div className="hidden md:block">
      <div
        className={`flex items-center justify-between gap-10 p-5 text-2xl font-light uppercase text-white md:gap-20 md:p-10 md:text-4xl lg:gap-40 lg:px-20 lg:text-6xl ${
          dark ? 'bg-black-base' : 'bg-red-base'
        } `}
      >
        <div className="font-montserrat leading-snug">Let&apos;s work together to create the space of your dreams.</div>
        <div>
          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white font-metropolis text-sm">
            Contact us
          </div>
        </div>
      </div>
    </div>
  )
}

export default LastSection