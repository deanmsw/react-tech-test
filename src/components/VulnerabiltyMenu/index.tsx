import { useState } from 'react';
import { Link } from "react-router-dom";
import { useQuery } from 'react-query';
import { 
    Box, 
    Container, 
    Flex, 
    SimpleGrid, 
    Text 
} from '@chakra-ui/react';

import { ObjectValues } from './types';
import PentestButton from '../Button';

function VulnerabiltyMenu() {
    const [enabled, setEnabled ] = useState(false);

    const HandleClick = async () => {
        setEnabled(true)
    };

    const getVulnerabilities = async () => {
        const res = await fetch('vulnerabilities.json');
        return res.json();
    };

    const { isLoading, error, data } = useQuery('vulData', getVulnerabilities, {
        enabled: enabled
    });

    if (isLoading) return <Text> 'Loading...' </Text> 

    if (error){ console.log(error) };

    const styles: any = {
        CRITICAL: '#fc0303',
        HIGH: '#fc6f03',
        MEDIUM: '#fca503',
        LOW: '#e7fc03',
        INFO: '#8cfc03'
    };

  return (
    <Container>
        <PentestButton 
            label={'Fetch Vulnerabilities'}
            onClick={HandleClick}
        />
          <SimpleGrid minChildWidth={'180px'} spacing={'40px'}>
            {data?.data.map((vul: ObjectValues, index: number ) => {
                return (
                    <Link to={`vulnerability/${vul?.uuid}`} key={`${vul?.uuid} - ${index}`}>
                        <Flex
                            flexDirection={'column'}
                            key={`${vul?.uuid}-vul-${index.toString}`}
                        >
                            <Box
                                bg={'pentestSecondary'}
                                height={'100px'}
                                width={'100%'}
                            >
                                <Text>{vul?.name}</Text>
                            </Box>
                            <Box
                                bg={styles[vul?.severity]}
                                height={'40px'}
                                width={'100%'}
                            >
                                <Text>{vul?.severity}</Text>
                            </Box>
                        </Flex>
                    </Link>
                )     
            })}
          </SimpleGrid>
    </Container>
  )
};

export default VulnerabiltyMenu;