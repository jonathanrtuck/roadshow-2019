import dxpIcon from 'images/dx.png';
import DXP from 'components/DXP';
import { faComment, faIdCard } from '@fortawesome/pro-solid-svg-icons';
import Header from 'components/Header';
import Launcher from 'components/Launcher';
import Ngmp from 'components/Ngmp';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Slide, withStyles } from '@material-ui/core';

/**
 * @constant
 * @type {object[]}
 */
const sections = [
  {
    Component: Ngmp,
    icon: faIdCard,
    id: 'ngmp',
    label: 'Next Gen<br />Employee Experience',
  },
  {
    Component: DXP,
    icon: dxpIcon,
    id: 'services',
    label: 'Next Gen<br />Digital Experience Platform',
  },
  {
    href:
      'https://forms.office.com/Pages/ResponsePage.aspx?id=lTLMQg7NnES5jlzltWDB0zpVKts4PclKpVVo48B70-BUN0NBWDhTVVc0TkpWRVVFNU1SRUpFWUlYWS4u',
    icon: faComment,
    id: 'contact',
    label: 'Contact Us',
  },
];

/**
 * @constant
 * @function
 * @param {object} props
 * @returns {ReactElement}
 */
const App = ({ classes }) => {
  /**
   * @constant
   * @type {string}
   */
  const [view, setView] = useState('launcher');

  return (
    <main>
      <Slide appear={false} direction="right" in={view === 'launcher'}>
        <Launcher sections={sections} setView={setView} />
      </Slide>
      {sections.map(
        ({ Component, id }) =>
          Component && (
            <Slide direction="left" in={view === id} key={id}>
              <section className={classes.section}>
                <Header setView={setView} />
                <Component />
              </section>
            </Slide>
          )
      )}
    </main>
  );
};

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

/**
 * @type {ReactElement}
 */
export default withStyles((theme) => ({
  section: {
    background: {
      color: theme.palette.background.paper,
    },
    bottom: 0,
    left: 0,
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    position: 'fixed',
    right: 0,
    top: 0,
  },
}))(App);
