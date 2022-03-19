import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title }) => {
    return (
        <div className='dami__projects-container_article'>
            <div className="dami__projects-container_article-image">
                <img src={imgUrl} alt="project" />
            </div>
            <div className="dami__projects-container_article-content">
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Look at this project</p>
            </div>
        </div>
    )
}

export default Article;
