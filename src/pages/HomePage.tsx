import { useRive, useStateMachineInput } from 'rive-react';
import { Box, Flex, Heading } from 'theme-ui';

const STATE_MACHINE_NAME = 'machine';
const ON_HOVER_INPUT_NAME = 'Hover';

const HomagePage = () => {
  const { RiveComponent, rive } = useRive({
    autoplay: true,
    // animations: ['moons', 'planet', 'stars'],
    stateMachines: STATE_MACHINE_NAME,
    src: '/solar.riv',
  });

  const onHoverInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    ON_HOVER_INPUT_NAME,
  );

  return (
    <Flex
      as="main"
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bg: 'background.1',
        minHeight: '100vh',
        gap: 20,
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Heading variant="h1">
          FullstacksJS <Box sx={{ color: 'primary' }}>Exploration</Box>
        </Heading>
      </Box>
      <Box
        as={RiveComponent}
        onMouseEnter={() => (onHoverInput.value = true)}
        onMouseLeave={() => (onHoverInput.value = false)}
        sx={{
          width: '90vw',
          maxWidth: '500px',
          height: '90vh',
          maxHeight: '500px',
        }}
      />
    </Flex>
  );
};

export default HomagePage;
