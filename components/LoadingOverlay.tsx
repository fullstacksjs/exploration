import { Grid } from 'theme-ui';
import Planet from './Planet';

interface LoadingOverlayProps {}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = () => (
  <Grid
    sx={{
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      placeItems: 'center',
    }}
  >
    <Planet />
  </Grid>
);
