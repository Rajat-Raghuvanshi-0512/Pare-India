import { lazy } from 'react'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
const Contact = lazy(() => import('./Contact'))
const Products = lazy(() => import('./Products'))
const Careers = lazy(() => import('./Careers'))
const CareerForm = lazy(() => import('./CareerForm'))
const Product1 = lazy(() => import('./Product1'))
const Linea = lazy(() => import('./Linea'))

export { Home, About, Contact, Products, Careers, CareerForm, Product1, Linea }
