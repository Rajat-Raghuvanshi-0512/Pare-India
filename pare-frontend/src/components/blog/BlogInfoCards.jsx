import { Blog1Avatar, Blog1Img1, Blog1Img2, Blog1Img3 } from '../../assets'

const blogCardData = [
  {
    image: Blog1Img1,
    category: 'Shopping Around',
    title: 'Expert Tips from Our Design Team',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    creatorProfile: Blog1Avatar,
    creatorName: 'Jasmin',
    creatorInfo: 'Personal Finance Writer',
    id: 1,
  },
  {
    image: Blog1Img2,
    category: 'Shopping Around',
    title: 'Beautiful Tile Designs: Our Top Picks',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    creatorProfile: Blog1Avatar,
    creatorName: 'Jasmin',
    creatorInfo: 'Personal Finance Writer',
    id: 2,
  },
  {
    image: Blog1Img3,
    category: 'Shopping Around',
    title: 'Tips and Tricks for a Professional-looking Finish',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    creatorProfile: Blog1Avatar,
    creatorName: 'Jasmin',
    creatorInfo: 'Personal Finance Writer',
    id: 3,
  },
]
const BlogCard = ({ image, category, title, desc, creatorProfile, creatorName, creatorInfo }) => {
  return (
    <div className="flex flex-col font-inter">
      <img src={image} alt="blogpost" loading="lazy" className="w-full object-cover" />
      <p className="py-3 text-sm font-bold uppercase">{category}</p>
      <h6 className="text-2xl font-bold">{title}</h6>
      <p className="py-3 text-sm text-[#5D5D5C]">{desc}</p>
      <div className="my-2 h-[2px] bg-red-base" />
      <div className="mt-3 flex items-center gap-3 lg:text-sm">
        <img src={creatorProfile} alt="avatar" width={40} />
        <div>
          <h6 className="font-bold">{creatorName}</h6>
          <p>{creatorInfo}</p>
        </div>
      </div>
    </div>
  )
}

const BlogInfoCards = () => {
  return (
    <div className="hidden grid-cols-3 md:grid lg:gap-12 lg:px-20">
      {blogCardData.map((blogdata) => (
        <BlogCard key={blogdata.id} {...blogdata} />
      ))}
    </div>
  )
}

export default BlogInfoCards