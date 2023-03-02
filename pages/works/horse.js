import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Canadian Horse Auction Alternative">
    <Container maxW='container.sm'>
      <Title>
        Canadian Horse Auction Alternative <Badge>2022</Badge>
      </Title>
      <P>
        A website that I contributed to when working during my co-op. The client wanted a website
        to help spread awareness of horse slaughter and to promote adoption.
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.canadahorseauctionalternative.com">
          https://www.canadahorseauctionalternative.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>MongoDB, express.js, React.js, Node.js</span>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Photo</Center>
      </Heading>
      <WorkImage src="/images/works/horseAuction_eyecatch.jpg" alt="horse website" />
      <WorkImage src="/images/works/horse.jpg" alt="horse website" />
      <WorkImage src="/images/works/horse2.jpg" alt="horse website" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
