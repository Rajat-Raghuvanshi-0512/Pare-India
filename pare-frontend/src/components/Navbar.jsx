import { Link } from 'react-router-dom'
import { BurgerMenu, BurgerMenuBlack, Logo } from '../assets'
import { Drawer, Img } from './custom'
import { useModal } from '../custom-hooks'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'

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

const NavSm = ({ isScrolled }) => {
  const { isOpen, closeModal, openModal } = useModal()
  return (
    <nav className={`fixed w-full ${isScrolled ? 'bg-[#EBEBEB]' : 'text-white'} `}>
      <div className="mx-4 flex items-center justify-between">
        <div className="flex items-end">
          <Img src={Logo} width={500} height={400} alt="logo" className="h-14 w-20 object-contain sm:h-20 sm:w-32" />
        </div>
        <div onClick={openModal}>
          <Img
            src={BurgerMenu}
            className={`h-9 w-9 object-contain sm:h-14 sm:w-14 ${!isScrolled ? '' : 'hidden'}`}
            alt="burger-menu"
          />
          <Img
            src={BurgerMenuBlack}
            className={`h-9 w-9 object-contain sm:h-14 sm:w-14 ${isScrolled ? '' : 'hidden'}`}
            alt="burger-menu-black"
          />
        </div>
        <Drawer isOpen={isOpen}>
          <ul className="flex flex-col items-center justify-center gap-8 text-black">
            {navLinks.map((link) => (
              <Link to={link.path} key={link.path} className="font-montserrat text-xl uppercase">
                {link.text}
              </Link>
            ))}
            <div onClick={closeModal}>x</div>
          </ul>
        </Drawer>
      </div>
    </nav>
  )
}

const NavMd = ({ isScrolled }) => {
  return (
    <nav className={`fixed w-full ${isScrolled ? 'bg-[#EBEBEB]' : 'text-white'} `}>
      <div className="mx-10 flex items-center justify-between border-b-2">
        <div className="flex items-end">
          <Img src={Logo} width={400} height={400} alt="logo" className="h-12 w-20 object-contain" />
        </div>
        <div>
          <ul className="flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <Link to={link.path} key={link.path} className="font-montserrat text-sm uppercase">
                {link.text}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

const NavLg = ({ isScrolled }) => {
  return (
    <nav className={`fixed w-full ${isScrolled ? 'bg-[#EBEBEB]' : 'text-white'} `}>
      <div
        className={`mx-10 flex items-center justify-between 2xl:mx-40 ${isScrolled ? '' : 'border-b-2 border-white'}`}
      >
        <div className="flex items-end">
          <Img src={Logo} width={500} height={400} alt="logo" className="h-16 w-28 object-contain" />
        </div>
        <div>
          <ul className="flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <Link to={link.path} key={link.path} className="font-montserrat text-xl uppercase ">
                {link.text}
              </Link>
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
  useMotionValueEvent(scrollY, 'change', (currScroll) => {
    if (currScroll > 10) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  })
  return (
    <div>
      <div className="md:hidden">
        <NavSm isScrolled={isScrolled} />
      </div>
      <div className="hidden md:block lg:hidden">
        <NavMd isScrolled={isScrolled} />
      </div>
      <div className="hidden lg:block">
        <NavLg isScrolled={isScrolled} />
      </div>
    </div>
  )
}

export default Navbar
