import { useState } from 'react'
import { ChatIcon } from '../assets'
import { Img } from './custom'

const ContactFloatBtn = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10">
      <div className="relative">
        <div
          className="z-40 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-red-base text-white"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Img src={ChatIcon} alt={'chat'} width={30} height={30} />
        </div>
        <div
          className={`absolute -z-10 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-green-500 text-white duration-500 ${
            open ? '-top-20 left-0' : 'left-0 top-0'
          } `}
        >
          x
        </div>
        <div
          className={`absolute -z-10 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white text-black duration-500 ${
            open ? '-top-40 left-0' : 'left-0 top-0'
          }`}
        >
          x
        </div>
        <div
          className={`absolute -z-10 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white text-black duration-500 ${
            open ? '-top-60 left-0' : 'left-0 top-0'
          }`}
        >
          x
        </div>
      </div>
    </div>
  )
}

export default ContactFloatBtn
