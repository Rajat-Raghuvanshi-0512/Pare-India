import { ContactBg, LampDesk } from '../assets'
import Loader from '../components/Loader'
import { ContactForm, ContactInfo, Map } from '../components/contact'
import { useImagePreloader } from '../utils/custom-hooks'

const Contact = () => {
  const { loading } = useImagePreloader([LampDesk])
  if (loading) return <Loader />
  return (
    <>
      <div className="relative z-0 overflow-clip bg-black-base text-white">
        <img src={ContactBg} alt="contact-bg" className="absolute left-0 top-0 -z-[1]" />
        <div className=" p-5 pt-20 md:p-16 lg:p-20 lg:pt-28 2xl:px-40">
          <ContactInfo />
        </div>
        <ContactForm />
        <Map />
      </div>
    </>
  )
}

export default Contact
