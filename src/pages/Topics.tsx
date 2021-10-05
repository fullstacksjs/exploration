import { useState } from 'react';
import { useRive, useStateMachineInput } from 'rive-react';
import { Box, Divider, Heading } from 'theme-ui';

import Seo from '../components/Seo';
import TopicsCart from '../components/TopicsCard';
import { isEmpty } from '../utils/isEmpty';
import { cards } from './../data/cardData';

const STATE_MACHINE_NAME = 'machine';
const ON_HOVER_INPUT_NAME = 'Hover';

const HomagePage = () => {
  const { RiveComponent, rive } = useRive({
    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
    src: '/solar.riv',
  });

  const onHoverInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    ON_HOVER_INPUT_NAME,
  );

  const [cardsData, setCardsData] = useState(cards);

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
        <Heading variant="h1" sx={{ textAlign: 'center' }}>
          THIS WEEK
        </Heading>

        <Box
          as={RiveComponent}
          onMouseEnter={() => (onHoverInput.value = true)}
          onMouseLeave={() => (onHoverInput.value = false)}
          sx={{
            width: '90vw',
            maxWidth: '500px',
            height: '90vh',
            maxHeight: '500px',
            position: 'fixed',
            right: -214,
            top: -220,
          }}
        />

        {!isEmpty(cardsData) ? (
          <Box sx={{ marginX: 'auto', maxWidth: 884 }}>
            <TopicsCart {...cardsData[0]} />
          </Box>
        ) : (
          <Heading as="h1">There are no users to display</Heading>
        )}

        <Box sx={{ position: 'relative' }}>
          <Box sx={{ textAlign: 'center' }}>
            <Heading
              variant="h1"
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

        {!isEmpty(cardsData) ? (
          cardsData.slice(1, cardsData.length).map((cardData) => (
            <Box key={cardData.id} sx={{ marginX: 'auto', maxWidth: 884 }}>
              <TopicsCart {...cardData} />
            </Box>
          ))
        ) : (
          <Heading as="h1">There are no users to display</Heading>
        )}
      </Box>
    </>
  );
};

export default HomagePage;
