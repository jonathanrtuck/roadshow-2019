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
  typography: {
    fontFamily: 'Lato, sans-serif',
    useNextVariants: true,
  },
});
