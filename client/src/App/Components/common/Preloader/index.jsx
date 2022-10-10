import { CircularProgress } from '@mui/material';
import React from 'react';
import styles from './Preloader.module.scss';

const Preloader = () => {
  return <CircularProgress className={styles.preloader} />;
};

export default Preloader;
