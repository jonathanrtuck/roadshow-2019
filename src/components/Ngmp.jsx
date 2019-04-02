import Button from 'components/Button';
import Content from 'components/Content';
import gcs from 'images/gcs.png';
import hero from 'images/hero_profile_graphic.jpg';
import ngmp from 'images/roadshow_mypepsicoNG_graphic.jpg';
import PageWithTabs from 'components/PageWithTabs';
import profile from 'images/profile_graphic.jpg';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

/**
 * @constant
 * @function
 * @param {object} props
 * @returns {ReactElement}
 */
const Ngmp = ({ classes }) => (
  <PageWithTabs
    description="
      We are using User Centric design principles and new technology to design
      and deliver the next generation of employee productivity and engagement
      solutions.
    "
    image={hero}
    tabs={[
      {
        content: (
          <Content alignMedia="left" media={ngmp}>
            <p>
              We have redesigned the MyPepsiCo intranet portal with a renewed
              focus on simplified content creation and better content
              findability.
            </p>
            <ul>
              <li>
                Scalable organizational patterns for content to improve way
                finding
              </li>
              <li>Simplified content creation for authors</li>
              <li>
                We are working with Global Internal Communications and HR to
                roll out MyPepsiCo Next Gen to all associates in 2019
              </li>
            </ul>
          </Content>
        ),
        label: 'Next Gen MyPepsiCo',
      },
      {
        content: (
          <Content alignMedia="right" media={gcs}>
            <p>
              To continue the play on better content findability through search
              we are upgrading to Google Cloud Search, which brings Google’s
              latest secured search capabilities to the enterprise.
            </p>
            <ul>
              <li>Artificial Intelligence</li>
              <li>Natural Language Process</li>
              <li>Personalized and Contextual Search</li>
              <li>New Data Sources Like O365 and Service Now</li>
              <li>Intelligent Auto-tagging</li>
            </ul>
            <Button
              className={classes.button}
              href="https://cloudsearch.google.com/cloudsearch/search"
            >
              Launch The Demo
            </Button>
          </Content>
        ),
        label: 'Next Gen Search',
      },
      {
        content: (
          <Content alignMedia="left" media={profile}>
            <p>
              We started with research and understanding, competitive analysis,
              broad user surveys, and a design thinking workshop where our
              participants “designed their perfect profile”. We learned that
              they want:
            </p>
            <ul>
              <li>
                A comprehensive one-stop shop for user profile information
              </li>
              <li>
                A LinkedIn style features to better represent their PepsiCo
                experiences and skill (experience, endorsements, skills)
              </li>
              <li>
                A unified experience that aggregates personalized information
                from systems like MyHR, PepsiCo University, and PepsiCoJobs
              </li>
              <li>Coming Q3 2019</li>
            </ul>
            <Button
              className={classes.button}
              href="https://projects.invisionapp.com/share/YEQMZMADKNR#/screens/348095923_My_Profile_-_Profile"
            >
              Launch The Demo
            </Button>
          </Content>
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
}))(Ngmp);
