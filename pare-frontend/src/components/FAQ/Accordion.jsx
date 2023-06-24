import { useState } from 'react'
import { MinusCircle, PlusCircle } from '../../assets'

const Accordion = ({ heading, body }) => {
  const [showBody, setShowBody] = useState(false)
  return (
    <div>
      <div className="flex justify-between gap-5 border-b-[3px] border-red-base py-5 md:py-10">
        <h3 className={`font-metropolis text-xl md:text-3xl lg:text-4xl ${showBody ? 'font-bold' : 'font-medium'} `}>
          {heading}
        </h3>
        <div className="cursor-pointer" onClick={() => setShowBody(!showBody)}>
          {showBody ? <img src={MinusCircle} alt="plus" width={40} /> : <img src={PlusCircle} alt="plus" width={40} />}
        </div>
      </div>
      <div
        className={`border-b-[3px] border-red-base py-5 font-montserrat font-medium md:py-10 ${!showBody && 'hidden'} `}
      >
        {body}
      </div>
    </div>
  )
}

export default Accordion
