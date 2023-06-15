import { ContactForm, ContactInfo, Map } from '../components/contact'

const Contact = () => {
  return (
    <div className="bg-black-base p-5 pt-20 text-white md:p-16 lg:p-20 lg:pt-28 2xl:px-40">
      <ContactInfo />
      <ContactForm />
      <Map />
    </div>
  )
}

export default Contact
