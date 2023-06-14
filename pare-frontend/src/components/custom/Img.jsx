import { LazyLoadImage } from 'react-lazy-load-image-component'
const Img = ({ alt, src, height, width, className, ...props }) => {
  return (
    <LazyLoadImage
      alt={alt}
      height={height}
      src={src} // use normal <img> attributes as props
      width={width}
      className={className}
      {...props}
    />
  )
}

export default Img
