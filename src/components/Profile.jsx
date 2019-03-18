import hero from 'images/background.png';
import Page from 'components/Page';
import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';

/**
 * @constant
 * @function
 * @param {object} props
 * @returns {ReactElement}
 */
const Profile = () => (
  <Page
    content={
      <Fragment>
        <Typography gutterBottom variant="body1">
          <strong>The Opportunity: </strong>
          Usage metrics indicate that the MyPepsiCo Employee Profiles are a
          valuable resource for PepsiCo associates but the design is over ten
          years old and has undergone only minor cosmetic updates since then. In
          that time social media applications like Linkedin and Facebook have
          exploded and users expectations for a user profile has been shaped by
          their experiences with those apps. The new MyPepsiCo Next Gen can
          provide a new modern, responsive UI for the Next Gen Employee Profiles
          and the Next Gen Search brings powerful new capabilities to the table
          including
        </Typography>
      </Fragment>
    }
    image={hero}
    title="NextGen Employee Profile"
    link="https://cloudsearch.google.com/cloudsearch/search"
  />
);

/**
 * @type {ReactElement}
 */
export default Profile;
