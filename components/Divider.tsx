import { Heading, HeadingProps } from 'theme-ui';

const Divider: React.FC<HeadingProps> = ({ sx, ...props }) => {
  return (
    <Heading
      variant="heading2"
      sx={{
        '::after': {
          content: '" "',
          height: '1px',
          background:
            'linear-gradient(to right, transparent 70%, hsla(219, 40%, 88%, 0.2) 0%) top/13px 1px repeat-x',
          position: 'absolute',
          width: 'calc(50% - 180px)',
          right: 0,
          top: '50%',
        },
        '::before': {
          content: '" "',
          height: '1px',
          background:
            'linear-gradient(to right, transparent 70%, hsla(219, 40%, 88%, 0.2) 0%) top/13px 1px repeat-x',
          position: 'absolute',
          width: 'calc(50% - 180px)',
          left: 0,
          top: '50%',
        },
        ...sx,
      }}
      {...props}
    />
  );
};

export default Divider;
