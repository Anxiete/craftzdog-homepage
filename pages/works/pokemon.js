import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="pokemon">
    <Container maxW='container.sm'>
      <Title>
        Pokemon API <Badge>2021</Badge>
      </Title>
      <P>
        A website I created using React.js and a pokemon API.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://react-pokemon.herokuapp.com/home">
          https://react-pokemon.herokuapp.com/home <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js, CSS, HTML</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Photo</Center>
      </Heading>

      <WorkImage src="/images/works/pokemon.jpg" alt="pokemon" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
