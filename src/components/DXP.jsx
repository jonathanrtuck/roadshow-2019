import accelerate from 'images/roadshow_DXP_graphic_1.png';
import Button from 'components/Button';
import generator from 'images/roadshow_campaign_graphic.jpg';
import hero from 'images/roadshow_dxp_graphic_2.jpg';
import PageWithTabs from 'components/PageWithTabs';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import snacks from 'images/roadshow_snacks2you_graphic.jpg';
import { withStyles } from '@material-ui/core';

/**
 * @constant
 * @function
 * @param {object} props
 * @returns {ReactElement}
 */
const Services = ({ classes }) => (
  <PageWithTabs
    description="
      Our DXP provides best-of-breed modern digital technologies and
      accelerators to delivery rich and engaging user experiences.
    "
    image={hero}
    tabs={[
      {
        alignMedia: 'right',
        content: (
          <Fragment>
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
          </Fragment>
        ),
        label: 'Accelerate',
        media: accelerate,
      },
      {
        alignMedia: 'left',
        content: (
          <Fragment>
            <p>
              New social platforms and changing consumer behaviors are requiring
              PepsiCo marketers to be more nimble. They are developing
              micro-campaigns that use our consumer data to define audience
              segments, personalized messages, and deliver micro-campaigns to
              drive conversions and sales. The current model of directing users
              to a single online vendor for a single product is resulting in
              lower than expected conversion rates.
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
                Collecting user data to build a comprehensive view of the user’s
                journey
              </li>
            </ul>
            <Button
              className={classes.button}
              href="https://dmp-pepsico-dev.azurewebsites.net/admin/"
            >
              Launch Demo
            </Button>
          </Fragment>
        ),
        label: 'Self-Service Campaign Generator',
        media: generator,
      },
      {
        alignMedia: 'right',
        content: (
          <Fragment>
            <p>
              Snack2U had a challenge for us. Can we make it easier to reorder
              products through our Snacks2 you ecommerce platform.
            </p>
          </Fragment>
        ),
        label: 'Snack2U Mobile Ordering',
        media: snacks,
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
}))(Services);
