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
        <Card>
          <Flex sx={{ flexDirection: 'column', gap: 4 }}>
            <Flex
              sx={{
                flexDirection: 'column',
                width: '333px',
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
                <Text sx={{ textAlign: 'justify' }} color="text.1">
                  The Fullstacks Exploration is about to begin. Join us on
                  Discord if you want to learn something new.
                </Text>
              </Flex>
            </Flex>
            <GithubButton
              onClick={() => {
                navigate('/Topics');
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
