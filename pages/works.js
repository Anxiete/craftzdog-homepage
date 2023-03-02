import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbEcommerce from '../public/images/works/rubyecommerce_eyecatch.jpg'
import thumbPokemon from '../public/images/works/pokemonAPI_eyecatch.jpg'
import thumbHorse from '../public/images/works/horseAuction_eyecatch.jpg'

const Works = () => (
  <Layout title="Works">
    <Container maxW='container.sm'>
      <Heading pt={2} textAlign={'center'} as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem 
            id="ecommerce" 
            title="E-commerce Project" 
            thumbnail={thumbEcommerce}
          >
            An E-commerce website where you can buy cards. Created this final project for my Full-stack Development course. 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="pokemon"
            title="Pokemon API"
            thumbnail={thumbPokemon}
          >
            A website I made using Pokemon API.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="horse"
            title="Canadian Horse Auction Alternative"
            thumbnail={thumbHorse}
          >
            A website that I helped contribute to save horses from slaughter.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
