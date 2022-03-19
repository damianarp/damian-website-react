import React from 'react';
import { Article } from '../../components';
import { project1, project2, project3, project4, project5 } from './imports';
import './projects.css';

const Projects = () => {
    return (
        <div className='dami__projects section__padding' id='projects'>
            <div className="dami__projects-heading">
                <h1 className="gradient__text">Take a look at my projects!</h1>
            </div>
            <div className="dami__projects-container">
                <div className="dami__projects-container_groupA">
                    <Article imgUrl={project5} date="Sep 26, 2021" title="Last! Project Nº 5"/>
                </div>
                <div className="dami__projects-container_groupB">
                    <Article imgUrl={project1} date="Sep 26, 2021" title="Project Nº 1"/>
                    <Article imgUrl={project2} date="Sep 26, 2021" title="Project Nº 2"/>
                    <Article imgUrl={project3} date="Sep 26, 2021" title="Project Nº 3"/>
                    <Article imgUrl={project4} date="Sep 26, 2021" title="Project Nº 4"/>
                </div>
            </div>
        </div>
    )
}

export default Projects;