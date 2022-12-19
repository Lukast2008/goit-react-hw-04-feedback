import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

export const Options = ({ setGood, setNeutral, setBad }) => {
  const buttonName = ['Good', 'Neutral', 'Bad'];

  const handleOnchange = ev => {
    const { name } = ev.currentTarget;
    switch (name) {
      case 'Good':
        setGood(prev => prev + 1);
        break;
      case 'Neutral':
        setNeutral(prev => prev + 1);

        break;
      case 'Bad':
        setBad(prev => prev + 1);

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
