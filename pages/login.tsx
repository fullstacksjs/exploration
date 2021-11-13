import { Card, Flex, Heading, Text } from 'theme-ui';

import PlanetSvg from '../components/Icons/Planet.svg';
import GithubButton from '../components/GithubButton';
import Hero from '../components/Hero';

const Login = () => {
  return (
    <Flex
      as="main"
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        gap: 20,
      }}
    >
      <Card
        sx={{
          flexGrow: [1, 0],
          background: [
            'none',
            `linear-gradient(to right, transparent 70%, hsla(219, 40%, 88%, 0.2) 0%) top/13px 1px repeat-x,
            linear-gradient(transparent 70%, hsla(219, 40%, 88%, 0.2) 0%) right/1px 13px repeat-y,
            linear-gradient(to right, transparent 70%, hsla(219, 40%, 88%, 0.2) 0%) bottom/13px 1px repeat-x,
            linear-gradient(transparent 70%, hsla(219, 40%, 88%, 0.2) 0%) left/1px 13px repeat-y`,
          ],
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
            gap: 4,
          }}
        >
          <Flex
            sx={{
              flexDirection: 'column',
              width: ['100%', '333px'],
              gap: 8,
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}
          >
            <Hero />
            <PlanetSvg width="128px" sx={{ filter: 'grayscale(1)' }} />
            <Flex
              sx={{ flexDirection: 'column', gap: 2, alignItems: 'center' }}
            >
              <Heading as="h2">Welcome</Heading>
              <Text sx={{ textAlign: ['center', 'justify'] }} color="text.1">
                The Fullstacks Exploration is about to begin. Join us on Discord
                if you want to learn something new.
              </Text>
            </Flex>
          </Flex>
          <GithubButton
            onClick={() => {
              console.log('Login');
            }}
          >
            Login with Github
          </GithubButton>
        </Flex>
      </Card>
    </Flex>
  );
};

export default Login;
