import { 
  Box, 
  Container, 
  Heading, 
  VStack 
} from '@chakra-ui/react'

import { Props } from './types';
import Header from '../Header';

function PageContainer({ title, children }: Props) {
  return (
    <Container
      flexDirection={'column'}
      width={'100%'}
      alignItems={'center'}
      height={'100vh'}
      display={'flex'}
      padding={'16px'}
    >   
      <VStack
        maxWidth={'1440px'}
        width={'100%'}
        height={'100%'}
      >
        <Header />
        <Heading
          as={'h1'}
          fontSize={'xl'}
          color={'pentestSecondary'}
        >
          {title}
        </Heading>
        <Box
          width={'100%'}
        >
          {children}
        </Box>
      </VStack>
       
    </Container>
  )
}

export default PageContainer