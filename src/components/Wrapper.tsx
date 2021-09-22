import { WrapPageElementBrowserArgs } from 'gatsby';

import GlobalStyles from './GlobalStyles';

const Wrapper: React.FC<WrapPageElementBrowserArgs> = ({ element }) => (
  <>
    <GlobalStyles />
    {element}
  </>
);

export default Wrapper;
