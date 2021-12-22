import { isNullOrEmpty } from '@fullstacksjs/toolbox';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Box, Container, Flex, Heading, Text } from 'theme-ui';
import { Divider } from '../components/Divider';
import { LoadingOverlay } from '../components/LoadingOverlay';
import { ThisWeekSection } from '../components/ThisWeekSection';
import { TopicsCart } from '../components/TopicsCard';
import { getSdk, TopicsQuery } from '../graphql/generated';
import { getClient } from '../lib/datocms';

interface TopicsProps {
  allTopics: TopicsQuery['allTopics'];
  thisWeek: TopicsQuery['allTopics'][number];
}

const Topics: React.FC<TopicsProps> = ({ thisWeek, allTopics }) => {
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
      <ThisWeekSection topic={thisWeek} />

      <Box sx={{ position: 'relative' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Divider>TOP EVENTS</Divider>
        </Box>
      </Box>

      {!isNullOrEmpty(allTopics) ? (
        <Container sx={{ display: 'flex', px: [6, 0] }}>
          {allTopics.map((topic) => (
            <TopicsCart key={topic.id} {...topic} />
          ))}
        </Container>
      ) : (
        <Heading as="h2">There are no user to display</Heading>
      )}
    </Flex>
  );
};

export async function getStaticProps() {
  const sdk = getSdk(getClient(true));
  const { allTopics } = await sdk.Topics();
  return { props: { allTopics } };
}

export default Topics;
