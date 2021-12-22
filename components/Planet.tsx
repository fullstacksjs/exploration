import { useRive, useStateMachineInput } from 'rive-react';
import type { RiveProps } from 'rive-react/dist/types/components/Rive';
import type { BoxProps } from 'theme-ui';
import { Box } from 'theme-ui';

interface Planet extends BoxProps, RiveProps {}

const Planet: React.FC<SxComponent> = (props) => {
  const { RiveComponent, rive } = useRive({
    autoplay: true,
    stateMachines: 'machine',
    src: '/solar.riv',
  });

  const onHoverInput = useStateMachineInput(rive, 'machine', 'Hover');

  return (
    <Box
      as={RiveComponent}
      onMouseEnter={() => {
        if (onHoverInput == null) return;
        onHoverInput.value = true;
      }}
      onMouseLeave={() => {
        if (onHoverInput == null) return;
        onHoverInput.value = false;
      }}
      {...props}
    />
  );
};

export default Planet;
