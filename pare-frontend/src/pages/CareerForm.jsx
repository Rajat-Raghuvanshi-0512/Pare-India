import { Suspense } from 'react'
import { LastSection } from '../components'
import { Form, Banner } from '../components/career'
import { Loader } from '../components'

const CareerForm = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Banner />
      <Form />
      <LastSection
        dark={false}
        btnText={'send mail'}
        mainText={'Want to contact us directly? feel free to send a mail.'}
        btnRoute={'mailto:hello@pareindia.com'}
        showOnMobile={true}
      />
    </Suspense>
  )
}

export default CareerForm
