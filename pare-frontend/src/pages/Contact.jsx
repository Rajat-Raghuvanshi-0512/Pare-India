import { ContactForm, ContactInfo, Map } from '../components/contact'

const Contact = () => {
  return (
    <div className="bg-black-base text-white">
      <div className="p-5 pt-20  md:p-16 lg:p-20 lg:pt-28 2xl:px-40">
        <ContactInfo />
      </div>
      <ContactForm />
      <Map />
    </div>
  )
}

export default Contact
