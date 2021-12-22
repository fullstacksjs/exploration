import type { HeadingProps } from 'theme-ui';
import { Box, Heading } from 'theme-ui';

interface HeroProps extends HeadingProps {}

const Hero: React.FC<HeroProps> = ({ sx, ...props }) => (
  <Heading
    variant="hero"
    sx={{
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      ...sx,
    }}
    {...props}
  >
    Fullstacks{' '}
    <Box as="span" sx={{ color: 'primary' }}>
      Exploration
    </Box>
  </Heading>
);

export default Hero;
