import background from 'images/background.png';
import { ButtonBase, Grid, Typography, withStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from 'components/Logo';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * @constant
 * @function
 * @param {object} props
 * @returns {ReactElement}
 */
const Launcher = ({ classes, sections, setView, theme }) => (
  <nav className={classes.root}>
    <header className={classes.header}>
      <h1 className={classes.h1}>
        <Logo className={classes.logo} />
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
                setView(id);
              }
            }}
          >
            {typeof icon === 'string' ? (
              <img alt="" className={classes.tile_image} src={icon} />
            ) : (
              <FontAwesomeIcon
                className={classes.tile_icon}
                icon={icon}
                size="5x"
              />
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
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      Component: PropTypes.func,
      href: PropTypes.string,
      icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  setView: PropTypes.func.isRequired,
  theme: PropTypes.objectOf(PropTypes.any).isRequired,
};

/**
 * @type {ReactElement}
 */
export default withStyles(
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
)(Launcher);
