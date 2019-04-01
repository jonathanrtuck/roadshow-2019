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
      Something about analytics…
    "
    image={background}
    tabs={[
      {
        content: (
          <Content alignMedia="right" media={ga}>
            <p>Something about analytics…</p>
            <Button
              className={classes.button}
              href="https://analytics.google.com/analytics/web/?authuser=1#/report-home/a133168386w197151714p192068025"
            >
              Launch Site
            </Button>
          </Content>
        ),
        label: 'Google Analytics…',
      },
      {
        content: (
          <Content alignMedia="left" media={recording}>
            <p>Something about recording…</p>
            <Button className={classes.button} href="http://mouseflow.com">
              Launch Site
            </Button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>
              ben@base22.com
              <br />
              22cupsofcoffee
            </p>
          </Content>
        ),
        label: 'Mouseflow…',
      },
    ]}
    title="Usage Analytics…"
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
