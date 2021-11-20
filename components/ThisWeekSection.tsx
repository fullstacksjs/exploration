import { isNull } from '@fullstacksjs/toolbox';
import { Container, Heading } from 'theme-ui';
import { TopicsQuery } from '../graphql/generated';
import Planet from './Planet';
import TopicsCart from './TopicsCard';

type Topic = TopicsQuery['allTopics'][number];

interface ThisWeekSectionProps {
  topic: Topic | undefined;
}

export const ThisWeekSection: React.FC<ThisWeekSectionProps> = ({ topic }) =>
  !isNull(topic) ? (
    <>
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
          transform: 'translate(50%, -50%)',
          height: '466px',
        }}
      />

      <Container sx={{ display: 'flex', px: [6, 0] }}>
        <TopicsCart {...topic} />
      </Container>
    </>
  ) : null;