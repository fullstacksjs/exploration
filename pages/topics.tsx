import { isNull, isNullOrEmpty } from '@fullstacksjs/toolbox';
import { Text, Box, Container, Flex, Heading } from 'theme-ui';
import { useSession, signOut } from 'next-auth/react';

import Divider from '../components/Divider';
import Planet from '../components/Planet';
import TopicsCart from '../components/TopicsCard';
import { thisWeek, topics } from '../mocks/topics';
import { useRouter } from 'next/router';
import { LoadingOverlay } from '../components/LoadingOverlay';

const Topics = () => {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.replace('/login');
    },
  });

  if (status === 'loading') return <LoadingOverlay />;

  return (
    <Flex
      as="main"
      sx={{ paddingY: [6, 12], flexDirection: 'column', gap: [6, 8] }}
    >
      <Flex sx={{ gap: 2, justifyContent: 'center' }}>
        <Text sx={{ textAlign: 'center' }}>{session?.user?.email}</Text>
        <Text
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </Text>
      </Flex>
      <Heading variant="heading2" sx={{ alignSelf: 'center' }}>
        THIS WEEK
      </Heading>

      <Planet
        sx={{
          display: ['none', 'block'],
          position: 'fixed',
          right: 0,
          top: 0,
          width: '466px',
          height: '466px',
          transform: 'translate(50%, -50%)',
        }}
      />

      {!isNull(thisWeek) ? (
        <Container sx={{ display: 'flex', px: [6, 0] }}>
          <TopicsCart {...thisWeek} />
        </Container>
      ) : (
        <Heading as="h2">There are no user to display</Heading>
      )}

      <Box sx={{ position: 'relative' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Divider>TOP EVENTS</Divider>
        </Box>
      </Box>

      {!isNullOrEmpty(topics) ? (
        topics.map((topic) => (
          <Container key={topic.id} sx={{ display: 'flex', px: [6, 0] }}>
            <TopicsCart {...topic} />
          </Container>
        ))
      ) : (
        <Heading as="h2">There are no user to display</Heading>
      )}
    </Flex>
  );
};

export default Topics;
