import React from 'react';
import './cta.css';

const CTA = () => {
    return (
        <div className='dami__cta' id='contactme'>
            <div className="dami__cta-content">
                <h3>Send me an email and let's work together!</h3>
            </div>
            <div className="dami__cta-btn">
                <button type='button'>Contact Me</button>
            </div>
        </div>
    )
}

export default CTA;