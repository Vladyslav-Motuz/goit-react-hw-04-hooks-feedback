import PropTypes from 'prop-types';
import s from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.list}>
      <li className={s.list__itemGood}>Good: {good}</li>
      <li className={s.list__itemNeutral}>Neutral: {neutral}</li>
      <li className={s.list__itemBad}>Bad: {bad}</li>
      <li className={s.list__item}>Total: {total}</li>
      <li
        className={positivePercentage >= 50 ? s.list__itemGood : s.list__itemBad}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>)
};

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;