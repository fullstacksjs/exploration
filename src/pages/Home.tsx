import { Flex } from 'theme-ui';

import Hero from '../components/Hero';
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
          minHeight: '100vh',
          gap: 14,
          '@media screen and (max-width: 450px)': {
            flexDirection: 'column-reverse',
          },
        }}
      >
        <Planet sx={{ width: '320px', height: '320px' }} />
        <Hero />
      </Flex>
    </>
  );
};

export default HomagePage;
