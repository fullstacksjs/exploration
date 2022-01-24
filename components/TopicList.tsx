import { Container } from 'theme-ui';

import { TopicCart } from '../components/TopicsCard';

interface TopicListProps {
  topics: Topic[];
}

export const TopicList: React.FC<TopicListProps> = ({ topics }) => {
  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'column', px: [6, 0], gap: 6 }}
    >
      {topics.map((topic) => (
        <TopicCart key={topic.id} {...topic} />
      ))}
    </Container>
  );
};
