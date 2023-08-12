import {
  Box,
  chakra,
  Container,
  Stack,
  styled,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const SocialButton = ({ children, label, href }) => {
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
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box position="relative" overflow="hidden">
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        transform="skewY(-8deg)"
        transformOrigin="top right"
        background="linear-gradient(-8deg, rgba(0,0,0,0.2), rgba(0,0,0,0))"
        zIndex={-1}
      />
      <Text fontSize="xl" fontWeight="bold" mt={40} mb={2} zIndex={1} position="relative">
        Contacto
      </Text>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={10}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack direction={'center'} spacing={4} justify="center">
        <Box position="relative" zIndex={1}>
            <SocialButton label={'Whatsapp'} href={'https://web.whatsapp.com/+543492600815'}>
              <FaWhatsapp />
            </SocialButton>
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              transform="skewY(-8deg)"
              transformOrigin="top right"
              background="linear-gradient(-8deg, rgba(0,0,0,0.2), rgba(0,0,0,0))"
              zIndex={-1}
            />
          </Box>
          <Box position="relative" zIndex={1}>
            <SocialButton label={'Correo'} href={'mailto:bytebridge@hotmail.com'}>
              <FaEnvelope />
            </SocialButton>
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              transform="skewY(-8deg)"
              transformOrigin="top right"
              background="linear-gradient(-8deg, rgba(0,0,0,0.2), rgba(0,0,0,0))"
              zIndex={-1}
            />
          </Box>
          <Box position="relative" zIndex={1}>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/bytebridge.ok'}>
              <FaInstagram />
            </SocialButton>
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              transform="skewY(-8deg)"
              transformOrigin="top right"
              background="linear-gradient(-8deg, rgba(0,0,0,0.2), rgba(0,0,0,0))"
              zIndex={-1}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
