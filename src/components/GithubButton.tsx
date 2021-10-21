import { Box, Button, ButtonProps } from 'theme-ui';

import { ReactComponent as GithubIcon } from '../assets/GithubIcon.svg';

const GithubButton: React.FC<ButtonProps> = (props) => (
  <Button
    backgroundColor="background.1"
    sx={{
      display: 'flex',
      justifyContent: 'center',
      border: '1px solid',
      alignItems: 'center',
      borderColor: 'background.0',
      gap: 2,
      transitionProperty: 'background-color, borderColor',
      cursor: 'pointer',
      transitionDuration: '200ms',
      ':hover': {
        backgroundColor: 'background.0',
      },
      ':focus': {
        borderColor: 'text',
        backgroundColor: 'background.0',
        outline: 'none',
      },
    }}
    {...props}
  >
    <GithubIcon width="16px" sx={{ mr: 2 }} />
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '::before': {
          content: '" "',
          height: '12px',
          width: '1px',
          display: 'inline-flex',
          borderLeft: '2px solid white',
          pr: 2,
        },
      }}
    >
      Login with Github
    </Box>
  </Button>
);
export default GithubButton;
