import { useRef, useEffect } from 'react'
import { Img } from '../custom'
import axios from 'axios'
import { useState } from 'react'

const PareIndiaRotatingImgSm = ({ images }) => {
  return (
    <section className="relative flex h-[70vh] w-screen flex-col items-center justify-start overflow-hidden">
      <div className="absolute left-[50%] top-[37%] -translate-x-[50%] text-center">
        <h1 className="font-metropolis text-4xl font-bold">@pare.india</h1>
        <p className="py-2 text-center font-helvetica text-xs  opacity-60 md:text-base lg:text-lg">
          Follow @pare.india on Instagram to see our latest innovative designs and get inspired for your next project!
        </p>
      </div>
      <div className="circle-container z-30 flex h-[100vh] flex-col items-center justify-center">
        {images.slice(0, 8).map((im, idx) => {
          return <Img src={im.media_url} key={im.media_url + idx} id="instafeed" />
        })}
      </div>
    </section>
  )
}
const PareIndiaRotatingImgLg = ({ images = [] }) => {
  const ref = useRef()

  const getScrollOffset = (e) => {
    let xValue = e.clientX
    let yValue = e.clientY
    let windowHeight = window.innerHeight
    let windowWidth = window.innerWidth

    let mousePosX = -1 + (xValue / windowWidth) * 200
    let mousePosY = 1 - (yValue / windowHeight) * 100
    ref.current.style.transform = `translate3d(${-mousePosX + 100}px,${mousePosY + 100}px,0px)`
    ref.current.style.transition = ' all 0.4s'
  }
  return (
    <section className="relative flex h-[50vh] w-screen flex-col items-center justify-center overflow-hidden md:-mt-24 md:h-[170vh]">
      <div className="absolute left-[50%] top-[47%] w-[40%] -translate-x-[50%] text-center">
        <h1 className="font-metropolis text-2xl font-black md:text-4xl lg:text-7xl">@pare.india</h1>
        <p className="py-2 text-center font-helvetica text-sm opacity-60 md:text-base lg:text-lg">
          Follow @pare.india on Instagram to see our latest innovative designs and get inspired for your next project!
        </p>
      </div>
      <div
        className="circle-container z-30 flex h-[100vh] flex-col items-center justify-center"
        ref={ref}
        onMouseMove={getScrollOffset}
      >
        {images.slice(0, 8).map((im, idx) => {
          return <Img src={im.media_url} key={im.media_url + idx} id="instafeed" />
        })}
      </div>
    </section>
  )
}

const PareIndiaRotatingImg = () => {
  const access_token = import.meta.env.VITE_INSTA_API_KEY

  const [images, setImages] = useState([])

  const getPostsId = async () => {
    const { data } = await axios.get(`https://graph.instagram.com/me/media?access_token=${access_token}`)
    console.log(data)
    data?.data?.forEach(async (postId) => {
      const { data } = await axios.get(
        `https://graph.instagram.com/${postId.id}?access_token=${access_token}&fields=media_url,permalink,media_type`,
      )
      if (data.media_type == 'IMAGE') {
        setImages((prev) => [...prev, data])
      }
    })
    console.log(images)
  }
  useEffect(() => {
    getPostsId()
  }, [])
  console.log(images)
  return (
    <div>
      <div className="md:hidden">
        <PareIndiaRotatingImgSm images={images} />
      </div>
      <div className="hidden md:block">
        <PareIndiaRotatingImgLg images={images} />
      </div>
    </div>
  )
}

export default PareIndiaRotatingImg
