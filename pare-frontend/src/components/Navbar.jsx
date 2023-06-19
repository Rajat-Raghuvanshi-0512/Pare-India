import { Link, useLocation } from 'react-router-dom'
import { BurgerMenu, BurgerMenuBlack, CloseIcon, FbIcon, InstaIcon, LinkedInIcon, Logo } from '../assets'
import { Drawer, Img } from './custom'
import { useModal } from '../custom-hooks'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'

const greNavRoutes = ['/about', '/products']

const navLinks = [
  {
    text: 'home',
    path: '/',
  },
  {
    text: 'about',
    path: '/about',
  },
  {
    text: 'products',
    path: '/products',
  },
  {
    text: 'gallery',
    path: '/gallery',
  },
  {
    text: 'careers',
    path: '/careers',
  },
  {
    text: 'contact us',
    path: '/contact',
  },
]

const NavSm = ({ isScrolled, hide }) => {
  const { isOpen, closeModal, openModal } = useModal()
  const location = useLocation()
  return (
    <nav
      className={`fixed left-0 top-0 z-40 w-full ${
        isScrolled || greNavRoutes.includes(location.pathname) ? 'bg-[#EBEBEB]' : 'text-white'
      } ${hide ? '-translate-y-[100%]' : 'translate-y-0'} duration-300 `}
    >
      <div className="mx-4 flex items-center justify-between">
        <div className="flex items-end">
          <Img src={Logo} width={500} height={400} alt="logo" className="h-16 w-24 object-contain sm:h-20 sm:w-32" />
        </div>
        <div onClick={openModal}>
          <Img
            src={BurgerMenu}
            className={`h-11 w-11 object-contain sm:h-14 sm:w-14 ${
              !isScrolled && !greNavRoutes.includes(location.pathname) ? '' : 'hidden'
            }`}
            alt="burger-menu"
          />
          <Img
            src={BurgerMenuBlack}
            className={`h-11 w-11 object-contain sm:h-14 sm:w-14 ${
              isScrolled || greNavRoutes.includes(location.pathname) ? '' : 'hidden'
            }`}
            alt="burger-menu-black"
          />
        </div>
        <Drawer isOpen={isOpen}>
          <div className="flex h-screen flex-col justify-between">
            <div className="pt-5">
              <img src={CloseIcon} alt="close" className="ml-auto h-10 w-10" onClick={closeModal} />
            </div>
            <ul className="flex w-full flex-col items-end justify-center gap-12 text-white">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="font-montserrat text-3xl uppercase" onClick={closeModal}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mb-5 flex items-end justify-end gap-2">
              <img src={InstaIcon} alt="insta" className="h-8 w-8 object-contain" />
              <img src={FbIcon} alt="fb" className="h-8 w-8 object-contain" />
              <img src={LinkedInIcon} alt="Ld" className="h-8 w-8 object-contain" />
            </div>
          </div>
        </Drawer>
      </div>
    </nav>
  )
}

const NavMd = ({ isScrolled, hide }) => {
  const location = useLocation()
  return (
    <nav
      className={`fixed z-50 w-full ${
        isScrolled || greNavRoutes.includes(location.pathname) ? 'bg-[#EBEBEB]' : 'text-white'
      } ${hide ? '-translate-y-[100%]' : 'translate-y-0'} duration-300 `}
    >
      <div className="mx-10 flex items-center justify-between border-b-2">
        <div className="flex items-end">
          <Img src={Logo} width={400} height={400} alt="logo" className="h-12 w-20 object-contain" />
        </div>
        <div>
          <ul className="flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="font-montserrat text-sm uppercase">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

const NavLg = ({ isScrolled, hide }) => {
  const location = useLocation()
  return (
    <nav
      className={`fixed z-50 w-full ${
        isScrolled || greNavRoutes.includes(location.pathname) ? 'bg-[#EBEBEB]' : 'text-white'
      } ${hide ? '-translate-y-[100%]' : 'translate-y-0'} duration-300`}
    >
      <div
        className={`mx-10 flex items-center justify-between 2xl:mx-40 ${isScrolled ? '' : 'border-b-2 border-white'}`}
      >
        <div className="flex items-end">
          <Img src={Logo} width={500} height={400} alt="logo" className="h-16 w-28 object-contain" />
        </div>
        <div>
          <ul className="flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path} className="duration-200 hover:scale-95 hover:text-red-base">
                <Link to={link.path} className="font-montserrat text-xl uppercase">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

const Navbar = () => {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [hide, setHide] = useState(false)
  const [prevScroll, setPrevScroll] = useState(0)
  useMotionValueEvent(scrollY, 'change', (currScroll) => {
    if (currScroll <= 0) {
      setHide(false)
      setIsScrolled(false)
      return
    }
    if (currScroll > 10) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
    if (prevScroll > currScroll) {
      setHide(false)
    } else {
      setHide(true)
    }
    setPrevScroll(currScroll)
  })
  return (
    <div>
      <div className="md:hidden">
        <NavSm isScrolled={isScrolled} hide={hide} />
      </div>
      <div className="hidden md:block lg:hidden">
        <NavMd isScrolled={isScrolled} hide={hide} />
      </div>
      <div className="hidden lg:block">
        <NavLg isScrolled={isScrolled} hide={hide} />
      </div>
    </div>
  )
}

export default Navbar
