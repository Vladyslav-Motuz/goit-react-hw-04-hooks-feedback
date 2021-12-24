import React from "react";
import {useState} from "react";
import Notification from "../Notification/Notification";
import Section from "../Section/Section";
import Statistics from "../Statistics/Statistics";
import s from './Feedback.module.css';

function Feedback() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const hendleIncrement = event => {
        const nameBTN = event.currentTarget.innerText.toLowerCase();        
        if (nameBTN === 'good') { setGood(prevState => prevState + 1) };
        if (nameBTN === 'neutral') { setNeutral(prevState => prevState + 1) };
        if (nameBTN === 'bad') { setBad(prevState => prevState + 1) };
        return
    };

    const total = good + neutral + bad;

    const countPositiveFeedbackPercentage = () => (total ? Math.round((good / total) * 100) : 0);         
    
    return (
        <div className={s.feedback}>
            <Section title="Please leave feedback">
                <div>
                    <button className={s.button} onClick={hendleIncrement}>Good</button>
                    <button className={s.button} onClick={hendleIncrement}>Neutral</button>
                    <button className={s.button} onClick={hendleIncrement}>Bad</button>
                </div>
            </Section>

            <Section title="Statistics">                
                {total ?
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={countPositiveFeedbackPercentage()} />
                    :
                    <Notification title='There is no feedback' />
                }
            </Section>
        </div>
    );
};

export default Feedback;