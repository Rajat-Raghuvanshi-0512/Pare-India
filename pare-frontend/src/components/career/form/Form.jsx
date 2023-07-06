import { Button } from '../../custom'

const CareerForm = () => {
  const inputStyle = 'w-full rounded-sm bg-[#D9D9D940] p-2 font-montserrat outline-none text-sm mt-1'
  const labelStyle = 'block font-montserrat font-semibold'
  return (
    <div className="mx-5 md:mx-10 md:mt-5 lg:mx-20">
      <h3 className="mx-5 text-center font-montserrat text-3xl font-bold text-red-base md:m-0 md:my-10 md:text-left md:text-4xl lg:text-5xl">
        Embark on a new journey with PARÉ.
      </h3>
      <p className="my-3 text-center font-montserrat text-xs md:text-left md:text-lg lg:text-xl">
        Begin a rewarding journey with us, where your passion and motivation thrive. Apply below to join our team and we
        look forward to connecting with you and discovering your unique talents.
      </p>
      <div>
        <p className="my-5 hidden font-montserrat font-medium italic text-red-base md:block">* stands for required</p>
      </div>
      <form className="mb-5 grid grid-cols-1 md:my-10 md:grid-cols-3 md:gap-5 lg:gap-x-16">
        <div className="mb-5">
          <label htmlFor="fname" className={labelStyle}>
            First Name <span className="text-red-base">*</span>
          </label>
          <input type="text" name="fname" id="fname" className={inputStyle} placeholder="Your First Name" />
        </div>
        <div className="mb-5">
          <label htmlFor="fname" className={labelStyle}>
            Last Name <span className="text-red-base">*</span>
          </label>
          <input type="text" name="fname" id="fname" className={inputStyle} placeholder="Your Last Name" />
        </div>
        <div className="mb-5">
          <label htmlFor="fname" className={labelStyle}>
            Email <span className="text-red-base">*</span>
          </label>
          <input type="email" name="fname" id="fname" className={inputStyle} placeholder="ex: name@example.com" />
        </div>
        <div className="mb-5">
          <label htmlFor="fname" className={labelStyle}>
            Phone Number <span className="text-red-base">*</span>
          </label>
          <input type="text" name="fname" id="fname" className={inputStyle} placeholder="+91 XXXX XXXX XX" />
        </div>
        <div className="mb-5">
          <label htmlFor="fname" className={labelStyle}>
            Education <span className="text-red-base">*</span>
          </label>
          <input type="text" name="fname" id="fname" className={inputStyle} placeholder="ex: BTech, MTech, BA, etc" />
        </div>
        <div className="mb-5">
          <label htmlFor="fname" className={labelStyle}>
            Position <span className="text-red-base">*</span>
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            className={inputStyle}
            placeholder="Position you are applying for"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="fname" className={labelStyle}>
            Gender <span className="text-red-base">*</span>
          </label>
          <input type="text" name="fname" id="fname" className={inputStyle} placeholder="Male/Female/Others" />
        </div>
        <div className="mb-5">
          <label htmlFor="fname" className={labelStyle}>
            Years of experience <span className="text-red-base">*</span>
          </label>
          <input type="text" name="fname" id="fname" className={inputStyle} placeholder="ex: 5" />
        </div>
        <div className="mb-5">
          <label htmlFor="fname" className={labelStyle}>
            Upload your CV <span className="text-red-base">*</span>
          </label>
          <input type="file" name="fname" id="fname" className="mt-3" />
        </div>
        <div className="mb-5  md:col-span-3">
          <label htmlFor="fname" className={labelStyle}>
            Why should we hire you? <span className="text-red-base">*</span>
          </label>
          <textarea
            name="fname"
            id="fname"
            className={`${inputStyle} mt-2 h-[150px] resize-none`}
            placeholder="Type your answer here..."
          />
        </div>
        <Button className={'w-fit !px-10 !py-1'}>Submit</Button>
      </form>
    </div>
  )
}

export default CareerForm
