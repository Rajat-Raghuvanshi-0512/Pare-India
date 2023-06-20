import { LazyLoadImage } from 'react-lazy-load-image-component'
const Img = ({ alt, src, height, width, className, ...props }) => {
  return (
    <LazyLoadImage alt={alt} height={height} src={src} width={width} className={className} threshold={600} {...props} />
  )
}

export default Img
