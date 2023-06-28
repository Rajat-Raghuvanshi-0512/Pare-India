import { ContactAvatar, DownArrow, FAQS } from '../../assets'
import Button from '../custom/Button'
import Accordion from './Accordion'

const FaqData = [
  {
    heading: 'How do I connect with the company?',
    body: 'Yes, absolutely! We encourage our customers to incorporate their own existing decor into the design process. It helps personalize the space and creates a sense of familiarity. Our talented designers can work with you to seamlessly integrate your beloved pieces with our design vision, ensuring a cohesive and harmonious result.',
  },
  {
    heading: 'How do I choose the right color scheme for my space?',
    body: 'Yes, absolutely! We encourage our customers to incorporate their own existing decor into the design process. It helps personalize the space and creates a sense of familiarity. Our talented designers can work with you to seamlessly integrate your beloved pieces with our design vision, ensuring a cohesive and harmonious result.',
  },
  {
    heading: 'Can I work with my own my existing decor?',
    body: 'Yes, absolutely! We encourage our customers to incorporate their own existing decor into the design process. It helps personalize the space and creates a sense of familiarity. Our talented designers can work with you to seamlessly integrate your beloved pieces with our design vision, ensuring a cohesive and harmonious result.',
  },
  {
    heading: 'What can I expect during the initial design consultation?',
    body: 'Yes, absolutely! We encourage our customers to incorporate their own existing decor into the design process. It helps personalize the space and creates a sense of familiarity. Our talented designers can work with you to seamlessly integrate your beloved pieces with our design vision, ensuring a cohesive and harmonious result.',
  },
  {
    heading: 'How do I choose the right color scheme?',
    body: 'Yes, absolutely! We encourage our customers to incorporate their own existing decor into the design process. It helps personalize the space and creates a sense of familiarity. Our talented designers can work with you to seamlessly integrate your beloved pieces with our design vision, ensuring a cohesive and harmonious result.',
  },
  {
    heading: 'What can I expect during the design consultation?',
    body: 'Yes, absolutely! We encourage our customers to incorporate their own existing decor into the design process. It helps personalize the space and creates a sense of familiarity. Our talented designers can work with you to seamlessly integrate your beloved pieces with our design vision, ensuring a cohesive and harmonious result.',
  },
]

const FAQSection1 = () => {
  return (
    <section>
      <div className="p-5 pt-20 md:p-10 md:pt-32 lg:p-20 2xl:px-40">
        <h2 className="w-[50%] font-metropolis text-3xl font-bold !leading-snug md:mx-10 md:w-full md:text-center md:text-3xl lg:text-[5rem]">
          YOU HAVE QUESTIONS <br /> WE HAVE <span className="italic text-red-base">ANSWERS.</span>
        </h2>
        <div className="hidden justify-between border-b-2 border-red-base py-5 font-metropolis text-red-base md:flex md:py-10">
          <div>SCROLL TO EXPLORE.</div>
          <div>
            <img src={DownArrow} alt="down" className="h-[40px]" />
          </div>
        </div>
      </div>
      <div className="mx-5 mt-5 flex gap-5 pr-5 md:mt-10 md:gap-10 md:pr-10 lg:gap-20 lg:pr-20 2xl:pr-40">
        <div className="absolute md:static">
          <img src={FAQS} alt="faq" width={200} className="w-[130px] md:w-[200px]" />
        </div>
        <div className="w-full">
          {FaqData.map((item) => (
            <Accordion key={item.heading} {...item} />
          ))}
        </div>
      </div>
      <div className="mt-5 flex justify-end pr-10 lg:pr-20 2xl:pr-40">
        <Button>Load more</Button>
      </div>
      <div className="mt-5 flex items-center justify-between bg-red-base p-5 text-white md:mt-10 md:p-10 lg:px-20 2xl:px-40">
        <div className="flex gap-5">
          <img
            src={ContactAvatar}
            alt="contact"
            width={75}
            height={75}
            className="h-[60px] w-[60px] md:h-[75px] md:w-[75px]"
          />
          <div>
            <h5 className="font-montserrat text-xl font-medium md:text-2xl lg:text-3xl">Still have questions?</h5>
            <p className="mt-3 w-[80%] font-metropolis text-xs md:w-full md:text-sm">
              Can&apos;t find the answer you&apos;re looking for? Please contact our friendly team.
            </p>
          </div>
        </div>
        <div>
          <Button className={'!bg-white !text-red-base hover:!scale-105'}>Contact Us</Button>
        </div>
      </div>
    </section>
  )
}

export default FAQSection1
