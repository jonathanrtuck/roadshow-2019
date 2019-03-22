import background from 'images/background.png';
import { ButtonBase, Grid, Typography, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import sections from 'constants/sections';
import { VIEW_UPDATE } from 'store/action-types';

/**
 * @constant
 * @function
 * @param {object} props
 * @returns {ReactElement}
 */
const Launcher = ({ classes, theme, updateView }) => (
  <nav className={classes.root}>
    <header className={classes.header}>
      <h1 className={classes.h1}>
        <svg
          aria-label="PepsiCo"
          className={classes.logo}
          viewBox="0 0 590.666 164"
        >
          <path
            clipRule="evenodd"
            d="M155.234,102.004h13.325c5.199,0,7.176,1.794,7.176,6.188c0,4.231-1.978,6.023-7.176,6.023h-13.325V102.004L155.234,102.004z M134.591,146.447h20.644v-18.072h22.112c14.64,0,19.911-8.624,19.911-19.774c0-12.943-5.42-20.267-20.06-20.267h-42.607V146.447L134.591,146.447z"
          />
          <polygon
            clipRule="evenodd"
            points="204.066,88.334 259.627,88.334 259.627,102.493 224.71,102.493 224.71,110.307 257.142,110.307 257.142,124.472 224.71,124.472 224.71,132.285 259.627,132.285 259.627,146.447 204.066,146.447 204.066,88.334"
          />
          <path
            clipRule="evenodd"
            d="M288.912,102.004h13.324c5.198,0,7.176,1.794,7.176,6.188c0,4.231-1.978,6.023-7.176,6.023h-13.324V102.004L288.912,102.004z M268.268,146.447h20.644v-18.072h22.108c14.644,0,19.916-8.624,19.916-19.774c0-12.943-5.42-20.267-20.063-20.267h-42.605V146.447L268.268,146.447z"
          />
          <path
            clipRule="evenodd"
            d="M350.918,121.785c-10.101-1.712-14.271-8.223-14.271-16.36c0-15.06,13.251-19.126,30.231-19.126c23.277,0,32.869,6.753,33.602,19.045h-24.013c0-2.361-1.245-3.829-3.145-4.642c-1.831-0.893-4.172-1.218-6.444-1.218c-6.149,0-8.27,1.707-8.27,4.151c0,1.625,0.656,2.687,2.706,3.011l24.67,4.068c10.397,1.709,16.84,7.081,16.84,16.927c0,14.167-10.396,20.841-33.604,20.841c-15.885,0-33.236-2.441-33.308-19.534h24.89c0.07,1.951,0.732,3.253,2.198,4.149c1.533,0.815,3.804,1.223,7.024,1.223c6.441,0,8.201-1.955,8.201-4.723c0-1.709-0.954-3.417-3.73-3.903L350.918,121.785L350.918,121.785z"
          />
          <polygon
            clipRule="evenodd"
            points="409.556,88.334 430.199,88.334 430.199,146.447 409.556,146.447 409.556,88.334"
          />
          <path
            clipRule="evenodd"
            d="M506.706,123.82c-1.318,7.651-3.664,13.837-8.789,18.068c-5.048,4.233-12.957,6.594-25.546,6.594c-12.518,0-35.725-0.979-35.725-31.09c0-30.117,23.207-31.094,35.725-31.094c12.442,0,31.624,1.789,34.335,24.826h-23.28c-0.586-4.155-3.079-10.177-11.055-10.177c-8.423,0-13.766,4.639-13.766,16.444c0,11.802,5.199,16.438,12.739,16.438c6.517,0,10.397-3.011,12.081-10.01H506.706L506.706,123.82z"
          />
          <path
            clipRule="evenodd"
            d="M533.717,117.393c0-11.806,5.346-16.444,13.766-16.444c8.417,0,13.764,4.639,13.764,16.444c0,11.802-5.347,16.438-13.764,16.438C539.063,133.83,533.717,129.194,533.717,117.393L533.717,117.393z M511.753,117.393c0,30.11,23.207,31.09,35.729,31.09c12.519,0,35.726-0.979,35.726-31.09c0-30.117-23.207-31.094-35.726-31.094C534.96,86.299,511.753,87.275,511.753,117.393L511.753,117.393z"
          />
          <path
            clipRule="evenodd"
            d="M103.397,88.91c1.333-27.881-22.711-59.279-55.49-63.16l0.056-0.381c32.315,0,57.088,29.916,57.088,53.517c-0.031,4.913-0.419,7.957-1.111,10.167L103.397,88.91L103.397,88.91zM101.439,92.454c-2.15,2.627-4.854,5.272-8.022,7.783c-5.828-33.519-30.459-62.829-47.873-71.384l-0.373,0.26c17.513,14.373,38.401,42.288,46.524,72.439c-3.886,2.864-8.378,5.5-13.341,7.64C61.828,90.346,46.421,54,41.456,30.936l-0.505,0.152c0.112,22.388,16.007,60.394,35.391,78.939c-4.302,1.697-8.928,3.02-13.786,3.809c-18.581-7.361-31.807-30.937-31.807-55.088c0-15.766,4.807-25.519,5.737-27.515l-0.396-0.157c-1.125,1.702-8.167,11.45-8.167,28.471c0,27.299,13.463,48.165,31.337,54.736c-6.115,0.665-12.55,0.464-19.152-0.899l-0.133,0.416c1.912,0.704,8.399,3.427,18.295,3.427c22.383,0,37.514-13.907,43.605-24.478L101.439,92.454L101.439,92.454z"
          />
          <path
            clipRule="evenodd"
            d="M56.032,15.518c-16.968,0-36.864,12.246-36.864,23.44c0,4.33,3.961,7.988,12.159,7.988c19.031,0,36.712-13.075,36.712-23.242C68.039,18.354,62.901,15.518,56.032,15.518L56.032,15.518zM62.806,23.388c0,8.57-16.457,19.046-30.214,19.046c-6.078,0-9.362-2.392-9.362-6.339c0-8.693,16.644-18.991,29.548-18.991C61.191,17.104,62.806,21.385,62.806,23.388L62.806,23.388z"
          />
          <path
            clipRule="evenodd"
            d="M12.408,44.141c-0.477,0.825-2.387,4.565-2.387,8.397c0,7.107,7.181,13.705,20.389,13.705c25.409,0,54.765-18.703,54.765-36.064c0-7.793-7.377-12.03-12.499-12.906l-0.096,0.304c1.593,0.504,7.429,3.217,7.429,10.159c0,13.833-25.919,32.681-51.737,32.681c-9.884,0-16.111-4.879-16.111-11.986c0-2.248,0.468-3.729,0.592-4.158L12.408,44.141L12.408,44.141z"
          />
          <path
            clipRule="evenodd"
            d="M95.651,31.477c0.697,0.529,4.882,4.017,4.882,10.613c0,22.49-35.238,44.605-66.391,44.605c-18.578,0-27.047-9.173-26.672-17.318h0.333c0.728,4.23,6.76,11.799,23.02,11.799c31.192,0,66.019-22.883,66.019-42.932c0-3.439-0.934-5.582-1.462-6.535L95.651,31.477L95.651,31.477z"
          />
          <path
            clipRule="evenodd"
            d="M107.429,52.473c0.146,0.479,0.905,2.632,0.905,6.004c0,25.018-35.661,46.436-66.676,46.436c-15.963,0-24.299-7.754-26.059-10.903l0.284-0.21c4.417,3.863,13.117,6.798,23.27,6.798c27.392,0,68.265-20.84,67.9-48.034L107.429,52.473L107.429,52.473z"
          />
        </svg>
      </h1>
      <Typography className={classes.h2} color="inherit" component="h2">
        Digital Experience Solutions
      </Typography>
    </header>
    <Grid
      className={classes.grid}
      container
      justify="center"
      spacing={theme.spacing.unit}
    >
      {sections.map(({ href, icon, id, label }) => (
        <Grid item key={id} sm={6} xs={12}>
          <ButtonBase
            className={classes.tile}
            component={href ? 'a' : 'article'}
            href={href}
            onClick={() => {
              if (!href) {
                updateView(id);
              }
            }}
          >
            {typeof icon === 'object' ? (
              <FontAwesomeIcon
                className={classes.tile_icon}
                icon={icon}
                size="5x"
              />
            ) : (
              <img alt="" className={classes.tile_image} src={icon} />
            )}
            <Typography
              align="center"
              className={classes.tile_title}
              color="inherit"
              component="h3"
              dangerouslySetInnerHTML={{ __html: label }}
            />
          </ButtonBase>
        </Grid>
      ))}
    </Grid>
  </nav>
);

Launcher.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  theme: PropTypes.objectOf(PropTypes.any).isRequired,
  updateView: PropTypes.func.isRequired,
};

