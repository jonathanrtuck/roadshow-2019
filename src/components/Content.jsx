import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Typography, withStyles } from '@material-ui/core';

/**
 * @constant
 * @function
 * @param {object} props
 * @returns {ReactElement}
 */
const Content = ({ alignMedia, children, classes, label, media }) => (
  <div className={classes.root} key={label}>
    <img
      alt=""
      className={classnames(classes[alignMedia], classes.media)}
      src={media}
    />
    <Typography className={classes.text} component="div" variant="body1">
      {children}
    </Typography>
  </div>
);

Content.propTypes = {
  alignMedia: PropTypes.oneOf(['left', 'right']).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  media: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

/**
 * @type {ReactElement}
 */
export default withStyles((theme) => ({
  left: {
    marginRight: theme.spacing.unit * 3,
  },

  media: {
    display: 'block',
    flex: {
      grow: 0,
      shrink: 0,
    },
    marginBottom: theme.spacing.unit * 3,
    maxWidth: '100%',
  },

  right: {
    marginLeft: theme.spacing.unit * 3,

    [theme.breakpoints.up('md')]: {
      order: 2,
    },
  },

  root: {
    alignItems: 'center',
    display: 'flex',
    flex: {
      direction: 'column',
    },
    padding: theme.spacing.unit * 4,

    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      flex: {
        direction: 'row',
      },
      margin: {
        left: 'auto',
        right: 'auto',
      },
      width: theme.breakpoints.values.md,
    },
  },

  text: {
    flex: {
      grow: 1,
    },
  },
}))(Content);
