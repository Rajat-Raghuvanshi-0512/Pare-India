import { useEffect, useState } from 'react'
import { Logo } from '../assets'
import { Img } from './custom'
import { Link, useLocation } from 'react-router-dom'

const darkNavLinks = ['/about', '/', '/contact']
const darkNavLinksSm = ['/about']

const FooterSm = () => {
  const location = useLocation()
  const [dark, setDark] = useState(true)

  useEffect(() => {
    if (darkNavLinksSm.includes(location.pathname)) {
      setDark(true)
    } else {
      setDark(false)
    }
  }, [location.pathname])
  return (
    <section className={` ${dark ? 'bg-[#151515] ' : 'bg-red-base'} p-4 font-montserrat text-white`}>
      <div className="mr-10  text-xl font-light uppercase">
        Let&apos;s work together to create the space of your dreams.
      </div>
      <p className="py-5 text-3xl font-semibold">LET’S CONNECT.</p>
      <div className="flex gap-5">
        <Link to={'/'}>Instagram</Link>
        <Link to={'/'}>Facebook</Link>
        <Link to={'/'}>Linkedin</Link>
      </div>
      <p className="mr-14 py-4 text-[10px]">
        Transform your living spaces with PARÉ&apos;s innovative, sustainable, and high-quality products . Let&apos;s
        work together to create a space that reflects your unique style and create unforgettable memories.
      </p>
      <div>
        <div className=" w-20 rounded-full bg-white px-2 py-1">
          <Img src={Logo} alt="logo"></Img>
        </div>
        <div className="pt-3 text-[10px]">COOKIE POLICY</div>
        <div className="py-1 text-[10px]">PRIVACY POLICY</div>
      </div>
      <div className="mb-3 mt-6 text-center text-xs">© Pare India Limited 2023 | Website by Pixy Square</div>
    </section>
  )
}
const FooterLg = ({ dark }) => {
  return (
    <section className={` ${dark ? 'bg-[#151515] text-white' : ''} px-20  md:pt-10 lg:pt-14`}>
      <div className="grid font-montserrat md:grid-cols-10">
        <div className="col-span-5 flex flex-col justify-between border-[0.01rem] border-white border-opacity-50 p-10">
          <Img src={Logo} alt="logo" width={140} height={140} />
          <div className="w-[80%] text-base font-light tracking-wider">
            Transform your living spaces with PARÉ&apos;s innovative, sustainable, and high-quality products. Let&apos;s
            work together to create a space that reflects your unique style and create unforgettable memories.
          </div>
        </div>
        <div className="col-span-2 flex flex-col">
          <div className="flex h-1/2 flex-col border-[0.01rem] border-white border-opacity-50 p-10">
            <ul>
              <li className="mb-4 font-metropolis  font-medium tracking-wider md:text-2xl lg:text-3xl">LEGAL</li>
              <Link to={'/'}>
                <li className="mb-2">COOKIE POLICY</li>
              </Link>
              <Link to={'/'}>
                <li>PRIVACY POLICY</li>
              </Link>
            </ul>
          </div>
          <div className="flex h-2/3 w-auto flex-col border-[0.01rem] border-white border-opacity-50 p-10">
            <ul>
              <li className="mb-4 font-metropolis  font-medium tracking-wider md:text-2xl lg:text-3xl">SOCIAL</li>
              <Link to={'/'}>
                <li className="mb-2">INSTAGRAM</li>
              </Link>
              <Link to={'/'}>
                <li className="mb-2">FACEBOOK</li>
              </Link>
              <Link to={'/'}>
                <li>LINKEDIN</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="col-span-3 flex  flex-col border-[0.01rem] border-white border-opacity-50 p-10">
          <ul>
            <li className="mb-4 font-metropolis font-medium tracking-wider md:text-2xl lg:text-3xl">MENU</li>
            <Link to={'/'}>
              <li className="mb-3">HOME</li>
            </Link>
            <Link to={'/'}>
              <li className="mb-3">ABOUT</li>
            </Link>
            <Link to={'/'}>
              <li className="mb-3">PRODUCTS</li>
            </Link>
            <Link to={'/'}>
              <li className="mb-3">GALLERY</li>
            </Link>
            <Link to={'/'}>
              <li className="mb-3">CONTACTS</li>
            </Link>
            <Link to={'/'}>
              <li className="mb-3">BLOG</li>
            </Link>
            <Link to={'/'}>
              <li className="mb-3">CAREERS</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="py-3 text-center font-montserrat">© Pare India Limited 2023 | Website by Pixy Square</div>
    </section>
  )
}

const Footer = () => {
  const location = useLocation()
  const [dark, setDark] = useState(true)

  useEffect(() => {
    if (darkNavLinks.includes(location.pathname)) {
      setDark(true)
    } else {
      setDark(false)
    }
  }, [location.pathname])

  return (
    <>
      <div className="md:hidden">
        <FooterSm />
      </div>
      <div className="hidden md:block">
        <FooterLg dark={dark} />
      </div>
    </>
  )
}

export default Footer
