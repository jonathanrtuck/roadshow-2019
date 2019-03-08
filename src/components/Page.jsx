import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Card, CardContent, Typography, withStyles } from '@material-ui/core';

/**
 * @constant
 * @function
 * @param {object} props
 * @returns {ReactElement}
 */
const Page = ({ classes, content, image, title }) => (
  <Fragment>
    <header
      className={classes.header}
      style={{ backgroundImage: `url(${image})` }}
    />
    <Card className={classes.card}>
      <CardContent>
        <Typography
          align="center"
          className={classes.title}
          component="h1"
          variant="h3"
        >
          {title}
        </Typography>
        {content}
      </CardContent>
    </Card>
  </Fragment>
);

Page.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  content: PropTypes.element.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

/**
 * @type {ReactElement}
 */
export default withStyles((theme) => ({
  card: {
    padding: theme.spacing.unit * 4,

    [theme.breakpoints.up('md')]: {
      margin: {
        bottom: theme.spacing.unit * 4,
        left: 'auto',
        right: 'auto',
        top: -theme.spacing.unit * 30,
      },
      width: theme.breakpoints.values.md,
    },
  },

  header: {
    background: {
      position: 'center',
      size: 'cover',
    },
    height: theme.spacing.unit * 60,
  },

  title: {
    margin: {
      bottom: theme.spacing.unit * 4,
    },
  },
}))(Page);
