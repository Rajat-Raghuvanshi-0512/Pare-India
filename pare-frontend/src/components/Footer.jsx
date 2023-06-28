import { useEffect, useState } from 'react'
import { Logo } from '../assets'
import { Img } from './custom'
import { Link, useLocation } from 'react-router-dom'

const darkNavLinks = ['/about', '/', '/contact', '/career-form', '/product/linea', '/application', '/blog', '/faq']
const darkNavLinksSm = ['/about', '/career-form', '/product/linea', '/application']

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
      <div className="flex gap-5 uppercase">
        <Link to={'https://www.instagram.com/pareindia/'} target="_blank">
          Instagram
        </Link>
        <Link to={'https://www.facebook.com/Pareinnov.'} target="_blank">
          Facebook
        </Link>
        <Link to={'https://www.linkedin.com/company/pareindia/'} target="_blank">
          Linkedin
        </Link>
      </div>
      <p className="mr-14 py-4 text-[10px]">
        Transform your living spaces with PARÉ&apos;s innovative, sustainable, and high-quality products . Let&apos;s
        work together to create a space that reflects your unique style and create unforgettable memories.
      </p>
      <div>
        <div className=" w-20 rounded-full bg-white px-2 py-1">
          <Img src={Logo} alt="logo" width={60}></Img>
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
    <section className={` ${dark ? 'bg-[#151515] text-white' : ''} md:px-10 md:pt-10  lg:px-20 lg:pt-14 2xl:px-40`}>
      <div className="grid font-montserrat md:grid-cols-10">
        <div
          className={`col-span-5 flex flex-col justify-between border-[0.01rem] border-opacity-50 md:p-3 lg:p-5 ${
            dark ? 'border-white' : 'border-black-base'
          }`}
        >
          <Img src={Logo} alt="logo" width={140} height={140} />
          <div className="w-[80%] text-base font-normal leading-5 tracking-tight">
            Transform your living spaces with PARÉ&apos;s innovative, sustainable, and high-quality products. Let&apos;s
            work together to create a space that reflects your unique style and create unforgettable memories.
          </div>
        </div>
        <div className="col-span-2 flex flex-col">
          <div
            className={`flex h-1/2 flex-col border-t-[0.01rem] border-opacity-50 text-center md:p-3 lg:p-5 ${
              dark ? 'border-white' : 'border-black-base'
            }`}
          >
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
          <div
            className={`flex h-2/3 w-auto flex-col border-y-[0.01rem] ${
              dark ? 'border-white' : 'border-black-base'
            } border-opacity-50 text-center md:p-3 lg:p-5`}
          >
            <ul>
              <li className="mb-4 font-metropolis  font-medium tracking-wider md:text-2xl lg:text-3xl">SOCIAL</li>
              <Link to={'https://www.instagram.com/pareindia/'} target="_blank">
                <li className="mb-2">INSTAGRAM</li>
              </Link>
              <Link to={'https://www.facebook.com/Pareinnov.'} target="_blank">
                <li className="mb-2">FACEBOOK</li>
              </Link>
              <Link to={'https://www.linkedin.com/company/pareindia/'} target="_blank">
                <li>LINKEDIN</li>
              </Link>
            </ul>
          </div>
        </div>
        <div
          className={`col-span-3 flex  flex-col border-[0.01rem] ${
            dark ? 'border-white' : 'border-black-base'
          } border-opacity-50 text-center md:p-3 lg:p-5`}
        >
          <ul>
            <li className="mb-4 font-metropolis font-medium tracking-wider md:text-xl lg:text-3xl">MENU</li>
            <Link to={'/'}>
              <li className="mb-3">HOME</li>
            </Link>
            <Link to={'/about'}>
              <li className="mb-3">ABOUT</li>
            </Link>
            <Link to={'/products'}>
              <li className="mb-3">PRODUCTS</li>
            </Link>
            <Link to={'/gallery'}>
              <li className="mb-3">GALLERY</li>
            </Link>
            <Link to={'/blog'}>
              <li className="mb-3">BLOG</li>
            </Link>
            <Link to={'/resources'}>
              <li className="mb-3">RESOURCES</li>
            </Link>
            <Link to={'/careers'}>
              <li className="mb-3">CAREERS</li>
            </Link>
            <Link to={'/contact'}>
              <li className="mb-3">CONTACTS</li>
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
