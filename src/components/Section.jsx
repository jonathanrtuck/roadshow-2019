import Header from 'components/Header';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

/**
 * @constant
 * @function
 * @param {object} props
 * @returns {ReactElement}
 */
const Section = ({ children, classes }) => (
  <section className={classes.root}>
    <Header />
    {children}
  </section>
);

Section.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

/**
 * @type {ReactElement}
 */
export default withStyles((theme) => ({
  root: {
    background: {
      color: theme.palette.background.paper,
    },
    bottom: 0,
    left: 0,
    overflow: 'auto',
    position: 'fixed',
    right: 0,
    top: 0,
  },
}))(Section);
