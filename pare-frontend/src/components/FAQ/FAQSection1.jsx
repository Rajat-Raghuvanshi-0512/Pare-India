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
    heading: 'How do I choose the right color scheme for my space?',
    body: 'Yes, absolutely! We encourage our customers to incorporate their own existing decor into the design process. It helps personalize the space and creates a sense of familiarity. Our talented designers can work with you to seamlessly integrate your beloved pieces with our design vision, ensuring a cohesive and harmonious result.',
  },
  {
    heading: 'What can I expect during the initial design consultation?',
    body: 'Yes, absolutely! We encourage our customers to incorporate their own existing decor into the design process. It helps personalize the space and creates a sense of familiarity. Our talented designers can work with you to seamlessly integrate your beloved pieces with our design vision, ensuring a cohesive and harmonious result.',
  },
]

const FAQSection1 = () => {
  return (
    <section>
      <div className="p-5 md:p-10 lg:p-20 lg:pt-32 2xl:px-40">
        <h2 className="mx-10 text-center font-metropolis text-xl font-bold !leading-snug md:text-3xl lg:text-7xl">
          YOU HAVE QUESTIONS <br /> WE HAVE <span className="italic text-red-base">ANSWERS.</span>
        </h2>
        <div className="flex justify-between border-b-2 border-red-base py-5 font-metropolis text-red-base md:py-10">
          <div>SCROLL TO EXPLORE.</div>
          <div>
            <img src={DownArrow} alt="down" className="h-[40px]" />
          </div>
        </div>
      </div>
      <div className="mt-5 flex gap-5 pr-5 md:mt-10 md:gap-10 md:pr-10 lg:gap-20 lg:pr-20 2xl:pr-40">
        <div>
          <img src={FAQS} alt="faq" width={200} />
        </div>
        <div className="w-full">
          {FaqData.map((item) => (
            <Accordion key={item.heading} {...item} />
          ))}
        </div>
      </div>
      <div className="mt-5 flex justify-end lg:pr-20 2xl:pr-40">
        <Button>Load more</Button>
      </div>
      <div className="mt-5 flex items-center justify-between bg-red-base p-5 text-white md:mt-10 md:p-10 lg:px-20 2xl:px-40">
        <div className="flex gap-5">
          <img src={ContactAvatar} alt="contact" width={75} />
          <div>
            <h5 className="font-montserrat text-xl md:text-2xl lg:text-3xl">Still have questions?</h5>
            <p className="mt-3 font-metropolis text-sm">
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
