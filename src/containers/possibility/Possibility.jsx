import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibilityImage.webp';

const Possibility = () => {
    return (
        <div className='dami__possibility section__padding'>
            <div className="dami__possibility-image">
                <img src={possibilityImage} alt="possibility" />
            </div>
            <div className="dami__possibility-content">
                <h1 className="gradient__text">
                    The best way to predict the future   is to invent it.
                </h1>
            </div>
        </div>
    )
}

export default Possibility;