import { Env, isNullOrEmpty } from '@fullstacksjs/toolbox';
import type { GetStaticPropsResult } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Flex, Heading } from 'theme-ui';
import { Divider } from '../components/Divider';
import { LoadingOverlay } from '../components/LoadingOverlay';
import { ThisWeekSection } from '../components/ThisWeekSection';
import { TopicList } from '../components/TopicList';
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
    <Flex
      as="main"
      sx={{ paddingY: [6, 12], flexDirection: 'column', gap: [6, 8] }}
    >
      <User email={session.user!.email!} />
      <ThisWeekSection topic={thisWeek} />
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
