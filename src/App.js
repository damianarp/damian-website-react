import React from 'react';

import { AboutMe, Features, Footer, Header, Possibility, Projects } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';


const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <div>
                <Brand />
                <AboutMe />
                <Features />
                <Possibility />
                <CTA />
                <Projects />
                <Footer />
            </div>
        </div>
    )
}

export default App;
