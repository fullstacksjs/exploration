import { useRive, useStateMachineInput } from 'rive-react';
import { Box } from 'theme-ui';

const STATE_MACHINE_NAME = 'machine';
const ON_HOVER_INPUT_NAME = 'Hover';

const Planet = ({ sx }) => {
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

  return (
    <Box
      as={RiveComponent}
      onMouseEnter={() => {
        onHoverInput.value = true;
      }}
      onMouseLeave={() => {
        onHoverInput.value = false;
      }}
      sx={{
        width: '90vw',
        maxWidth: '500px',
        height: '90vh',
        maxHeight: '500px',
        ...sx,
      }}
    />
  );
};

export default Planet;
