import { Box, Flex, Heading } from 'theme-ui';

import Planet from '../components/Planet';
import Seo from '../components/Seo';

const HomagePage = () => {
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
          gap: 14,
        }}
      >
        <Planet sx={{ width: '320px', height: '320px' }} />
        <Heading
          variant="hero"
          sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}
        >
          Fullstacks{' '}
          <Box as="span" sx={{ color: 'primary' }}>
            Exploration
          </Box>
        </Heading>
      </Flex>
    </>
  );
};

export default HomagePage;
