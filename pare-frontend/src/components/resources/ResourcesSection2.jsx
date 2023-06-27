import { ResourceImg1, ResourceImg2, ResourceImg3, ResourceImg4, ResourceImg5 } from '../../assets'
import DownloadSlider from './DownloadSlider'

const images = [
  { image: ResourceImg1, text: 'Forest Collection' },
  { image: ResourceImg2, text: 'Real Wood Collection' },
  { image: ResourceImg3, text: 'Wooden Collection' },
  { image: ResourceImg4, text: 'Soffit Louvers' },
  { image: ResourceImg5, text: 'Art Stone Panels' },
]

const ResourcesSection2 = () => {
  return (
    <section>
      {images.map((imageObj) => (
        <DownloadSlider key={imageObj.text} {...imageObj} />
      ))}
    </section>
  )
}

export default ResourcesSection2
