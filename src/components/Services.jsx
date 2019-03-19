import accelerate from 'images/roadshow_DXP_graphic_1.png';
import Button from 'components/Button';
import classnames from 'classnames';
import hero from 'images/hero_2.jpg';
import PageWithTabs from 'components/PageWithTabs';
import PropTypes from 'prop-types';
import React from 'react';
import { Typography, withStyles } from '@material-ui/core';

/**
 * @constant
 * @function
 * @param {object} props
 * @returns {ReactElement}
 */
const Services = ({ classes }) => (
  <PageWithTabs
    description="
      Our DXP provides best of breed modern digital technologies to delivery rich
      and engaging user experiences.
    "
    image={hero}
    tabs={[
      {
        content: (
          <div className={classes.container}>
            <Typography component="div" variant="body1">
              <p>
                We’re accelerating the design, development, and delivery of DX
                solutions, while reducing costs and increasing quality.
              </p>
              <ul>
                <li>Cloud Native</li>
                <li>Technology Standards</li>
                <li>Reusable Components, Capabilities, and Integrations</li>
                <li>Automation</li>
                <li>Self Service</li>
              </ul>
            </Typography>
            <img
              alt=""
              className={classnames(classes.media, classes.right)}
              src={accelerate}
            />
          </div>
        ),
        label: 'Accelerate',
      },
      {
        content: (
          <div className={classes.container}>
            <Typography component="div" variant="body1">
              <p>
                New social platforms and changing consumer behaviors are
                requiring PepsiCo marketers to be more nimble. They are
                developing micro-campaigns that use our consumer data to define
                audience segments, personalized messages, and deliver
                micro-campaigns to drive conversions and sales. The current
                model of directing users to a single online vendor for a single
                product is resulting in lower than expected conversion rates.
              </p>
              <p>
                We’re building a turn key campaign builder that will increase
                conversions by:
              </p>
              <ul>
                <li>Defining a custom product mix</li>
                <li>
                  Allowing consumers to pick their purchase mix and their
                  preferred vendor
                </li>
                <li>Putting products directly into the user’s cart</li>
                <li>
                  Collecting user data to build a comprehensive view of the
                  user’s journey
                </li>
              </ul>
            </Typography>
            <video
              className={classnames(classes.media, classes.right)}
              src=""
            />
          </div>
        ),
        label: 'Self Service Campaign Generator',
      },
      {
        content: (
          <Typography component="div" variant="body1">
            <ol>
              <li>
                Snack2U had a challenge for us. Can we make it easier to reorder
                products through our Snacks2 you ecommerce platform.
              </li>
            </ol>
            <Button href="">Launch Demo</Button>
          </Typography>
        ),
        label: 'Innovative',
      },
    ]}
    title="Digital Experience Platform (DXP)"
  />
);

Services.propTypes = {
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
}))(Services);
