import { isWidthUp } from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';
import {
  Tab,
  Tabs,
  Typography,
  withStyles,
  withWidth,
} from '@material-ui/core';

/**
 * @constant
 * @function
 * @param {object} props
 * @returns {ReactElement}
 * @see https://cloud.withgoogle.com/next/sf/learning
 * @todo scroll tab content into view when changing tab.
 * @todo reset to first tab on view change.
 */
const PageWithTabs = ({
  classes,
  description,
  image,
  link,
  tabs,
  title,
  width,
}) => {
  /**
   * @constant
   * @type {string}
   */
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Fragment>
      <header
        className={classes.header}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className={classes.header_content}>
          <Typography align="center" component="h1" variant="h3">
            {title}
          </Typography>
          {Boolean(description) && (
            <Typography
              align="center"
              className={classes.header_description}
              variant="body1"
            >
              {description}
              {link}
            </Typography>
          )}
        </div>
      </header>
      <Tabs
        centered={isWidthUp('md', width)}
        className={classes.tabs}
        indicatorColor="primary"
        onChange={(e, i) => {
          setTabIndex(i);
        }}
        textColor="primary"
        value={tabIndex}
        variant={isWidthUp('md', width) ? 'standard' : 'scrollable'}
      >
        {tabs.map(({ label }) => (
          <Tab key={label} label={label} />
        ))}
      </Tabs>
      {tabs.map(({ content, label }, i) =>
        tabIndex === i ? <section key={label}>{content}</section> : null
      )}
    </Fragment>
  );
};

PageWithTabs.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  link: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
      ]).isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

PageWithTabs.defaultProps = {
  description: '',
  link: '',
};

/**
 * @type {ReactElement}
 */
export default withStyles((theme) => ({
  header: {
    background: {
      position: 'center',
      size: 'cover',
    },
    padding: {
      top: theme.spacing.unit * 30,
    },
  },

  header_content: {
    background: {
      color: 'rgba(255, 255, 255, 0.95)',
    },
    padding: theme.spacing.unit * 4,

    [theme.breakpoints.up('md')]: {
      margin: {
        left: 'auto',
        right: 'auto',
      },
      width: theme.breakpoints.values.md,
    },
  },

  header_description: {
    margin: {
      top: theme.spacing.unit * 4,
    },
  },

  tabs: {
    border: {
      color: theme.palette.divider,
      style: 'solid',
      width: [[1, 0]],
    },
  },
}))(withWidth()(PageWithTabs));
