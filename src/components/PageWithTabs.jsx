import classnames from 'classnames';
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
      {tabs.map(({ alignMedia, content, label, media }, i) =>
        tabIndex === i ? (
          <section className={classes.section} key={label}>
            <img
              alt=""
              className={classnames(classes[alignMedia], classes.media)}
              src={media}
            />
            <Typography component="div" variant="body1">
              {content}
            </Typography>
          </section>
        ) : null
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
      alignMedia: PropTypes.oneOf(['left', 'right']).isRequired,
      content: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
      ]).isRequired,
      media: PropTypes.string.isRequired,
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

  section: {
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

  tabs: {
    border: {
      color: theme.palette.divider,
      style: 'solid',
      width: [[1, 0]],
    },
  },
}))(withWidth()(PageWithTabs));
