import { useNavigate } from 'react-router-dom'
import { NotFoundBg, NotFoundWebBg } from '../assets'
import { Button } from '../components/custom'
import { useMediaQuery } from '../utils/custom-hooks'

const NotFound = () => {
  const Navigate = useNavigate()
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <div className="fixed z-[1000] flex h-screen w-full flex-col items-end justify-center bg-red-base pr-8 font-metropolis md:pr-20">
      {isMobile ? (
        <img src={NotFoundBg} alt="nf" className="absolute left-0 top-0 -z-10 h-full w-full object-contain" />
      ) : (
        <img
          src={NotFoundWebBg}
          alt="nf"
          className="absolute left-0 top-0 -z-10 h-full w-full object-contain object-left"
        />
      )}

      <div className="flex flex-col gap-5 py-5 text-right text-6xl font-bold uppercase text-white drop-shadow-sm lg:text-8xl">
        <h1>Error</h1>
        <h2>404</h2>
      </div>
      <Button
        className="mt-5 !bg-white !text-xl !text-red-base hover:scale-95 lg:!px-10 lg:!text-3xl"
        onClick={() => Navigate('/')}
      >
        go back to home
      </Button>
    </div>
  )
}

export default NotFound
