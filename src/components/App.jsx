import { useState, useEffect } from 'react';
import { Options } from './Options/Options';
import { Statistic } from "./Statistic/'Statistic";
import styles from '../components/styles.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  useEffect(() => {
    setTotal(good + neutral + bad);

    if (total > 0) {
      setPositive(Math.floor((good * 100) / total));
    } else {
      setPositive(0);
    }
  }, [good, neutral, bad, total]);

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Please leave feedback</h1>

      <Options setGood={setGood} setNeutral={setNeutral} setBad={setBad} />

      <h2 className={styles.title}>Statistics</h2>

      {total > 0 ? (
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positive={positive}
        />
      ) : (
        <p className={styles.notification}>"No feedback given"</p>
      )}
    </section>
  );
};
