
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope
 } from 'react-icons/fa'




const SocialButton = ({
  children,
  label,
  href,
}
) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={100}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target="_blank"
      display={'center'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        // maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
      
        <Stack direction={'row'} spacing={20}>
          <Box as="a" href={'/home'}>
            Home
          </Box>
          <Box as="a" href={'/about'}>
            About
          </Box>
          {/* <Box as="a" href={'#'}>
            Blog
          </Box> */}
          <Box as="a" href={''}>
            Contact
          </Box> 
        </Stack>
      </Container>

      <Box
       
       >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={10}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
        
          <Stack direction={'center'} spacing={40}>
            <SocialButton label={'Whatsapp'} href={'https://web.whatsapp.com/+543492600815'}>
              <FaWhatsapp />
            </SocialButton>
            <SocialButton label={'Correo'} href={'mailto:bytebridge@hotmail.com'}>
              <FaEnvelope />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/bytebridge.ok'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}