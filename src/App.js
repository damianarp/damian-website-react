import React, {useEffect, useRef} from 'react';
import { AboutMe, Features, Footer, Header, Possibility, Projects } from './containers';
import { CTA, Brand, Navbar } from './components';
import lottie from 'lottie-web';

import './App.css';


const App = () => {

    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./assets/wave.json')
        })
    }, []);

    return (
        <div className='App'>
            <div ref={container} style={{position:'absolute', zIndex:'0'}}></div> 
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
