import { useState } from 'react';
import { Box, Button, Card, Flex, Heading, Text } from 'theme-ui';

import { ReactComponent } from '../assets/Planet.svg';
import Seo from '../components/Seo';

const WelcomePage = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <Seo title="Welcome" />
      <Flex
        as="main"
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          bg: 'background.1',
          minHeight: '100vh',
          gap: 20,
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Heading variant="h1">
            FullstacksJS <Box sx={{ color: 'primary' }}>Exploration</Box>
          </Heading>
        </Box>
        <Card>
          <Flex sx={{ flexDirection: 'column', gap: 10, alignItems: 'center' }}>
            <ReactComponent width="128px" />
            <Flex
              sx={{ flexDirection: 'column', gap: 2, alignItems: 'center' }}
            >
              <Heading as="h2">Welcome</Heading>
              <Text color="text.1">
                The Fullstacks Exploration is about to begin. Join us on Discord
                if you want to learn something new.
              </Text>
            </Flex>
            <Button variant="text">JOIN</Button>
          </Flex>
        </Card>
      </Flex>
    </>
  );
};

export default WelcomePage;
