import {
  Product1BannerImg,
  Product1BannerPhoneImg,
  Product1Img1,
  Product1Img11,
  Product1Img2,
  Product1Img21,
  Product1Img3,
  Product1Img31,
  Product1SideImg,
  Product2BannerImg,
  Product2BannerPhoneImg,
  Product2Img,
  Product2Img1,
  Product2Img11,
  Product2Img2,
  Product2Img21,
  Product2SideImg,
  Product3Img1,
  Product3Img11,
  Product3Img2,
  Product3Img21,
  Product3Img3,
  Product3Img31,
  Product3Img4,
  Product3Img41,
  Product3Img5,
  Product3Img51,
  Product4BannerImg,
  Product4Img,
  Product4SideImg,
  TrimWoodBg1,
} from '../assets'

export const productsData = {
  1: {
    bannerSection: {
      bannerPhoneImg: Product1BannerPhoneImg,
      bannerImg: Product1BannerImg,
      headText: 'PARE INDIA BRINGS TO YOU',
      mainText: 'FIRST TIME IN THE WORLD',
    },
    section1data: {
      mainImage: Product1Img1,
      sideImage: Product1SideImg,
      techName: 'EASY+ TECHNOLOGY',
      techDesc:
        'This technology ensures quick, dust and dirt free installations. This technology ensures quick, dust and dirt free installations.',
      variants: 3,
    },
    section2data: [
      {
        type: 'Linea',
        desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        highlights: ['Easy to install', 'Recyclable', 'Advance Interlocking'],
        productImgs: [Product1Img1, Product1Img2, Product1Img3],
        productShades: [Product1Img11, Product1Img21, Product1Img31],
        pageLink: '/linea',
      },
      {
        type: 'Pyramid',
        desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        highlights: ['Easy to install', 'Anti-bacterial', 'Termite Proof & Rust Proof'],
        productImgs: [Product1Img1, Product1Img2, Product1Img3],
        productShades: [Product1Img11, Product1Img21, Product1Img31],
        pageLink: '/pyramid',
      },
      {
        type: 'Arch',
        desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        highlights: ['Easy to install', 'Advance Interlocking', 'No Ply required Can Be Screwed Directly on the walls'],
        productImgs: [Product1Img1, Product1Img2, Product1Img3],
        productShades: [Product1Img11, Product1Img21, Product1Img31],
        pageLink: '/arch',
      },
    ],
  },
  2: {
    bannerSection: {
      bannerPhoneImg: Product2BannerPhoneImg,
      bannerImg: Product2BannerImg,
      headText: 'PARE INDIA BRINGS TO YOU',
      mainText: 'FIRST TIME IN THE WORLD',
    },
    section1data: {
      mainImage: Product2Img,
      sideImage: Product2SideImg,
      techName: 'DURA+ TECHNOLOGY',
      techDesc:
        'Dura+ is the epitome of strength and durability for your exterior facade needs. With its robust construction and weather-resistant properties, Dura+ offers long-lasting protection and stunning aesthetics.',
      variants: 2,
    },
    section2data: [
      {
        type: 'Norma',
        desc: 'panels make you experience the perfect blend of durability and aesthetics with Norma. These decorative panels are meticulously crafted to provide a long-lasting solution for your exterior facades.',
        highlights: ['Superior Quality', 'Long Life', 'UV Resistant'],
        productImgs: [Product2Img1, Product2Img2],
        productShades: [Product2Img11, Product2Img21],
        pageLink: '/linea',
      },
      {
        type: 'Stretta',
        desc: 'panels help you achieve a flawless and refined look for your exterior wall cladding with Stretta. These panels boast a smooth and resilient surface, engineered to withstand scratches and impacts.',
        highlights: ['High Impact Resistance', 'Recyclable', 'Termite Proof & Rust Proof'],
        productImgs: [Product2Img1, Product2Img2],
        productShades: [Product2Img11, Product2Img21],
        pageLink: '/linea',
      },
    ],
  },
  3: {
    bannerSection: {
      bannerPhoneImg: Product1BannerPhoneImg,
      bannerImg: Product1BannerImg,
      headText: 'PARE INDIA BRINGS TO YOU',
      mainText: 'FIRST TIME IN THE WORLD',
    },
    section1data: {
      mainImage: Product1Img1,
      sideImage: Product1SideImg,
      techName: 'INNOV+ TECHNOLOGY',
      techDesc:
        'Experience transformative spaces with Innov+, the ultimate wall and ceiling system. Enhance aesthetics and functionality seamlessly with cutting-edge innovation. Elevate your space and embrace the future of interior design.',
      variants: 5,
    },
    section2data: [
      {
        type: 'Grande',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, ligula non ullamcorper condimentum, lectus ex viverra dolor,',
        highlights: ['Easy to install', 'Recyclable', 'Advance Interlocking'],
        productImgs: [Product3Img1, Product3Img2, Product3Img3, Product3Img4, Product3Img5],
        productShades: [Product3Img11, Product3Img21, Product3Img31, Product3Img41, Product3Img51],
        pageLink: '/linea',
      },
      {
        type: 'Duo',
        desc: "- India's first polymer-based wall and ceiling system. Easy installation, maintenance-free, waterproof, and fire retardant. Elevate your space with our versatile collections and enjoy a seamless, hassle-free solution.",
        highlights: ['Unique Interlocking', 'Fire Retardant', 'Light Weight'],
        productImgs: [Product3Img1, Product3Img2, Product3Img3, Product3Img4, Product3Img5],
        productShades: [Product3Img11, Product3Img21, Product3Img31, Product3Img41, Product3Img51],
        pageLink: '/linea',
      },
      {
        type: 'Soffit',
        desc: 'offer the visual appeal of real wood without the drawbacks. Enjoy quick and easy installation with a seamless finish, transforming your space effortlessly.',
        highlights: ['No VOC Emission', 'Waterproof', 'Real Wood Feel'],
        productImgs: [Product3Img1, Product3Img2, Product3Img3, Product3Img4, Product3Img5],
        productShades: [Product3Img11, Product3Img21, Product3Img31, Product3Img41, Product3Img51],
        pageLink: '/linea',
      },
      {
        type: 'Louvers',
        desc: '- with their durability and waterproof features, they are perfect for various applications. The seamless interlocking system ensures a flawless finish, allowing them to integrate seamlessly with other PARÉ products.',
        highlights: ['Fire Retardant', 'Maintenance Free', '10 Years Warranty'],
        productImgs: [Product3Img1, Product3Img2, Product3Img3, Product3Img4, Product3Img5],
        productShades: [Product3Img11, Product3Img21, Product3Img31, Product3Img41, Product3Img51],
        pageLink: '/linea',
      },
      {
        type: 'Vertica',
        desc: 'panels, the smart and easy-to-install solution for walls and ceilings. Experience a seamless and efficient installation process, while enjoying the benefits of low maintenance and reduced wastage.',
        highlights: ['Sleek Design', 'Impact Resistance', 'Unique Interlocking'],
        productImgs: [Product3Img1, Product3Img2, Product3Img3, Product3Img4, Product3Img5],
        productShades: [Product3Img11, Product3Img21, Product3Img31, Product3Img41, Product3Img51],
        pageLink: '/linea',
      },
    ],
  },
  4: {
    bannerSection: {
      bannerPhoneImg: Product4BannerImg,
      bannerImg: Product4BannerImg,
      headText: 'PARE INDIA BRINGS TO YOU',
      mainText: 'FIRST TIME IN THE WORLD',
    },
    section1data: {
      mainImage: Product4Img,
      sideImage: Product4SideImg,
      techName: 'INNOV2+ TECHNOLOGY',
      techDesc:
        'Presenting Innov2+, an extraordinary fusion of innovation and excellence, poised to revolutionize your spaces with contemporary elegance and state-of-the-art functionality.',
      variants: 1,
    },
    section2data: [
      {
        type: 'Wave',
        desc: 'panels inspired by the graceful movement of ocean waves, these innovative panels add a touch of elegance and sophistication to any interior surfaces.',
        highlights: ['Easy to install', 'Recyclable', 'Advance Interlocking'],
        productImgs: [Product3Img1, Product3Img2, Product3Img3, Product3Img4, Product3Img5],
        productShades: [Product3Img11, Product3Img21, Product3Img31, Product3Img41, Product3Img51],
        pageLink: '/linea',
      },
    ],
  },
}

