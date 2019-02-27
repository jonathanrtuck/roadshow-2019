import Analytics from 'components/Analytics';
import Chatbot from 'components/Chatbot';
import { connect } from 'react-redux';
import { get } from 'lodash-es';
import Launcher from 'components/Launcher';
import Profile from 'components/Profile';
import PropTypes from 'prop-types';
import React from 'react';
import Recordings from 'components/Recordings';
import Search from 'components/Search';
import Section from 'components/Section';
import Services from 'components/Services';
import { Slide, withStyles } from '@material-ui/core';

/**
 * @constant
 * @function
 * @param {object} props
 * @returns {ReactElement}
 */
const App = ({ view }) => (
  <main>
    <Slide
      appear={false}
      direction="right"
      in={view === 'launcher'}
      timeout={250}
    >
      <Launcher />
    </Slide>
    <Slide direction="left" in={view === 'analytics'}>
      <Section>
        <Analytics />
      </Section>
    </Slide>
    <Slide direction="left" in={view === 'chatbot'}>
      <Section>
        <Chatbot />
      </Section>
    </Slide>
    <Slide direction="left" in={view === 'profile'}>
      <Section>
        <Profile />
      </Section>
    </Slide>
    <Slide direction="left" in={view === 'recordings'}>
      <Section>
        <Recordings />
      </Section>
    </Slide>
    <Slide direction="left" in={view === 'search'}>
      <Section>
        <Search />
      </Section>
    </Slide>
    <Slide direction="left" in={view === 'services'}>
      <Section>
        <Services />
      </Section>
    </Slide>
  </main>
);

App.propTypes = {
  view: PropTypes.string.isRequired,
};

/**
 * @type {ReactElement}
 */
export default connect((state) => ({
  view: get(state, 'view'),
}))(
  withStyles((theme) => ({
    '@global': {
      body: {
        background: {
          color: theme.palette.grey[800],
        },
      },
    },
  }))(App)
);
