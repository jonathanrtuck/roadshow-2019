import hero from 'images/background.png';
import Page from 'components/Page';
import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';

/**
 * @constant
 * @type {ReactElement}
 */
const content = (
  <Fragment>
    <Typography gutterBottom variant="body1">
      Suspendisse tempor dignissim urna, sed aliquet dui semper eget. In quam
      nisl, pharetra id urna sit amet, porta sollicitudin dui. Phasellus id ante
      et ipsum pharetra ullamcorper ut in tortor. Suspendisse gravida sed libero
      id sodales. Donec tristique laoreet velit, quis ullamcorper nunc euismod
      at. Cras blandit vulputate sagittis. Nunc in ligula at erat fermentum
      elementum in sit amet libero. Integer et leo non lacus porttitor rhoncus
      sed et eros. Donec eget maximus sapien. Pellentesque dapibus metus auctor
      nisl venenatis lobortis. Sed pulvinar dignissim luctus. Nunc justo eros,
      ultricies mattis sapien at, placerat fringilla dui.
    </Typography>
    <Typography variant="body1">
      Praesent molestie odio lectus, et posuere mauris varius ac. Mauris
      placerat tortor facilisis, pretium lectus nec, dictum nisl. Morbi non
      condimentum ligula, eu imperdiet erat. Morbi interdum, justo vitae tempus
      auctor, ipsum dui vehicula nisi, vel tincidunt metus risus vitae orci.
      Praesent aliquet enim metus, vitae malesuada quam congue eu. Donec quis
      scelerisque felis. Pellentesque pretium lacus et est tempor, ac lobortis
      ipsum congue. Cras tempor augue vitae libero sagittis, interdum finibus
      enim feugiat. Donec eget accumsan turpis, sit amet porttitor mauris.
      Integer volutpat, ex at placerat varius, lectus libero sagittis tellus, ut
      sodales ante libero sit amet purus. Mauris at gravida nibh, quis porta
      arcu. Sed leo sem, euismod non malesuada eu, tempor quis mi.
    </Typography>
  </Fragment>
);

/**
 * @constant
 * @function
 * @param {object} props
 * @returns {ReactElement}
 */
const Profile = () => (
  <Page content={content} image={hero} title="Lorem ipsum dolor sit amet" />
);

/**
 * @type {ReactElement}
 */
export default Profile;
