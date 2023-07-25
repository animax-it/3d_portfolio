import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  facemesh,
  marvel,
  fletnix,
  memories,
  sentiment,
  link,bit,ev,pb,
animeshresume,
aniresume
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const resume = [
  {aniresume: "aniresume",
animeshresume: "animeshresume"}
]
const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Musician",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "{Pinkblue Supply Solutions}",
    icon: pb,
    iconBg: "#383E56",
    date: "Feb 2022 - Present",
    points: [
      "Implemented single-click WhatsApp login, speeding up the process from 1 minute to 10 seconds, resulting in improved user engagement and onboarding efficiency.",

      "Integrated Google Maps API to automate delivery information entry, reducing the time taken from 2 minutes to 5 seconds, while improving address accuracy.",
      
      "Designed a custom coupon page, resulting in a 10% increase in coupon utilization, fostering customer loyalty.",
      
      "Revamped the product image viewer, improving UI elements, zoom functionality, and integrating video support, enhancing the overall website experience.",
      
      "Enhanced website engagement and conversions by adapting the Progressive Web App (PWA) for desktop screens.",
      
      "Implemented advanced product search and customer review sections, improving user experience, and facilitating relevant product discovery and customer feedback."
    ],
  },
  {
    title: "SOFTWARE ENGINEER",
    company_name: "Eagleview",
    icon: ev,
    iconBg: "#E6DEDD",
    date: "Nov 2020 - Dec 2022",
    points: [
      "Worked on tools to automate a manual process of capturing screenshots by the IG team saving 70 hours per week for the team.",

      "HTML, CSS, JavaScript and ReactJS for responsive web development and CI-CD pipelines using Vercel.",
      
      "Developed UI integration for web applications of new products.",
      
      "Connect with teammates and FTOs maintaining smooth workflow operations." 
    ],
  },
  {
    title: "BACHELOR OF ENGINEERING",
    company_name: "BIT BANGALORE",
    icon: bit,
    iconBg: "#383E56",
    date: "2015 - 2019",
    points: [
      "Civil Engineering. Carried out projects like town planning, Highway, water quality assessment etc.",
  
    ],
  },

  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-Commerce",
    description:
      "Implemented and deployed a full stack Ecommerce website with basic products, cart and payment functionality using NextJS. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: marvel,
    source_code_link: "https://github.com/animax-it/ecommerce",
    web_link: "https://ecommerce-animesh.vercel.app/"
  },
  {
    name: "memories",
    description:
      "Social Media App built using React-Redux and MERN stack",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: memories,
    source_code_link: "https://github.com/animax-it/memories",
    web_link: "https://memories-client-w1vb.onrender.com/"

  },
  {
    name: "Fletnix",
    description:
      "An app that helps you sort out what to watch when looking for a particular genre or cast according to your mood.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: fletnix,
    source_code_link: "https://github.com/animax-it/fletnix_frontend",
    web_link: "https://fletix-frontend.netlify.app/"
  },
  {
    name: "Facemesh",
    description:
      "Real-time AI face landmark detection using TensorFlow and React.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: facemesh,
    source_code_link: "https://github.com/animax-it/facemesh",
    web_link: "https://ani-facemesh.netlify.app/"
  },
  {
    name: "Sentilyzer",
    description:
      "Implemented a sentiment analyzer UI which displays the nature of the sentence input by the user using NLTK and React. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "NLTK",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: sentiment,
    source_code_link: "https://github.com/animax-it/sentilizer",
    web_link: "https://github.com/animax-it/sentilizer"

  },

];

export { resume, services, technologies, experiences, testimonials, projects };
