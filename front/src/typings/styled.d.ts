// Tipos relacionados a styled-components
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      grey_bt: string;
      lightgrey_bt: string;
      orange_bt: string;
    };

    sizes: {
      desktop: string;
      tablet: string;
      tablet_landscape: string;
      mobile: string;
      mobile_landscape: string;
    };
  }
}
