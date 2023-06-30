import { LampDesk } from '../assets'
import Loader from '../components/Loader'
import { ContactForm, ContactInfo, Map } from '../components/contact'
import { useImagePreloader } from '../utils/custom-hooks'

const Contact = () => {
  const { loading } = useImagePreloader([LampDesk])
  if (loading) return <Loader />
  return (
    <div className="-z-20 bg-black-base text-white">
      <div className="z-10 p-5  pt-20 md:p-16 lg:p-20 lg:pt-28 2xl:px-40">
        <ContactInfo />
      </div>
      <ContactForm />
      <Map />
    </div>
  )
}

export default Contact
