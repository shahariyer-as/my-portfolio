import { makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import { BsFillBrightnessHighFill } from 'react-icons/bs';
import { ImContrast } from "react-icons/im";

import { ThemeContext } from '../../contexts/ThemeContext';
import './ChangeTheme.css';

const ChangeTheme = () => {
  const { theme, changeTheme, isDark } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    icon: {
      fontSize: '1.5rem',
      color: theme.buttonColor,
      '&:hover': {
        transform: 'scale(1.08)',
        color: theme.tertiary,
      },
    },
  }));

  const classes = useStyles();

  return (
    <div
      className='changeTheme'
    >
      <button onClick={changeTheme} aria-label='Back to top'>
        {isDark ?
          <BsFillBrightnessHighFill className={classes.icon} />
          :
          <ImContrast className={classes.icon} />
        }
      </button>
    </div>
  );
};

export default ChangeTheme;