/**
 * @type {ReactElement}
 */
export default connect(
  null,
  {
    updateView: (value) => ({
      payload: {
        value,
      },
      type: VIEW_UPDATE,
    }),
  }
)(
  withStyles(
    (theme) => ({
      grid: {
        flex: {
          grow: 1,
          shrink: 0,
        },
        margin: [[0, 'auto']],
        maxWidth: theme.breakpoints.values.md,
        padding: {
          left: theme.spacing.unit,
          right: theme.spacing.unit,
        },
        width: '100%',

        [theme.breakpoints.up('md')]: {
          padding: {
            bottom: 160,
          },
        },
      },

      h1: {
        display: 'inline-block',
        margin: 0,
        verticalAlign: 'middle',
      },

      h2: {
        font: {
          size: '2rem',
          weight: 300,
        },
        lineHeight: 1,
        margin: {
          left: theme.spacing.unit,
        },
        verticalAlign: -27,

        [theme.breakpoints.up('sm')]: {
          font: {
            size: '2.8rem',
          },
        },

        [theme.breakpoints.up('md')]: {
          border: {
            color: 'rgba(255, 255, 255, 0.5)',
            style: 'solid',
            width: [[0, 0, 0, 1]],
          },
          display: 'inline-block',
          margin: {
            left: theme.spacing.unit,
          },
          padding: {
            left: theme.spacing.unit * 2,
          },
        },
      },

      header: {
        flex: {
          grow: 0,
          shrink: 0,
        },
        padding: theme.spacing.unit * 4,
      },

      logo: {
        fill: 'currentColor',
        margin: {
          right: '0.3em',
        },
        maxWidth: '100%',
        width: 320,
      },

      root: {
        background: {
          image: `url(${background})`,
          position: 'center',
          size: 'cover',
        },
        bottom: 0,
        color: theme.palette.primary.contrastText,
        display: 'flex',
        flex: {
          direction: 'column',
        },
        left: 0,
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        position: 'fixed',
        right: 0,
        top: 0,
      },

      tile: {
        background: {
          color: 'rgba(255, 255, 255, 0.25)',
        },
        display: 'flex',
        flex: {
          direction: 'column',
        },
        height: '100%',
        padding: theme.spacing.unit * 3,
      },

      tile_icon: {
        margin: {
          bottom: theme.spacing.unit * 3,
          top: theme.spacing.unit * 2,
        },
      },

      tile_image: {
        height: 64,
        margin: {
          bottom: theme.spacing.unit * 4,
          top: theme.spacing.unit * 3,
        },
      },
      tile_title: {
        font: {
          size: '1.75rem',
          weight: 700,
        },
        lineHeight: 1,
      },
    }),
    {
      withTheme: true,
    }
  )(Launcher)
);
