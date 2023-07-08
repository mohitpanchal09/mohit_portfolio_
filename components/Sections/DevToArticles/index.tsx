import { memo } from 'react'
import {
  Heading,
  Text,
  Link,
  Stack,
  SimpleGrid,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react'
import { Article } from 'types/article'

const DevToArticles = ({ articles }: { articles: Article[] }) => {
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
  const borderColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.100')
  const alphaHover = useColorModeValue(
    'rgba(49, 151, 149, 0.06)',
    'rgba(157, 236, 249, 0.06)'
  )
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
        Dev.to content
      </Heading>
      <Text variant="description" color='var(--chakra-colors-gray-400)'>
        I write Tech related things from time to time on linkedIn!
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 10 }}>
        
          <Link
            // aria-label={item.title}
            target="_blank"
            rel="noreferrer"
            // key={item.id}
            href="https://www.linkedin.com/posts/mohit-kumar-0ba38b195_ai-computervision-artificialintelligence-activity-7067536238408269824-C3wN?utm_source=share&utm_medium=member_desktop"
            color="currentcolor"
            _hover={{ textDecoration: 'none' }}
            transition="all 0.5s ease"
            role="group"
          >
            <Stack
              spacing={3}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="1em"
              padding={{ base: '1em', '2xl': '1.5em' }}
              height="100%"
              transition="all 0.2s ease-in-out"
              backgroundColor={bg}
              _hover={{
                background: alphaHover,
              }}
              as="article"
            >
              <Heading fontSize="larger" paddingX={2}>
                Computer Vision
              </Heading>
              <Divider borderColor="#A6A6A6" width="95%" />
              <Stack spacing={1}>
                <Heading
                  fontSize="small"
                  paddingX={2}
                  variant="accentAlternative"
                >
                  Python,Deep Learning
                </Heading>
                <Heading fontSize="smaller" variant="description" paddingX={2}>
                  {/* {item.readable_publish_date} */}
                </Heading>
              </Stack>
              <Text fontSize="smaller" variant="description" paddingX={2} color='#A6A6A6'>
              Computer vision is a field of artificial intelligence (AI) that enables computers and systems to derive meaningful information from digital images, videos and other visual inputs — and take actions or make...
              </Text>
            </Stack>
          </Link>
          <Link 
          target="_blank"
          rel="noreferrer"
          // key={item.id}
          href="https://www.linkedin.com/posts/mohit-kumar-0ba38b195_business-data-experience-activity-7013488639049371648-gcx2?utm_source=share&utm_medium=member_desktop"
          color="currentcolor"
          _hover={{ textDecoration: 'none' }}
          transition="all 0.5s ease"
          role="group">
          <Stack
              spacing={3}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="1em"
              padding={{ base: '1em', '2xl': '1.5em' }}
              height="100%"
              transition="all 0.2s ease-in-out"
              backgroundColor={bg}
              _hover={{
                background: alphaHover,
              }}
              as="article"
            >
              <Heading fontSize="larger" paddingX={2}>
                Heroku and AWS
              </Heading>
              <Divider borderColor="#A6A6A6" width="95%" />
              <Stack spacing={1}>
                <Heading
                  fontSize="small"
                  paddingX={2}
                  variant="accentAlternative"
                >
                Heroku and AWS
                </Heading>
                <Heading fontSize="smaller" variant="description" paddingX={2}>
                  {/* {item.readable_publish_date} */}
                </Heading>
              </Stack>
              <Text fontSize="smaller" variant="description" paddingX={2} color='#A6A6A6'>
              The very basic question that comes to everybody's mind is that
why people don't deploy their app directly on AWS where Heroku is running on AWS...
              </Text>
            </Stack>
            </Link>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(DevToArticles)
