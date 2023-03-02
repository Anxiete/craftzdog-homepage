import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

import Typewriter from 'typewriter-effect';
const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container maxW='container.sm'>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <Typewriter
         options={{
          delay: 50,
          loop:true
        }}
          onInit={(typewriter) => {
            typewriter.typeString(`I am an aspiring web developer based in Canada!`)
            .pauseFor(1000)
            .changeDeleteSpeed(30)
            .deleteChars(30)
            .typeString("full-stack developer based in Canada!")
            .pauseFor(1000)
            .start();
          }}
        />
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h3" variant="page-title">
            Rodcel Isaac Macalinao
            IT Graduate
          </Heading>
          <p> Web Developer and Full-stack Developer</p>
          <Box align="left" my={4}>
            <NextLink
              href="mailto:rodcel.isaac18@gmail.com"
              passHref
              scroll={false}
            >
              <Button rightIcon={<EmailIcon />} colorScheme="blue">
                Send Me an Email!
              </Button>
            </NextLink>
          </Box>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="150px"
            h="150px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/isaac.jpg"
              alt="Profile image"
              borderRadius="full"
              width="150"
              height="150"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
        Hello, My name is Isaac and I am a web/full-stack developer that loves to learn new things.
        I specialize in creating websites that are optimized for all devices, with a focus on providing an exceptional user experience for audiences, no matter how they access the site.
        I have been interested in technology ever since I was little. 
        The time when I started to get interested more is when I started to watch PC building and programming videos. 
        Some reasons that made me want to be a web developer/programmer that it's fun and challenging to create projects.
        <br/>
        <br/>
        In my co-op, I joined a team called CHAA, also known as Canadian Horse Auction Alternative. It is an auction that helps promote adoption rather than the slaughter of horses. It was a fun and challenging experience because I was weak with React.js but over time, I was able to get my task done. I was tasked to help add in missing features and improve the website with mobile responsiveness and web design using MERN stack and Material UI.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Manila, Philippines
        </BioSection>
        <BioSection>
          <BioYear>2003</BioYear>
          Moved and lived in Singapore for 8 years
        </BioSection>
        <BioSection>
          <BioYear>2012</BioYear>
          Moved to Winnipeg, Canada
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Co-op at Red River College making a{' '}
          <Link as={NextLink} href="https://www.canadahorseauctionalternative.com" passHref>
          website 
          </Link>
          {' '} about saving horses
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Completed the Diploma of Business Information Technology at Red River College
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Hobbies
        </Heading>
        <Paragraph>
          Video games, playing guitar, and anime!
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Anxiete" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Anxiete
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/Anxiete" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Rodcel Isaac Macalinao
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
