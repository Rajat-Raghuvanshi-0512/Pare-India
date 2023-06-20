import { ContactBg } from '../assets'
import { ContactForm, ContactInfo, Map } from '../components/contact'

const Contact = () => {
  return (
    <div className="-z-20 bg-black-base text-white">
      {/* <img src={ContactBg} alt="contact-bg" className="absolute -z-20 h-[300vh] w-screen object-contain" /> */}
      <div className="z-10 p-5  pt-20 md:p-16 lg:p-20 lg:pt-28 2xl:px-40">
        <ContactInfo />
      </div>
      <ContactForm />
      <Map />
    </div>
  )
}

export default Contact
