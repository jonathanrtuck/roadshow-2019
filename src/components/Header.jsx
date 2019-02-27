import { AppBar, IconButton, Toolbar, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { faArrowLeft } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { VIEW_UPDATE } from 'store/action-types';

/**
 * @constant
 * @function
 * @param {object} props
 * @returns {ReactElement}
 */
const Header = ({ classes, updateView }) => (
  <AppBar className={classes.root} position="sticky">
    <Toolbar>
      <IconButton
        aria-label="Back"
        className={classes.iconButton}
        onClick={() => {
          updateView('launcher');
        }}
      >
        <FontAwesomeIcon fixedWidth icon={faArrowLeft} />
      </IconButton>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  updateView: PropTypes.func.isRequired,
};

/**
 * @type {ReactElement}
 */
export default connect(
  null,
  {
    updateView: (value) => ({
      payload: {
        value,
      },
      type: VIEW_UPDATE,
    }),
  }
)(
  withStyles((theme) => ({
    iconButton: {
      width: 48,
    },
    root: {
      background: {
        color: theme.palette.background.default,
      },
    },
  }))(Header)
);
