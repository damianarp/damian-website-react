import React from 'react';
import './feature.css';

const Feature = ({ title, text, subtitle, date }) => {
    return (
        <div className='dami__features-container__feature'>
            <div className='dami__features-container__feature-title'>
                <div />
                <h1>{title}</h1>
                <p>{date}</p>
            </div>
            <div className='dami__features-container__feature-text'>
                <p>{subtitle}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature;