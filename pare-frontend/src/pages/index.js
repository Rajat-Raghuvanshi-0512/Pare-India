import { lazy } from 'react'
import NotFound from './404'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import Careers from './Careers'
import CareerForm from './CareerForm'
import Product1 from './Product1'
import FAQ from './FAQ'
import Resources from './Resources'
import Gallery from './Gallery'
import Blog from './Blog'
import BlogInfo from './BlogInfo'
import Linea from './Easy/Linea'
import Pyramid from './Easy/Pyramid'
import Arch from './Easy/Arch'
import Norma from './Dura/Norma'
import Stretta from './Dura/Stretta'
import Duo from './Innov/Duo'
import Louvers from './Innov/Louvers'
import Soffit from './Innov/Soffit'
import Vertica from './Innov/Vertica'
import Wave from './Wave'

const PrivacyPolicy = lazy(() => import('./PrivacyPolicy'))

export {
  Home,
  About,
  Contact,
  Products,
  Careers,
  CareerForm,
  Product1,
  Linea,
  Arch,
  Pyramid,
  FAQ,
  NotFound,
  Resources,
  Gallery,
  Blog,
  BlogInfo,
  PrivacyPolicy,
  Norma,
  Stretta,
  Duo,
  Louvers,
  Soffit,
  Vertica,
  Wave,
}
