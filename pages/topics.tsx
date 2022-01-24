import { Env, isNull, isNullOrEmpty } from '@fullstacksjs/toolbox';
import type { GetStaticPropsResult } from 'next';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { Box, Container, Flex, Heading } from 'theme-ui';

import { Divider } from '../components/Divider';
import { LoadingOverlay } from '../components/LoadingOverlay';
import Planet from '../components/Planet';
import { TopicList } from '../components/TopicList';
import { TopicCart } from '../components/TopicsCard';
import { User } from '../components/User';
import { getSdk } from '../graphql/generated';
import { getClient } from '../lib/datocms';

interface TopicsProps {
  allTopics: Topic[];
  thisWeek: Topic;
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
    <Flex as="main" sx={{ paddingY: 6, flexDirection: 'column', gap: [6, 8] }}>
      <Box sx={{ alignSelf: ['center', 'flex-end'], pr: [0, 5] }}>
        <User image={session!.user!.image!} email={session!.user!.email!} />
      </Box>
      <Planet
        sx={{
          display: ['none', 'block'],
          position: 'fixed',
          left: 0,
          top: 0,
          width: '466px',
          transform: 'translate(-50%, -50%)',
          height: '466px',
        }}
      />
      {!isNull(thisWeek) ? (
        <>
          <Heading variant="heading2" sx={{ alignSelf: 'center' }}>
            THIS WEEK
          </Heading>

          <Container sx={{ display: 'flex', px: [6, 0] }}>
            <TopicCart {...thisWeek} />
          </Container>
        </>
      ) : null}
      <Divider>TOP EVENTS</Divider>
      {!isNullOrEmpty(allTopics) ? (
        <TopicList topics={allTopics} />
      ) : (
        <Heading as="h2">There are no user to display</Heading>
      )}
    </Flex>
  );
};

export async function getStaticProps(): Promise<
  GetStaticPropsResult<TopicsProps>
> {
  const sdk = getSdk(getClient({ preview: Env.isDev }));
  const { allTopics } = await sdk.Topics();
  return {
    props: { allTopics: allTopics.slice(1), thisWeek: allTopics[0] },
    revalidate: 3600,
  };
}

export default Topics;
