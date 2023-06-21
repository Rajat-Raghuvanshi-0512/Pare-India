import { LastSection } from '../components'
import { Form, Banner } from '../components/career'

const CareerForm = () => {
  return (
    <>
      <Banner />
      <Form />
      <LastSection
        dark={false}
        btnText={'send mail'}
        mainText={'Want to contact us directly? feel free to send a mail.'}
        btnRoute={'mailto:hello@pareindia.com'}
        showOnMobile={true}
      />
    </>
  )
}

export default CareerForm
