import { DownArrow } from '../../assets'

const FAQSection1 = () => {
  return (
    <section className="p-5 md:p-10 lg:p-20">
      <h2 className="mx-10 text-center font-metropolis text-xl font-bold !leading-snug md:text-3xl lg:text-7xl">
        YOU HAVE QUESTIONS <br /> WE HAVE <span className="italic text-red-base">ANSWERS.</span>
      </h2>
      <div className="flex justify-between border-b-2 border-red-base py-5 font-metropolis text-red-base md:py-10">
        <div>SCROLL TO EXPLORE.</div>
        <div>
          <img src={DownArrow} alt="down" />
        </div>
      </div>
    </section>
  )
}

export default FAQSection1
