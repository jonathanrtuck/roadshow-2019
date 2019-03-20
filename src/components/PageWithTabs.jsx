import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { Tab, Tabs, Typography, withStyles } from '@material-ui/core';

/**
 * @class
 * @param {object} props
 * @see https://cloud.withgoogle.com/next/sf/learning
 * @todo scroll tab content into view when changing tab.
 */
class PageWithTabs extends Component {
  /**
   * @type {object}
   */
  state = {
    tabIndex: 0,
  };

  onTabChange = (e, i) => {
    this.setState({
      tabIndex: i,
    });
  };

  render() {
    /**
     * @constant
     */
    const {
      backgroundPosition,
      classes,
      description,
      image,
      link,
      tabs,
      title,
    } = this.props;
    /**
     * @constant
     */
    const { tabIndex } = this.state;

    return (
      <Fragment>
        <header
          className={classes.header}
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: backgroundPosition || 'center',
          }}
        >
          <div className={classes.header_content}>
            <Typography
              align="center"
              className={classes.header_title}
              component="h1"
              variant="h3"
            >
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
          centered
          className={classes.tabs}
          indicatorColor="primary"
          onChange={this.onTabChange}
          textColor="primary"
          value={tabIndex}
        >
          {tabs.map(({ label }) => (
            <Tab key={label} label={label} />
          ))}
        </Tabs>
        {tabs.map(({ content, label }, i) =>
          tabIndex === i ? (
            <section className={classes.section} key={label}>
              {content}
            </section>
          ) : null
        )}
      </Fragment>
    );
  }
}

PageWithTabs.propTypes = {
  backgroundPosition: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  link: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.element.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string.isRequired,
};

PageWithTabs.defaultProps = {
  backgroundPosition: '',
  description: '',
  link: '',
};

/**
 * @type {ReactElement}
 */
export default withStyles((theme) => ({
  header: {
    background: {
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

  header_title: {},

  section: {
    padding: theme.spacing.unit * 4,

    [theme.breakpoints.up('md')]: {
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
}))(PageWithTabs);
