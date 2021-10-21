import { isNull, isNullOrEmpty } from '@fullstacksjs/toolbox';
import { Box, Container, Flex, Heading } from 'theme-ui';

import Divider from '../components/Divider';
import Planet from '../components/Planet';
import Seo from '../components/Seo';
import TopicsCart from '../components/TopicsCard';
import { thisWeek, topics } from '../mocks/topics';

const Topics = () => {
  return (
    <>
      <Seo title="This Week" />
      <Flex as="main" sx={{ paddingY: 12, flexDirection: 'column', gap: 8 }}>
        <Heading variant="heading2" sx={{ alignSelf: 'center' }}>
          THIS WEEK
        </Heading>

        <Planet
          sx={{
            display: ['none', null],
            position: 'fixed',
            right: 0,
            top: 0,
            width: '466px',
            height: '466px',
            transform: 'translate(50%, -50%)',
          }}
        />

        {!isNull(thisWeek) ? (
          <Container sx={{ display: 'flex' }}>
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
            <Container key={topic.id} sx={{ display: 'flex' }}>
              <TopicsCart {...topic} />
            </Container>
          ))
        ) : (
          <Heading as="h2">There are no user to display</Heading>
        )}
      </Flex>
    </>
  );
};

export default Topics;
