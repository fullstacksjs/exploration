import { keyframes } from '@emotion/react';
import { Box, ThemeUIStyleObject } from 'theme-ui';

const puff = [
  keyframes`
  0%   {transform: scale(0)}
  100% {transform: scale(1.0)}
`,
  keyframes`
  0%   {opacity: 1}
  100% {opacity: 0}
`,
];

const style: ThemeUIStyleObject = {
  position: 'absolute',
  border: '2px solid',
  borderRadius: '50%',
  opacity: '1',
  transform: 'scale(0)',
  top: 0,
  left: 0,
  animationFillMode: 'both',
  animation: `${puff[0]}, ${puff[1]}`,
  animationDuration: '2s',
  animationIterationCount: 'infinite',
  animationTimingFunction:
    'cubic-bezier(0.165, 0.84, 0.44, 1), cubicBezier(0.3, 0.61, 0.355, 1)',
};

interface PuffLoaderProps {
  color?: string;
  size?: number;
}

export const PuffLoader: React.FC<PuffLoaderProps> = ({
  color = 'secondary',
  size = 24,
}) => (
  <Box sx={{ position: 'relative', size }}>
    <Box sx={{ ...style, size, borderColor: color }} />
    <Box sx={{ ...style, size, borderColor: color, animationDelay: '1s' }} />
  </Box>
);
