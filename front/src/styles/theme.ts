import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    grey_bt: '#616161',
    lightgrey_bt: '#E5E5E5',
    orange_bt: '##FAB43D',
  },
  sizes: {
    desktop: '(min-width: 1199.98px)',
    tablet: '(min-width: 576px) and (max-width: 991.98px) and (orientation:portrait)',
    tablet_landscape:
      '(min0-width: 991.98px) and (max-width: 1199.98px)and (orientation:landscape)',
    mobile: '(max-width: 575.98px)and (orientation:portrait)',
    mobile_landscape:
      '(min-width: 576px) and (max-width: 991.98px) and (orientation:landscape)',
  },
};
