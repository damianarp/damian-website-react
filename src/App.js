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
            animationData: require('./assets/sparks2.json')
        })
    }, []);

    return (
        <div className='App gradient__bg'>
            <div ref={container} 
                style={{position:'absolute', 
                        zIndex:'0', 
                        width: '100%',
                        }}></div> 
            <div>
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
