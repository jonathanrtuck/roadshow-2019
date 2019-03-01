import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

/**
 * @constant
 * @type {string}
 */
const src = 'http://example.com';

/**
 * @constant
 * @function
 * @param {object} props
 * @returns {ReactElement}
 */
const Analytics = ({ classes }) => (
  <iframe className={classes.root} src={src} title="Analytics" />
);

Analytics.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

/**
 * @type {ReactElement}
 */
export default withStyles((theme) => ({
  root: {
    border: {
      width: 0,
    },
    display: 'block',
    height: 'calc(100vh - 56px)',
    width: '100vw',

    '@media (min-width: 498px)': {
      height: 'calc(100vh - 48px)',
    },

    [theme.breakpoints.up('sm')]: {
      height: 'calc(100vh - 64px)',
    },
  },
}))(Analytics);
