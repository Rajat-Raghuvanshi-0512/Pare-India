import { lazy } from 'react'
import NotFound from './404'

import Home from './Home'
const About = lazy(() => import('./About'))
const Contact = lazy(() => import('./Contact'))
const Products = lazy(() => import('./Products'))
const Careers = lazy(() => import('./Careers'))
const CareerForm = lazy(() => import('./CareerForm'))
const Product1 = lazy(() => import('./Product1'))
const Linea = lazy(() => import('./Linea'))
const FAQ = lazy(() => import('./FAQ'))
const Resources = lazy(() => import('./Resources'))
const Gallery = lazy(() => import('./Gallery'))

export { Home, About, Contact, Products, Careers, CareerForm, Product1, Linea, FAQ, NotFound, Resources, Gallery }
