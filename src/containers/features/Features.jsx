import React from 'react';
import { Feature } from '../../components';
import './features.css';

const workExperience = [
    {
        title: 'Full Stack Developer',
        subtitle: 'ITInfinit - La Plata',
        text: 'Development of web applications, maintenance of solutions and addition of new functionalities. C#, .NET, Angular, Bootstrap.',
        date: '2021 - Currently'
    },
    {
        title: 'Full Stack Web Developer',
        subtitle: 'Regia Producciones - La Plata',
        text: 'I developed an institutional website and an admin area. Duration: 2 months. HTML, CSS, JS, jQuery, Bootstrap, PHP, mySQL database. Contact: Aretha Resenido. Phone: (+54) 221 420 3576',
        date: '2019 - Currently'
    },
    {
        title: 'Sales Advisor & Customer Service',
        subtitle: 'Prüne - La Plata',
        text: 'Experimented sales advisor. Control and replacement of merchandise. Fulfillment of sales objectives. Cashier. Cash openings and closings. Presea system. Smart RFID. Contact: Constanza Villena. Phone: (+54) 221 400 4192',
        date: '2014 - Currently'
    },
    {
        title: 'Photo Retoucher & Designer',
        subtitle: 'Freelance - La Plata',
        text: 'Photographic digital retouching and design of promotional flyers published on social networks for both, national and international, clients. Card making. Community Manager. UI Design & prototypes. Adobe Photoshop, Figma.',
        date: '2013 - Currently'
    },
    {
        title: 'Filmmaker',
        subtitle: 'Freelance - La Plata',
        text: 'Direction, edition and post-production. Coordination and collaborative work between different departments. Adobe Premiere, After Effects, Cinema 4D.',
        date: '2009 - 2014'
    }
];

const education = [
    {
        title: 'Higher Programming Technician',
        text: 'Teclab Higher Technical Institute.',
        date: '2020 - 2022'
    },
    {
        title: 'Audiovisual Arts Degree',
        text: 'La Plata National University.',
        date: '2008 - 2014'
    }
];

const courses = [
    {
        title: 'NodeJS - Build the complete E-Commerce Web API',
        date: 'Udemy - 2021'
    },
    {
        title: 'NodeJS - Building API with  Express & MongoDB',
        date: 'Udemy - 2021'
    },
    {
        title: 'Git & GitHub',
        date: 'Platzi - 2021'
    },
    {
        title: 'SCRUM Foundation Professional Certificate',
        date: 'CertiProf -  2020'
    },
    {
        title: 'Web Development: HTML, CSS, JavaScript, PHP, jQuey, Ajax, MySQL',
        date: 'Udemy - 2020'
    },
]

const Features = () => {
    return (
        <div>
            <div className="dami__features section__padding dami__features-grid" id="features">
                <div className="dami__features-heading">
                    <h1 className='gradient__text'>Work Experience</h1>
                </div>
                <div className='dami__features-container'>
                    {workExperience.map((item, index) => (
                        <Feature title={item.title} text={item.text} subtitle={item.subtitle} date={item.date} key={item.title + index}/>
                    ))}
                </div>
            </div>
            <div className="dami__features section__padding dami__features-grid" id="features">
                <div className="dami__features-heading">
                    <h1 className='gradient__text'>Education</h1>
                </div>
                <div className='dami__features-container dami__features-container__order'>
                    {education.map((item, index) => (
                        <Feature title={item.title} text={item.text} date={item.date} key={item.title + index}/>
                    ))}
                </div>
            </div>
            <div className="dami__features section__padding dami__features-grid" id="features">
                <div className="dami__features-heading">
                    <h1 className='gradient__text'>Courses & Certifications</h1>
                </div>
                <div className='dami__features-container'>
                    {courses.map((item, index) => (
                        <Feature title={item.title} date={item.date} key={item.title + index}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features;