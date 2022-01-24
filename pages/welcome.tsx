import { Button, Card, Flex, Heading, Text } from 'theme-ui';

import Hero from '../components/Hero';
import ReactComponent from '../components/Icons/Planet.svg';

const WelcomePage = () => {
  return (
    <Flex
      as="main"
      sx={{
        pt: 26,
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: 20,
      }}
    >
      <Hero />
      <Card>
        <Flex sx={{ flexDirection: 'column', gap: 10, alignItems: 'center' }}>
          <ReactComponent width="128px" />
          <Flex sx={{ flexDirection: 'column', gap: 2, alignItems: 'center' }}>
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
  );
};

export default WelcomePage;