// Blog Data
export const blogData = [
  {
    title: '5 Creative Ways to Incorporate Tiles into Your Interior Design',
    image: TrimWoodBg1,
    isRed: true,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
    id: 1,
  },
  {
    title: 'Expert Tips from Our Design Team',
    image: TrimWoodBg1,
    isRed: true,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
    id: 2,
  },
  {
    title: 'From Bold Patterns to Subtle Textures: Exploring the Versatility of Interior Design Tiles',
    image: TrimWoodBg1,
    isRed: true,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
    id: 3,
  },
  {
    title: 'Revamp Your Home with Unique and Beautiful Tile Designs: Our Top Picks',
    image: TrimWoodBg1,
    isRed: false,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
    id: 4,
  },
  {
    title: "Tile Trends 2023: What's Hot and What's Not in Interior Design",
    image: TrimWoodBg1,
    isRed: true,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
    id: 5,
  },
  {
    title: "Tile Trends 2023: What's Hot and What's Not in Interior Designs",
    image: TrimWoodBg1,
    isRed: false,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
    id: 6,
  },
  {
    title: "Tile Trends 2023: What's Hot and What's Not in Interior Designss",
    image: TrimWoodBg1,
    isRed: true,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
    id: 7,
  },
  {
    title: "Tile Trends 2023: What's Hot and What's Not in Interior Designsss",
    image: TrimWoodBg1,
    isRed: false,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
    id: 8,
  },
  {
    title: '5 Creative Ways to Incorporate Tiles into Your Interior Designsss',
    image: TrimWoodBg1,
    isRed: true,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
    id: 9,
  },
  {
    title: 'Expert Tips from Our Design Teams',
    image: TrimWoodBg1,
    isRed: true,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
    id: 10,
  },
  {
    title: 'From Bold Patterns to Subtle Textures: Exploring the Versatility of Interior Dessign Tiles',
    image: TrimWoodBg1,
    isRed: true,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
    id: 11,
  },
  {
    title: 'Revamp Your Home with Unique and Beautiful Tile Designs: Our Top Piicks',
    image: TrimWoodBg1,
    isRed: false,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
    id: 12,
  },
  {
    title: "Tile Trends 2023: What's Hot and What's Not in Interior Deesign",
    image: TrimWoodBg1,
    isRed: true,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
    id: 13,
  },
  {
    title: "Tile Trends 2023: What's Hot and What's Not in Interior Dessign",
    image: TrimWoodBg1,
    isRed: false,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
    id: 14,
  },
  {
    title: "Tile Trends 2023: What's Hot and What's Not in Innterior Design",
    image: TrimWoodBg1,
    isRed: false,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
    id: 15,
  },
  {
    title: "Tile Trends 2023: What's Hot and What's Not in Intterior Design",
    image: TrimWoodBg1,
    isRed: false,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
    id: 16,
  },
  {
    title: "Tile Trends 2023: What's Hot and What's Not in Inteerior Design",
    image: TrimWoodBg1,
    isRed: false,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
    id: 17,
  },
  {
    title: "Tile Trends 2023: What's Hot and What's Not in Interiior Design",
    image: TrimWoodBg1,
    isRed: true,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
    id: 18,
  },
  {
    title: "Tile Trends 2023: What's Hot and What's Not in Interiorrr Design",
    image: TrimWoodBg1,
    isRed: false,
    issuedBy: 'Pare India 2023',
    month: 'May 2023',
    id: 19,
  },
]
