import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const navLogo = `/developer_logo2.png`
  return (
    (<Link href="/" scroll={false}>
      <LogoBox>
      <Image src={navLogo} width={20} height={20} alt="logo" />
        <Text
          ml={1}
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
        >
          Rodcel Isaac Macalinao
        </Text>
      </LogoBox>

    </Link>)
  );
}

export default Logo
