import { Link } from '@chakra-ui/react'

export type Company = 'Deloitte' | 'SCG' 

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Deloitte: {
    name: 'Homains',
    longName: 'Homians Pvt. Ltd.',
    subDetail: 'Consulthing Phils. Delivery Center',
    url: '',
    position: 'Frontend Developer',
    duration: 'March 2022 - May 2022',
    logo: {
      light: 'https://tse2.mm.bing.net/th?id=OIP.UVdl71ktz6SbfgvNbfGqMwHaF4&pid=Api&P=0&h=180',
      dark: 'https://tse2.mm.bing.net/th?id=OIP.UVdl71ktz6SbfgvNbfGqMwHaF4&pid=Api&P=0&h=180',
    },
    roles: [
      <>
        Started early March.{' '}
      </>,
      <>
        Worked as a Frontend Developer on new{' '}
        <Link
          aria-label="Deloitte Digital AU"
          href="https://www.deloittedigital.com.au/"
          target="_blank"
          rel="noreferrer"
        >
          Homians Pvt. Ltd.

        </Link>
      </>,
      <>
      Developed and designed landing page using HTML, CSS, and JavaScript. Utilized CSS to create responsive design
and visually appealing layouts.</>,
<>
Utilized Figma for UI design and prototyping, creating wireframes and mockups to effectively communicate design
ideas to clients and stakeholders.
</>,

      
      
    ],
  },
  SCG: {
    name: 'IDR Pvt. Ltd.',
    longName: 'Indian Defence Reforms Research and Development Private Limited',
    subDetail: 'via Prosource BPO',
    url: 'https://idr-rnd.netlify.app/',
    position: 'Software Engineer',
    duration: 'June 2022 - August 2022',
    logo: {
      light: 'https://media.discordapp.net/attachments/935131235230023730/1126911928195895357/image.png?width=342&height=215',
      dark: 'https://media.discordapp.net/attachments/935131235230023730/1126911928195895357/image.png?width=342&height=215',
    },
    roles: [
      <>
       Integrated RESTful APIs for various web applications, allowing for seamless communication between the front-end and 
back-end.
        
      </>,
      <>
        Developed the frontend part of the  web applications using react . Implemented various features such as user authentication, CRUD operations, and real-time data updates
      </>,
      
    ],
  },
  
}

export const ExperiencesList = [
  Experiences.Deloitte,
  Experiences.SCG,
  
]
