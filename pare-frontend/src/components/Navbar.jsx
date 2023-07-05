import { Link, useLocation } from 'react-router-dom'
import { BackButton, BurgerMenu, BurgerMenuBlack, CloseIcon, FbIcon, InstaIcon, LinkedInIcon, Logo } from '../assets'
import { Drawer, Img } from './custom'
import { useModal } from '../utils/custom-hooks'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'

const greNavRoutes = ['/about', '/products', '/careers', '/faq', '/application', '/gallery']

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
    text: 'resources',
    dropdown: ['faq', 'blog', 'application'],
  },
  {
    text: 'contact us',
    path: '/contact',
  },
]

const navLinksSm = [
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
    text: 'blog',
    path: '/blog',
  },
  {
    text: 'careers',
    path: '/careers',
  },
  {
    text: 'contact us',
    path: '/contact',
  },
  {
    text: 'resources',
    dropdown: ['faq', 'blog', 'application'],
  },
]

const NavSm = ({ isScrolled }) => {
  const { isOpen, closeModal, openModal } = useModal()
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const location = useLocation()
  return (
    <nav
      className={`fixed left-0 top-0 z-[100] w-full ${
        isScrolled || greNavRoutes.includes(location.pathname) ? 'bg-[#EBEBEB]' : 'text-white'
      } duration-300 `}
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
          <div className="flex h-screen flex-col justify-between gap-10 overflow-hidden">
            <div className="pt-5">
              <img
                src={resourcesOpen ? BackButton : CloseIcon}
                alt="close"
                className="ml-auto h-10 w-10"
                onClick={resourcesOpen ? () => setResourcesOpen(false) : closeModal}
              />
            </div>
            <ul className={`flex w-full flex-col items-end justify-center gap-8 text-white`}>
              {navLinksSm.map((link) => {
                if (resourcesOpen && link.text !== 'resources') return null
                return (
                  <li key={link.text}>
                    {resourcesOpen && (
                      <div className="flex flex-col items-end gap-12 pb-10">
                        {link?.dropdown?.map((item) => (
                          <div key={item}>
                            <Link to={`/${item}`} className="font-montserrat text-3xl uppercase" onClick={closeModal}>
                              {item}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                    <Link
                      to={link.path}
                      className="ml-10 w-full text-right font-montserrat text-3xl uppercase"
                      onClick={link.text === 'resources' ? () => setResourcesOpen(true) : closeModal}
                    >
                      {link.text}
                    </Link>
                  </li>
                )
              })}
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
          <ul className="flex items-center justify-center gap-3">
            {navLinks.map((link) => (
              <li
                key={link.text}
                className={`group relative p-2 duration-200 ${link?.dropdown && 'hover:bg-[#EBEBEB]'} `}
              >
                <Link to={link.path} className="font-montserrat text-sm uppercase hover:text-red-base">
                  {link.text}
                </Link>
                <div
                  className={`pointer-events-none absolute left-0 top-[100%] w-full flex-col gap-3 p-2 pt-3 text-center text-black opacity-0 duration-200 group-hover:pointer-events-auto group-hover:opacity-100 ${
                    link?.dropdown && 'bg-[#EBEBEB]'
                  }`}
                >
                  {link?.dropdown?.map((item) => (
                    <div key={item} className="py-1">
                      <Link
                        to={`/${item}`}
                        className="cursor-pointer font-montserrat text-sm uppercase duration-200 hover:text-red-base"
                      >
                        {item}
                      </Link>
                    </div>
                  ))}
                </div>
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
              <li
                key={link.text}
                className={`group relative p-2 duration-200  ${link?.dropdown && 'hover:bg-[#EBEBEB]'} `}
              >
                <Link to={link.path} className="font-montserrat text-xl uppercase hover:text-red-base">
                  {link.text}
                </Link>
                <div
                  className={`pointer-events-none absolute left-0 top-[100%] w-full flex-col gap-3 p-2 pt-3 text-center text-black opacity-0 duration-200 group-hover:pointer-events-auto group-hover:opacity-100 ${
                    link?.dropdown && 'bg-[#EBEBEB]'
                  }`}
                >
                  {link?.dropdown?.map((item) => (
                    <div key={item} className="py-1">
                      <Link
                        to={`/${item}`}
                        className="cursor-pointer font-montserrat text-lg uppercase duration-200 hover:text-red-base"
                      >
                        {item}
                      </Link>
                    </div>
                  ))}
                </div>
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
