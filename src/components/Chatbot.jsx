import axios from 'axios';
import { Chat } from 'botframework-webchat';
import { DirectLine } from 'botframework-directlinejs';
import { Fab, Typography, withStyles } from '@material-ui/core';
import { faRobot } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { get } from 'lodash-es';
import globe from 'images/globe.png';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import user from 'images/user.png';

/**
 * @constant
 * @type {string}
 */
const title = 'Next Gen Bot';

/**
 * @class
 * @param {object} props
 */
class Chatbot extends Component {
  /**
   * @type {object}
   */
  state = {
    botConnection: null,
    hidden: true,
    id: Date.now().toString(),
    name: 'You',
  };

  componentDidMount() {
    axios({
      headers: {
        Authorization:
          'Bearer O7Lqvlfkuhc.h-TYefcKJjj43pVWk5BMmr-SHFxtU9VaCjBiKneTDxM',
      },
      method: 'post',
      url: 'https://directline.botframework.com/v3/directline/tokens/generate',
    }).then((response) => {
      /**
       * @constant
       * @type {function}
       */
      const botConnection = new DirectLine({
        token: get(response, 'data.token'),
      });

      this.setState({
        botConnection,
      });
    });
  }

  onHelp = () => {
    /**
     * @constant
     */
    const { botConnection, id, name } = this.state;

    botConnection
      .postActivity({
        from: {
          id,
          name,
        },
        name: 'helpButtonClicked',
        type: 'event',
        value: 'help',
      })
      .subscribe(() => {});
  };

  onHide = () => {
    this.setState({
      hidden: true,
    });
  };

  onShow = () => {
    this.setState(
      {
        hidden: false,
      },
      () => {
        /**
         * @constant
         * @type {HTMLElement}
         */
        const header = document.querySelector('.wc-header');

        header.textContent = title;
        header.addEventListener('click', this.onHide);

        this.onHelp();
      }
    );
  };

  render() {
    /**
     * @constant
     */
    const { classes } = this.props;
    /**
     * @constant
     */
    const { botConnection, hidden, id, name } = this.state;

    return (
      <Fragment>
        {hidden && (
          <Fab className={classes.fab} color="primary" onClick={this.onShow}>
            <FontAwesomeIcon icon={faRobot} />
          </Fab>
        )}
        {botConnection && !hidden && (
          <Typography component="div">
            <Chat
              bot={{ id: 'botid' }}
              directLine={botConnection}
              sendTyping
              resize="detect"
              user={{ id, name }}
            />
          </Typography>
        )}
      </Fragment>
    );
  }
}

Chatbot.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

/**
 * @type {ReactElement}
 */
export default withStyles((theme) => ({
  fab: {
    bottom: theme.spacing.unit * 2,
    position: 'fixed',
    right: theme.spacing.unit * 2,
  },

  '@global': {
    '.wc-chatview-panel': {
      border: {
        color: theme.palette.divider,
        style: 'solid',
        width: 1,
      },
      height: 500,
      left: 'auto',
      top: 'auto',
      width: 400,
    },

    '.wc-header': {
      background: {
        color: '#09070b',
      },
      cursor: 'pointer',
    },

    '.wc-message-pane': {
      '& h1, & h2, & h3, & h4, & p, & ul, & ol': {
        margin: 0,
        padding: 0,
      },
    },

    '.wc-message-from-bot': {
      background: {
        image: `url(${globe})`,
        position: [0, 0],
        repeat: 'no-repeat',
        size: [36, 36],
      },
      display: 'block',
      padding: {
        left: 50,
      },
    },

    '.wc-message-from-me': {
      background: {
        image: `url(${user})`,
        position: ['right', 'top'],
        repeat: 'no-repeat',
        size: [36, 36],
      },
      display: 'block',
      padding: {
        right: 50,
      },
    },

    '.wc-message-from': {
      background: {
        image: 'none',
      },
    },

    '.wc-message-from-bot svg.wc-message-callout': {
      left: 44,
    },

    '.wc-message-from-me svg.wc-message-callout': {
      right: 44,
    },
  },
}))(Chatbot);
