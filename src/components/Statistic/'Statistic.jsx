// import { useState} from 'react';
import styles from '../styles.module.css';
import React from 'react'
import PropTypes from 'prop-types'


export const Statistic = ({ good, neutral, bad, total, positive }) => {
  
  return (
    <ul className={styles.listItems}>
      <li className={styles.listItem} key={Math.random(3)}>
        Good {good}
      </li>
      <li className={styles.listItem} key={Math.random(5)}>
        Neutral {neutral}
      </li>
      <li className={styles.listItem} key={Math.random(5)}>
        Bad {bad}
      </li>
      <li className={styles.listItem} key={Math.random(5)}>
        Total {total}
      </li>
      <li className={styles.listItem} key={Math.random(5)}>
        Positive {positive} %
      </li>
    </ul>
  );
};

Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired 
}.isRequired