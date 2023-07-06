import { NextArrowProject, PrevArrowProject, TrimWoodBg1 } from '../../assets'
import { Img } from '../custom'
import BlogCard from './BlogCard'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/bundle'
import 'swiper/css'
import { useState } from 'react'

const blogData = [
  {
    title: '5 Creative Ways to Incorporate Tiles into Your Interior Design',
    image: TrimWoodBg1,
    isRed: true,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
  },
  {
    title: 'Expert Tips from Our Design Team',
    image: TrimWoodBg1,
    isRed: true,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
  },
  {
    title: 'From Bold Patterns to Subtle Textures: Exploring the Versatility of Interior Design Tiles',
    image: TrimWoodBg1,
    isRed: true,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
  },
  {
    title: 'Revamp Your Home with Unique and Beautiful Tile Designs: Our Top Picks',
    image: TrimWoodBg1,
    isRed: false,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
  },
  {
    title: "Tile Trends 2023: What's Hot and What's Not in Interior Design",
    image: TrimWoodBg1,
    isRed: true,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
  },
  {
    title: "Tile Trends 2023: What's Hot and What's Not in Interior Design",
    image: TrimWoodBg1,
    isRed: false,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
  },
  {
    title: "Tile Trends 2023: What's Hot and What's Not in Interior Design",
    image: TrimWoodBg1,
    isRed: true,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
  },
  {
    title: "Tile Trends 2023: What's Hot and What's Not in Interior Design",
    image: TrimWoodBg1,
    isRed: true,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
  },
]

const BlogSm = ({ setActive }) => {
  return (
    <Swiper
      spaceBetween={20}
      loop={true}
      slidesPerView={1.2}
      className="pl-14"
      initialSlide={1}
      allowTouchMove={true}
      onSlideChange={(swiper) => {
        setActive(swiper.activeIndex)
      }}
    >
      {blogData.map((item) => (
        <SwiperSlide key={item.title}>
          <BlogCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

const BlogSection = () => {
  const [active, setActive] = useState(0)
  return (
    <section className="bg-black-base p-5 pt-14 text-white md:p-10 lg:pt-20 2xl:px-40">
      <h2 className="m-5 font-metropolis text-5xl font-bold lg:text-6xl">Blog</h2>
      <div className="hidden gap-2 md:grid md:grid-cols-3 lg:grid-cols-4">
        {blogData.map((item) => (
          <BlogCard key={item.title} {...item} />
        ))}
      </div>
      <div className="md:hidden">
        <BlogSm setActive={setActive} />
        <div className="py-5 text-center font-metropolis text-xl font-light md:hidden">0{active}/08</div>
      </div>
      <div className="z-20 mt-5 hidden h-20 items-center justify-between overflow-auto pb-5 md:mt-10 md:flex">
        <div className="project-btn flex cursor-pointer items-center duration-200 hover:scale-125">
          <div className="h-14 w-14 translate-x-[50%] rounded-full border"></div>
          <Img src={PrevArrowProject} alt={'prev'} width={80} height={80} className={' object-contain '} />
        </div>
        <div className="font-metropolis text-xl font-extralight md:text-2xl">01/10</div>
        <div className="project-btn flex cursor-pointer items-center duration-200 hover:scale-125">
          <Img src={NextArrowProject} alt={'prev'} width={80} height={80} className={' object-contain '} />
          <div className="h-14 w-14 -translate-x-[50%] rounded-full border"></div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
