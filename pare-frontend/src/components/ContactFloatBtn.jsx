import { useState } from 'react'
import { ChatIcon, MailIcon, PhoneIcon, WhatsappIcon } from '../assets'
import { Img } from './custom'
import { useRef } from 'react'
import { useEffect } from 'react'

const ContactFloatBtn = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', checkIfClickedOutside)
    return () => {
      document.removeEventListener('click', checkIfClickedOutside)
    }
  }, [open])

  return (
    <div className="fixed bottom-5 right-5 z-[100] md:bottom-10 md:right-10" ref={ref}>
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
          <Img src={WhatsappIcon} alt={'whatsapp'} width={50} height={50} />
        </div>
        <div
          className={`absolute -z-10 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white text-black duration-500 ${
            open ? '-top-40 left-0' : 'left-0 top-0'
          }`}
        >
          <Img src={MailIcon} alt={'mail'} width={30} height={30} />
        </div>
        <div
          className={`absolute -z-10 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white text-black duration-500 ${
            open ? '-top-60 left-0' : 'left-0 top-0'
          }`}
        >
          <Img src={PhoneIcon} alt={'phone'} width={30} height={30} />
        </div>
      </div>
    </div>
  )
}

export default ContactFloatBtn
