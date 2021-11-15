import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { Flex } from 'theme-ui';

import Hero from '../components/Hero';
import Planet from '../components/Planet';

const HomagePage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/login');
    }, 2000);
  }, [router]);

  return (
    <Flex
      as="main"
      sx={{
        flexDirection: ['column-reverse', 'column'],
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: 14,
      }}
    >
      <Planet sx={{ width: '320px', height: '320px' }} />
      <Hero />
    </Flex>
  );
};

export default HomagePage;
