import Button from 'components/Button';
import classnames from 'classnames';
import hero from 'images/hero_profile_graphic.jpg';
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
    description="
      The average employee spends 19% of their work day searching for word docs,
      excel spreadsheets, power points, basically, for information. Our past
      generation ways of sharing and finding information is transitioning to
      take advantage of new technologies to build a world class intranet. This
      is MyPepsiCo Next Gen… the Next Generation of MyPepsico.
    "
    image={hero}
    tabs={[
      {
        content: (
          <div className={classes.container}>
            <img
              alt=""
              className={classnames(classes.image, classes.left)}
              src={profile}
            />
            <Typography component="div" variant="body1">
              <p>Content and user first design</p>
              <ul>
                <li>Focus on content and you will fix findability</li>
              </ul>
            </Typography>
          </div>
        ),
        label: 'MyPepsiCo',
      },
      {
        content: (
          <div className={classes.container}>
            <Typography component="div" variant="body1">
              <p>
                Google Cloud Search is almost here. It brings Google’s latest
                and greatest search capabilities to the enterprise.
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
              className={classnames(classes.image, classes.right)}
              src={profile}
            />
          </div>
        ),
        label: 'Search',
      },
      {
        content: (
          <div className={classes.container}>
            <img
              alt=""
              className={classnames(classes.image, classes.left)}
              src={profile}
            />
            <Typography component="div" variant="body1">
              <p>
                We used user centered design and design thinking to “rethink”
                the profile. We came up with a pretty amazing concept that’s not
                only valuable for other people looking for you, but valuable for
                you. The goal is to bring the information to you vs making you
                go find it. Think “LinkedIn” for the enterprise. Giving you the
                tools to manage your brand and identity within PepsiCo while
                using that data and integrations with other systems to recommend
                new roles, relent training and course, and people like you to
                build your network.
              </p>
              <Button
                className={classes.button}
                href="https://cloudsearch.google.com/cloudsearch/search"
              >
                Launch The Demo
              </Button>
            </Typography>
          </div>
        ),
        label: 'User Profiles',
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

  image: {
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

  left: {
    margin: {
      right: theme.spacing.unit * 3,
    },
  },

  right: {
    margin: {
      left: theme.spacing.unit * 3,
    },
  },
}))(Ngmp);
