import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ title }) => {
    return (<p className={s.text}>{title}</p>)
};

Notification.propTypes = {
    title: PropTypes.string,
};

export default Notification;