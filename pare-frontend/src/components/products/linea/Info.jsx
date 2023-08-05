import { LineaBlurBg } from '../../../assets'
import { Img } from '../../custom'

const data = [
  'Impact resistance: No deformation observed. (Tested at 50 LBS)',
  'Tensile strength, MPa: >37.0',
  'Tensile modulus, MPa: >2000',
  'Surface distortion: None at 120F',
  " Squareness: <1/8' of square",
  " Length: Within 1/4' of specification",
  'Lock control: Complies',
  'Color Change: <2 grayscales (16 hrs under 1200W/m2 UV radiation at 50 degrees)',
]

const Info = () => {
  return (
    <div className="relative -mb-7 px-5 py-10 text-white md:h-[600px] md:p-20">
      <Img
        src={LineaBlurBg}
        alt={'bur-bg'}
        className={'absolute left-0 top-0 -z-10 -mt-5 h-full w-screen object-cover'}
      />
      <div>
        <h2 className="font-metropolis text-4xl font-black !leading-snug md:text-center md:text-4xl lg:text-5xl">
          STAYS WITH YOU <br /> THROUGH THICK AND THIN
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <h4 className="font-metropolis text-xl font-bold uppercase text-red-base drop-shadow-lg md:text-3xl">
              Product Details
            </h4>
            <p className="mt-4 font-montserrat font-semibold lg:text-xl">PRODUCT CODE-112</p>
            <p className="mt-4 font-montserrat font-semibold lg:text-xl">
              SIZING <br /> 180mm x 3060mm
            </p>
            <p className="mt-4 font-montserrat font-semibold lg:text-xl">
              AVAILABLE IN <br /> 13 Shades <br /> 4 Collections
            </p>
          </div>
          <div>
            <h4 className="font-metropolis text-xl font-bold uppercase text-red-base drop-shadow-lg md:text-3xl">
              TECHNICAL DECLARATIONS
            </h4>
            <ul className="mt-3 list-disc">
              {data.map((item) => (
                <li key={item} className="lg:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
