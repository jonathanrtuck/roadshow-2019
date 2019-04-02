import background from 'images/background.png';
import Button from 'components/Button';
import Content from 'components/Content';
import ga from 'images/ga.png';
import PageWithTabs from 'components/PageWithTabs';
import PropTypes from 'prop-types';
import React from 'react';
import recording from 'images/recording.png';
import { withStyles } from '@material-ui/core';

/**
 * @constant
 * @function
 * @param {object} props
 * @returns {ReactElement}
 */
const Analytics = ({ classes }) => (
  <PageWithTabs
    description="
      Understanding your audience is the key to growing your audience and
      maximizing the value of your site. This process is a journey of learning,
      tweaking, and targeting users to influence their behavior. Comprehensive
      metrics including usages and interaction data along with user demographics
      give insights into how successful your site is and how you can improve it.
    "
    image={background}
    tabs={[
      {
        content: (
          <Content alignMedia="right" media={ga}>
            <p>
              Google Analytics makes it easy to understand how your site users
              are engaging with your content, so you know what’s working and
              what’s not. See how people are interacting with your sites by
              viewing robust reports and dashboards.
            </p>
            <Button
              className={classes.button}
              href="https://analytics.google.com/analytics/web/?authuser=1#/report-home/a133168386w197151714p192068025"
            >
              Launch Site
            </Button>
          </Content>
        ),
        label: 'Google Analytics',
      },
      {
        content: (
          <Content alignMedia="left" media={recording}>
            <p>
              Lets you replay the full visitor experience to identify pain
              points, boost conversions, and optimize your site.
            </p>
            <Button className={classes.button} href="http://mouseflow.com">
              Launch Site
            </Button>
          </Content>
        ),
        label: 'User Session Recording',
      },
    ]}
    title="User Usage Metrics and Insights"
  />
);

Analytics.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

/**
 * @type {ReactElement}
 */
export default withStyles((theme) => ({
  button: {
    margin: {
      top: theme.spacing.unit * 3,
    },
  },
}))(Analytics);
