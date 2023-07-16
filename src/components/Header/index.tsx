import { 
    Container, 
    Flex, 
    Text
} from '@chakra-ui/react';

const Header = () => {

    return (
        <Flex
            w={'100%'}
            minHeight={'144px'}
            borderBottom={'2px solid'}
            borderBottomColor={'pentestWhite'}
            justifyContent={'center'}
        >
            <Container
                display={'flex'}
                flexDirection={'row'}
                w={'100%'}
                alignItems={'center'}
                maxWidth={'1440px'}
            >
                <Text
                    color={'pentestSecondary'}
                    fontSize={'xl'}
                >
                    Dean Scotthorne Pentest Tech Test
                </Text>

            </Container>
        </Flex>
    );
};

export default Header;