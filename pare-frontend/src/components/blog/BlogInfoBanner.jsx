import { Blog1Avatar, Blog1BannerImg } from '../../assets'

const BlogInfoBanner = () => {
  return (
    <section className="p-5 pt-14 md:p-10 lg:p-20 lg:pb-0 lg:pt-24">
      <div className="md:ml-20 lg:ml-40">
        <img src={Blog1BannerImg} alt="banner" className="w-full" />
        <div className="w-[95%] -translate-x-[5%] -translate-y-[20%] bg-red-base text-white md:p-10">
          <div className="font-montserrat uppercase">May 2023</div>
          <div className="border-b border-b-[#B0B0A8] py-5 font-metropolis font-bold md:text-3xl lg:text-4xl">
            5 Creative Ways to Incorporate Tiles into Your Interior Design
          </div>
          <div className="mt-3 flex items-center gap-5">
            <img src={Blog1Avatar} alt="avatar" width={60} />
            <div>
              <h6>John</h6>
              <p>Personal Finance Writer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogInfoBanner
