import { lazy } from 'react'
import NotFound from './404'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import Careers from './Careers'
import CareerForm from './CareerForm'
import Product1 from './Product1'
import Linea from './Linea'
import FAQ from './FAQ'
import Resources from './Resources'
import Gallery from './Gallery'
import Blog from './Blog'
import BlogInfo from './BlogInfo'
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
  FAQ,
  NotFound,
  Resources,
  Gallery,
  Blog,
  BlogInfo,
  PrivacyPolicy,
}
