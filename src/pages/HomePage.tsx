import { Box, Flex, Heading } from 'theme-ui';

import Seo from '../components/Seo';
import Planet from './../components/Planet';

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
          gap: 20,
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Heading variant="h1">
            FullstacksJS <Box sx={{ color: 'primary' }}>Exploration</Box>
          </Heading>
        </Box>
        <Planet />
      </Flex>
    </>
  );
};

export default HomagePage;
