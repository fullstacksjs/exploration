import { Box, Divider, Heading, Container } from 'theme-ui';
import { isNullOrEmpty } from '@fullstacksjs/toolbox';
import Seo from '../components/Seo';
import TopicsCart from '../components/TopicsCard';
import { cardsData } from './../data/cardData';
import Planet from './../components/Planet';

const Topics = () => {
  return (
    <>
      <Seo title="This Week" />
      <Box
        as="main"
        sx={{
          paddingY: 60,
          bg: 'background.1',
        }}
      >
        <Heading variant="h2" sx={{ textAlign: 'center' }}>
          THIS WEEK
        </Heading>

        <Planet sx={{ position: 'fixed', right: -214, top: -220 }} />

        {!isNullOrEmpty(cardsData) ? (
          <Container variant="layout.container">
            <TopicsCart {...cardsData[0]} />
          </Container>
        ) : (
          <Heading as="h2">There are no user to display</Heading>
        )}

        <Box sx={{ position: 'relative' }}>
          <Box sx={{ textAlign: 'center' }}>
            <Heading
              variant="h2"
              sx={{
                textAlign: 'center',
                display: 'inline',
                backgroundColor: 'background.1',
                paddingX: 10,
                position: 'relative',
                zIndex: 9999,
              }}
            >
              TOP EVENTS
            </Heading>
          </Box>
          <Divider sx={{ variant: 'lines.line' }} />
        </Box>

        {!isNullOrEmpty(cardsData) ? (
          cardsData.slice(1).map((cardData) => (
            <Container key={cardData.id} variant="layout.container">
              <TopicsCart {...cardData} />
            </Container>
          ))
        ) : (
          <Heading as="h2">There are no user to display</Heading>
        )}
      </Box>
    </>
  );
};

export default Topics;
