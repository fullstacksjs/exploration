import { getRequiredEnv } from '@fullstacksjs/toolbox';

export const env = {
  datoPassword: getRequiredEnv('DATOCMS_AUTH_PASSWORD'),
  datoUsername: getRequiredEnv('DATOCMS_AUTH_USERNAME'),
};
