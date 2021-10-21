import { navigate } from 'gatsby';
import { Card, Flex, Heading, Text } from 'theme-ui';

import { ReactComponent as PlanetSvg } from '../assets/Planet.svg';
import GithubButton from '../components/GithubButton';
import Hero from '../components/Hero';
import Seo from '../components/Seo';

const Login = () => {
  return (
    <>
      <Seo title="Login" />
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
            width: ['95%', 'auto'],
            height: ['calc(100vh - 35px)', 'auto'],
            position: 'relative',
            display: ['flex', 'block'],
            flexDirection: ['column', 'unset'],
            justifyContent: ['center', 'unset'],
            background: [
              'none',
              `linear-gradient(to right, transparent 70%, hsla(219, 40%, 88%, 0.2) 0%) top/13px 1px repeat-x,
            linear-gradient(transparent 70%, hsla(219, 40%, 88%, 0.2) 0%) right/1px 13px repeat-y,
            linear-gradient(to right, transparent 70%, hsla(219, 40%, 88%, 0.2) 0%) bottom/13px 1px repeat-x,
            linear-gradient(transparent 70%, hsla(219, 40%, 88%, 0.2) 0%) left/1px 13px repeat-y`,
            ],
          }}
        >
          <Flex sx={{ flexDirection: 'column', gap: 4 }}>
            <Flex
              sx={{
                flexDirection: 'column',
                width: ['100%', '333px'],
                gap: 8,
                alignItems: 'center',
              }}
            >
              <Hero />
              <PlanetSvg width="128px" sx={{ filter: 'grayscale(1)' }} />
              <Flex
                sx={{ flexDirection: 'column', gap: 2, alignItems: 'center' }}
              >
                <Heading as="h2">Welcome</Heading>
                <Text sx={{ textAlign: ['center', 'justify'] }} color="text.1">
                  The Fullstacks Exploration is about to begin. Join us on
                  Discord if you want to learn something new.
                </Text>
              </Flex>
            </Flex>
            <GithubButton
              onClick={() => {
                navigate('/Topics');
              }}
              sx={{
                position: ['absolute', 'unset'],
                bottom: 0,
                left: 0,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Login with Github
            </GithubButton>
          </Flex>
        </Card>
      </Flex>
    </>
  );
};

export default Login;
