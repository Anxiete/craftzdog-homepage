import { Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'


const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      This website is built based on the <Link as={NextLink} href="https://www.craftz.dog" passHref>
      Takuya Matsuyama's website
          </Link>
    </Box>
  )
}

export default Footer
