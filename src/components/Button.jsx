import { Button as MuiButton } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * @constant
 * @function
 * @param {object} props
 * @returns {ReactElement}
 */
const Button = ({ children, href, ...props }) => (
  <MuiButton
    color="primary"
    href={href || undefined}
    target={href ? '_blank' : undefined}
    variant="contained"
    {...props}
  >
    {children}
  </MuiButton>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  href: PropTypes.string,
};

Button.defaultProps = {
  href: '',
};

/**
 * @type {ReactElement}
 */
export default Button;
