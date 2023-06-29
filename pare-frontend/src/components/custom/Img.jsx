import { LazyLoadImage } from 'react-lazy-load-image-component'
const Img = ({ alt, src, height, width, srcSet, className, ...props }) => {
  return (
    <img
      alt={alt}
      height={height}
      src={src}
      srcSet={srcSet}
      width={width}
      className={className}
      // threshold={600}
      {...props}
    />
  )
}

export default Img
