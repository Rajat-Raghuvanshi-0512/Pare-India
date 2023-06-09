import { ChatIcon } from '../assets'
import { Img } from './custom'

const ContactFloatBtn = () => {
  return (
    <div className="fixed bottom-10 right-10">
      <div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-red-base text-white">
        <Img src={ChatIcon} alt={'chat'} width={30} height={30} />
      </div>
    </div>
  )
}

export default ContactFloatBtn
