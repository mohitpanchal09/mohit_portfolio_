import { useColorMode } from '@chakra-ui/react'
import Head from 'next/head'

const FavIconProvider = ({ children }: { children: JSX.Element }) => {
  const { colorMode } = useColorMode()
  return (
    <>
      <Head>
       
      </Head>
      {children}
    </>
  )
}

export default FavIconProvider
