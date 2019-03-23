import { AppBar, IconButton, Toolbar, withStyles } from '@material-ui/core';
import { faArrowLeft } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * @constant
 * @function
 * @param {object} props
 * @returns {ReactElement}
 */
const Header = ({ classes, setView }) => (
  <AppBar className={classes.root} position="sticky">
    <Toolbar>
      <IconButton
        aria-label="Back"
        className={classes.iconButton}
        onClick={() => {
          setView('launcher');
        }}
      >
        <FontAwesomeIcon fixedWidth icon={faArrowLeft} />
      </IconButton>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  setView: PropTypes.func.isRequired,
};

/**
 * @type {ReactElement}
 */
export default withStyles((theme) => ({
  iconButton: {
    height: 48,
    width: 48,
  },
  root: {
    background: {
      color: theme.palette.background.default,
    },
  },
}))(Header);
