import { lazy } from 'react'
const ContactFloatBtn = lazy(() => import('./ContactFloatBtn'))
const Footer = lazy(() => import('./Footer'))
const Navbar = lazy(() => import('./Navbar'))

export { Navbar, ContactFloatBtn, Footer }
