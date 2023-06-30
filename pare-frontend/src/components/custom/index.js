import { lazy } from 'react'
const Button = lazy(() => import('./Button'))
const Drawer = lazy(() => import('./Drawer'))
const Img = lazy(() => import('./Img'))
export { Img, Drawer, Button }
