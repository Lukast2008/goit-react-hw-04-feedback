import { useState, useEffect } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

export const Options = ({ setGood, setNeutral, setBad }) => {
  const [goodBut, setGoodBut] = useState(0);
  const [neutralBut, setNeutralBut] = useState(0);
  const [badBut, setBadBut] = useState(0);
  const buttonName = ['Good', 'Neutral', 'Bad'];

  useEffect(() => {
    setGood(goodBut);
    setNeutral(neutralBut);
    setBad(badBut);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goodBut, neutralBut, badBut]);

  const handleOnchange = ev => {
    const { name } = ev.currentTarget;
    switch (name) {
      case 'Good':
        setGoodBut(goodBut + 1);
        break;
      case 'Neutral':
        setNeutralBut(neutralBut + 1);

        break;
      case 'Bad':
        setBadBut(badBut + 1);

        break;
      default:
    }
  };

  return (
    <div className={styles.buttons}>
      {buttonName.map(el => (
        <button
          className={styles.button}
          key={Math.random()}
          type="button"
          name={el}
          onClick={handleOnchange}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

Options.propTypes = {
  setGood: PropTypes.func.isRequired,
  setNeutral: PropTypes.func.isRequired,
  setBad: PropTypes.func.isRequired,
}.isRequired;
