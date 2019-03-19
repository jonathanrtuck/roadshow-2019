import Button from 'components/Button';
import classnames from 'classnames';
import hero from 'images/hero_profile_graphic.jpg';
import ngmp from 'images/roadshow_mypepsicoNG_graphic.jpg';
import PageWithTabs from 'components/PageWithTabs';
import profile from 'images/profile_graphic.jpg';
import PropTypes from 'prop-types';
import React from 'react';
import { Typography, withStyles } from '@material-ui/core';

/**
 * @constant
 * @function
 * @param {object} props
 * @returns {ReactElement}
 */
const Ngmp = ({ classes }) => (
  <PageWithTabs
    description="Simplifying the employee’s work day."
    image={hero}
    tabs={[
      {
        content: (
          <div className={classes.container}>
            <img
              alt=""
              className={classnames(classes.media, classes.left)}
              src={ngmp}
            />
            <Typography component="div" variant="body1">
              <p>
                We have redesigned the MyPepsiCo intranet portal with a renewed
                focus on simplified content creation and better content
                findability. To accomplish this we have:
              </p>
              <ul>
                <li>
                  Designed new, more scalable organizational patterns for
                  content to improve way finding.
                </li>
                <li>
                  Increased guidance and governance around good content writing
                  practices to aid in search relevance
                </li>
                <li>
                  Simplified content creation for authors by making web content
                  management (WCM) functions easily accessible and intuitive
                </li>
              </ul>
            </Typography>
          </div>
        ),
        label: 'Next Gen MyPepsiCo',
      },
      {
        content: (
          <div className={classes.container}>
            <Typography component="div" variant="body1">
              <p>
                To continue the play on better content findability through
                search we are upgrading to Google Cloud Search, which brings
                Google’s latest secured search capabilities to the enterprise.
              </p>
              <ul>
                <li>Artificial intelligence</li>
                <li>Natural Language Process</li>
                <li>Personalized and contextual search</li>
                <li>New Data Sources Like O365 and Service Now</li>
              </ul>
              <Button className={classes.button} href="">
                Launch The Demo
              </Button>
            </Typography>
            <img
              alt=""
              className={classnames(classes.media, classes.right)}
              src={profile}
            />
          </div>
        ),
        label: 'Next Gen Search',
      },
      {
        content: (
          <div className={classes.container}>
            <img
              alt=""
              className={classnames(classes.media, classes.left)}
              src={profile}
            />
            <Typography component="div" variant="body1">
              <p>
                We recently used user centered design and design thinking
                techniques to “rethink” the employee profile. The resulting
                designs strive to:
              </p>
              <ul>
                <li>
                  Clean up the profile landscape - help the user to understand
                  how all their different profile instances relate to each other
                </li>
                <li>
                  Improve the completeness and accuracy of profile information
                </li>
                <li>
                  Make a user’s profile just as valuable to them as it is to
                  other people
                </li>
              </ul>
              <Button
                className={classes.button}
                href="https://cloudsearch.google.com/cloudsearch/search"
              >
                Launch The Demo
              </Button>
            </Typography>
          </div>
        ),
        label: 'Next Gen User Profiles',
      },
    ]}
    title="Next Gen Employee Experience"
  />
);

Ngmp.propTypes = {
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

  container: {
    display: 'flex',
  },

  left: {
    margin: {
      right: theme.spacing.unit * 3,
    },
  },

  media: {
    display: 'block',
    flex: {
      grow: 0,
      shrink: 0,
    },
    margin: {
      bottom: theme.spacing.unit * 3,
      left: 'auto',
      right: 'auto',
    },
  },

  right: {
    margin: {
      left: theme.spacing.unit * 3,
    },
  },
}))(Ngmp);
