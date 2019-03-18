import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import hero from 'images/background.png';
import PageWithTabs from 'components/PageWithTabs';
import React, { Fragment } from 'react';
import search from 'images/search.png';

/**
 * @constant
 * @function
 * @param {object} props
 * @returns {ReactElement}
 */

const Search = () => (
  <PageWithTabs
    description="
      Google Cloud Search: A Fully Managed Secure Enterprise Search Platform
      from Google. All in one place for Social and collaborative intranet for
      collaboration and internal communications
    "
    image={hero}
    link={
      <Button size="medium" color="primary" target="_blank" href="search.html">
        See Demo
      </Button>
    }
    tabs={[
      {
        content: (
          <Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="G Suite & 3rd Party Content"
                  secondary={
                    <List>
                      <ListItem>
                        <ListItemText secondary="Scalable Indexing API" />
                      </ListItem>
                      <ListItem>
                        <ListItemText secondary="Connector SDK" />
                      </ListItem>
                      <ListItem>
                        <ListItemText secondary="Reference Connectors" />
                      </ListItem>
                    </List>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="World Class Search Experience"
                  secondary="
                    Ranking based on user, content and application context.
                    Machine learned and custom language models
                  "
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Operational Manageability"
                  secondary="
                    Effortlessly scale and operate Configurable index, ranking
                    weights by search application
                  "
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Hardened Security"
                  secondary="Document level permissions dynamically reflected from the source system"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Search In Context"
                  secondary={
                    <List subheader="Embed search in any intranet workflow">
                      <ListItem>
                        <ListItemText secondary="Query API" />
                      </ListItem>
                      <ListItem>
                        <ListItemText secondary="Embeddable Search Widget" />
                      </ListItem>
                    </List>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Identities & People Search"
                  secondary="Google identities for all users with immersive directory pages"
                />
              </ListItem>
            </List>
          </Typography>
        ),
        label: 'Core Benifits',
      },
      {
        content: (
          <Typography variant="body1">
            <img alt="" src={search} />
          </Typography>
        ),
        label: 'Concept Two',
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
          </Fragment>
        ),
        label: 'Item Three',
      },
    ]}
    title="NextGen Search"
  />
);

/**
 * @type {ReactElement}
 */
export default Search;
