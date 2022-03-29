import React from 'react';
import './cta.css';

const CTA = () => {
    return (
        <div className='dami__cta'>
            <div className="dami__cta-content">
                <h3>Send me an email and let's work together!</h3>
            </div>
            <div className="dami__cta-btn">
                <a href="#contactme"><button type='button'>Contact Me</button></a>
            </div>
        </div>
    )
}

export default CTA;