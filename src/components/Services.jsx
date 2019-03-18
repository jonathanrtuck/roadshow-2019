import Button from 'components/Button';
import hero from 'images/background.png';
import PageWithTabs from 'components/PageWithTabs';
import React from 'react';
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
          <Typography component="div" variant="body1">
            <ol>
              <li>
                Cloud native = Speed. Ultra-fast time to market by speeding up
                development, testing, deployment, and site/page load times.
                <ol style={{ listStyle: 'lower-alpha' }}>
                  <li>Best of Breed technology</li>
                  <li>Decoupled Architectures</li>
                  <li>Continuous delivery</li>
                  <li>Elastic infrastructure</li>
                  <li>
                    PepsiCo Developed Accelerators
                    <ol style={{ listStyle: 'lower-roman' }}>
                      <li>Pre built reusable components</li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>
                New Services
                <ol style={{ listStyle: 'lower-alpha' }}>
                  <li>Accessibility</li>
                  <li>SEO</li>
                  <li>Global delivery</li>
                  <li>Web Analytics and Insights</li>
                  <li>Customer Data DMP</li>
                  <li>Hosting</li>
                </ol>
              </li>
            </ol>
          </Typography>
        ),
        label: 'Cloud Native Platform',
      },
      {
        content: (
          <Typography component="div" variant="body1">
            <ol>
              <li>
                Marketers need speed, they need to be self sufficient, and
                innovative
              </li>
              <li>Our turn key campaign manager is all of this.</li>
            </ol>
            <Button href="">Launch The Demo</Button>
          </Typography>
        ),
        label: 'Turn Key',
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
    title="Next Gen Digital Experience Platform"
  />
);

/**
 * @type {ReactElement}
 */
export default Services;
