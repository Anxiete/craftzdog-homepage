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
  <Layout title="Ruby on Rails Ecommerce">
    <Container maxW='container.sm'>
      <Title>
      E-commerce Project <Badge>2022</Badge>
      </Title>
      <P>
        A website that I made as my final project is a card game ecommerce website using Ruby on Rails.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://tcg-space-project.herokuapp.com/home">
            https://tcg-space-project.herokuapp.com/home <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Ruby on Rails, PostgreSQL, Bootstrap, CSS</span>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Photos</Center>
      </Heading>
      <WorkImage src="/images/works/ecommerce.jpg" alt="Ecommerce" />
      <WorkImage src="/images/works/ecommerce2.jpg" alt="Ecommerce" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
