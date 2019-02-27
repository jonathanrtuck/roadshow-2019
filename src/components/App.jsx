import { connect } from 'react-redux';
import { get } from 'lodash-es';
import Launcher from 'components/Launcher';
import PropTypes from 'prop-types';
import React from 'react';
import Section from 'components/Section';
import sections from 'constants/sections';
import { Slide } from '@material-ui/core';

/**
 * @constant
 * @function
 * @param {object} props
 * @returns {ReactElement}
 */
const App = ({ view }) => (
  <main>
    <Slide appear={false} direction="right" in={view === 'launcher'}>
      <Launcher />
    </Slide>
    {sections.map(({ component, id }) => (
      <Slide direction="left" in={view === id} key={id}>
        <Section>{component}</Section>
      </Slide>
    ))}
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
}))(App);
