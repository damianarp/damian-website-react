import React from 'react';
import './brand.css';
import { html, css, js, react, angular, csharp, nodejs, java, php, mysql, mongodb, git } from './imports';

const Brand = () => {
    return (
        <div className='dami__brand section__padding' style={{position:'relative', zIndex:'4'}}>
            <div>
                <img src={html} alt="HTML" />
            </div>
            <div>
                <img src={css} alt="CSS" />
            </div>
            <div>
                <img src={js} alt="JavaScript" />
            </div>
            <div>
                <img src={react} alt="React" />
            </div>
            <div>
                <img src={csharp} alt="C#" />
            </div>
            <div>
                <img src={angular} alt="Angular" />
            </div>
            <div>
                <img src={nodejs} alt="NodeJS" />
            </div>
            <div>
                <img src={java} alt="java" />
            </div>
            <div>
                <img src={php} alt="PHP" />
            </div>
            <div>
                <img src={mysql} alt="mySQL" />
            </div>
            <div>
                <img src={mongodb} alt="MongoDB" />
            </div>
            <div>
                <img src={git} alt="Git" />
            </div>
        </div>
    )
}

export default Brand;