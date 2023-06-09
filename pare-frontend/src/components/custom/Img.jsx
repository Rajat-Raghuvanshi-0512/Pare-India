import { LazyLoadImage } from 'react-lazy-load-image-component'
const Img = ({ alt, src, height, width, className }) => {
  return (
    <LazyLoadImage
      alt={alt}
      height={height}
      src={src} // use normal <img> attributes as props
      width={width}
      className={className}
    />
  )
}

export default Img
