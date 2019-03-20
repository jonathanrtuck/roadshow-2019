import accelerate from 'images/roadshow_DXP_graphic_1.png';
import Button from 'components/Button';
import classnames from 'classnames';
import generator from 'images/roadshow_campaign_graphic.jpg';
import hero from 'images/roadshow_dxp_graphic_2.jpg';
import PageWithTabs from 'components/PageWithTabs';
import PropTypes from 'prop-types';
import React from 'react';
import snacks from 'images/roadshow_snacks2you_graphic.jpg';
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
      Our DXP provides best-of-breed modern digital technologies to delivery rich
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
            <img
              alt=""
              className={classnames(classes.left, classes.media)}
              src={generator}
            />
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
              <Button href="https://dmp-pepsico-dev.azurewebsites.net/admin/">
                Launch Demo
              </Button>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p>B004TBLSKW,B009PTZW9Q,B009PTZVUQ,B004TBRSB0,B00RXIWRBW</p>
              <Button href="https://dmp-smartads-dev.azureedge.net/democheetoscampaign">
                Launch Site
              </Button>
            </Typography>
          </div>
        ),
        label: 'Self-Service Campaign Generator',
      },
      {
        content: (
          <div className={classes.container}>
            <Typography component="div" variant="body1">
              <p>
                Snack2U had a challenge for us. Can we make it easier to reorder
                products through our Snacks2 you ecommerce platform.
              </p>
              <Button href="http://localhost/barcode-scanner/dist/">
                Launch The Demo
              </Button>
            </Typography>
            <img
              alt=""
              className={classnames(classes.right, classes.media)}
              src={snacks}
            />
          </div>
        ),
        label: 'Snack2U Mobile Ordering',
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
    alignItems: 'flex-start',
    display: 'flex',
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
  },

  right: {
    marginLeft: theme.spacing.unit * 3,
  },
}))(Services);
