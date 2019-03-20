import 'typeface-lato';
import { createMuiTheme } from '@material-ui/core';

/**
 * customize the material-ui theme.
 * @see https://material-ui.com/customization/themes/
 * @see https://material-ui.com/customization/default-theme/
 * @see https://material-ui.com/customization/themes/#createmuitheme-options---theme
 * @see https://material-ui.com/style/typography/#migration-to-typography-v2
 * @type {object}
 */
export default createMuiTheme({
  palette: {
    primary: {
      dark: 'rgb(0, 110, 180)',
      light: 'rgb(40, 190, 240)',
      main: 'rgb(1, 137, 180)',
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: 'Lato, sans-serif',
    useNextVariants: true,
  },
});
