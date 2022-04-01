import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import { Feature, CV } from '../../components';
import './aboutme.css';

const AboutMe = () => {

    return (
        <div className='dami__aboutme section__margin' id='aboutme'>
            <div className='dami__aboutme-feature'>
                <Feature title='About Me' text='My name is Damián Arp, I was born in Argentina in 1987. Specifically in a little town called General Pico, in the state of La Pampa. In 2006, I came to La Plata city, state of Buenos Aires, looking for my true vocation, which took many years to arrive but today I am sure I have found it, and that is to be the best web developer!'/>
            </div>
            <div className='dami__aboutme-heading'>
                <h1 className='gradient__text'>
                    The possibilities are beyond your imagination
                </h1>
                <PDFDownloadLink document={<CV />} fileName="CV Damian Arp.pdf">
                    <button><p>Download Resume</p></button>
                </PDFDownloadLink>
            </div>
            <div className='dami__aboutme-container'>
                <Feature title='Goal' text='To be part of a company where I can apply the knowledge acquired during my academic and professional career, being part of the search for innovative solutions, always attending to the goals of the company and the needings of the customers.'/>
                <Feature title='Technologies' text='HTML, CSS, JavaScript, NodeJS, React, Angular, Java SE, Git, PHP, mySQL & MongoDB databases.
                Visual Studio Code, IntelliJ Idea.
                UI Design tools such as Figma, Photoshop. 
                Server managment such as Heroku.'/>
                <Feature title='Soft Skills' text='7+ years of experience in Customer Service. Working by goals and collaborative work. 
                Agile methodologies such as SCRUM.
                Intermediate English & Portuguese languages. Native Spanish.
                Adaptation to changes.'/>
            </div>
        </div>
    )
}

export default AboutMe;
