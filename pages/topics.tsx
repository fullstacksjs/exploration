import { isNull, isNullOrEmpty } from '@fullstacksjs/toolbox';
import { Box, Container, Flex, Heading } from 'theme-ui';

import Divider from '../components/Divider';
import Planet from '../components/Planet';
import TopicsCart from '../components/TopicsCard';
import { thisWeek, topics } from '../mocks/topics';

const Topics = () => {
  return (
    <>
      <Flex
        as="main"
        sx={{ paddingY: [6, 12], flexDirection: 'column', gap: [6, 8] }}
      >
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
    </>
  );
};

export default Topics;
