import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my works.
      </Heading>
      <Text variant="description" color='var(--chakra-colors-gray-400)'>
        Check out some of the works I made.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="Switch shop"
            description="Built an Ecommerce website using MERN stack. Implemented user authentication and CRUD operations to allow users to create and manage 
            profiles. Used JSON web token (JWT) for authorization.
            Also built an Admin panel to add and delete products. It also includes analytics for sales, revenue and total active users"
            src="https://media.discordapp.net/attachments/935131235230023730/1131110809888628746/Screenshot_26.png?width=1251&height=606"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://switchshop.netlify.app/"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
          
            idx={2}
            title="Careerbuddy"
            description="Designed the front-end UI for the recommendation system using Figma.
            Built a career guidance portal leveraged with reusable components, recommendation system, meeting scheduling with mentor, resume parser, mentor rating 
            feature.
            "
            src="https://media.discordapp.net/attachments/935131235230023730/1126920619380977724/Screenshot_25.png?width=1256&height=606"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://careerbuddy.netlify.app/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
        

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Hackathon website"
            description="Created a website to host a hackathon event for college students, with features such as registration, event schedules, submission forms, and judging criteria. It will involve front-end and back-end development, and integration with third-party APIs."
            src="https://media.discordapp.net/attachments/935131235230023730/1126918749585424545/hackathon_website.png?width=967&height=558"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://hackx-niet.tech/"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
        <FeaturedCard
            idx={4}
            title="Scholorly"
            src="https://media.discordapp.net/attachments/935131235230023730/1126917544285057135/scholarly.png?width=795&height=558"
            description="Web-based platform that allows users to search for national and international scholarships from various providers and recommend them scholarships based on their interests, providing a convenient and efficient solution for education needs. Also won Smart India Hackathon for this project and recieved a prize money of Rs.1,00,000

            "
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/mohitpanchal09/scholorship_portal.git"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
        

        

        {/* <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="TMH Layla EC"
            description="A Japanese Semi-conductor e-commerce made at my old place at IVP. I was working with backend using ASP.NET MVC"
            src="/works/tmh.webp"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.layla-ec.com/"
            isMobile={isMobile}
          />
        </MotionGridItem> */}
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
