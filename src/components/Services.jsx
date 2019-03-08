import hero from 'images/background.png';
import PageWithTabs from 'components/PageWithTabs';
import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';

/**
 * @constant
 * @function
 * @param {object} props
 * @returns {ReactElement}
 */
const Services = () => (
  <PageWithTabs
    description="
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
    "
    image={hero}
    tabs={[
      {
        content: (
          <Typography variant="body1">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </Typography>
        ),
        label: 'Item One',
      },
      {
        content: (
          <Typography variant="body1">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur.
          </Typography>
        ),
        label: 'Item Two',
      },
      {
        content: (
          <Fragment>
            <Typography gutterBottom variant="body1">
              Suspendisse tempor dignissim urna, sed aliquet dui semper eget. In
              quam nisl, pharetra id urna sit amet, porta sollicitudin dui.
              Phasellus id ante et ipsum pharetra ullamcorper ut in tortor.
              Suspendisse gravida sed libero id sodales. Donec tristique laoreet
              velit, quis ullamcorper nunc euismod at. Cras blandit vulputate
              sagittis. Nunc in ligula at erat fermentum elementum in sit amet
              libero. Integer et leo non lacus porttitor rhoncus sed et eros.
              Donec eget maximus sapien. Pellentesque dapibus metus auctor nisl
              venenatis lobortis. Sed pulvinar dignissim luctus. Nunc justo
              eros, ultricies mattis sapien at, placerat fringilla dui.
            </Typography>
            <Typography variant="body1">
              Praesent molestie odio lectus, et posuere mauris varius ac. Mauris
              placerat tortor facilisis, pretium lectus nec, dictum nisl. Morbi
              non condimentum ligula, eu imperdiet erat. Morbi interdum, justo
              vitae tempus auctor, ipsum dui vehicula nisi, vel tincidunt metus
              risus vitae orci. Praesent aliquet enim metus, vitae malesuada
              quam congue eu. Donec quis scelerisque felis. Pellentesque pretium
              lacus et est tempor, ac lobortis ipsum congue. Cras tempor augue
              vitae libero sagittis, interdum finibus enim feugiat. Donec eget
              accumsan turpis, sit amet porttitor mauris. Integer volutpat, ex
              at placerat varius, lectus libero sagittis tellus, ut sodales ante
              libero sit amet purus. Mauris at gravida nibh, quis porta arcu.
              Sed leo sem, euismod non malesuada eu, tempor quis mi.
            </Typography>
          </Fragment>
        ),
        label: 'Item Three',
      },
    ]}
    title="Lorem ipsum dolor sit amet"
  />
);

/**
 * @type {ReactElement}
 */
export default Services;
