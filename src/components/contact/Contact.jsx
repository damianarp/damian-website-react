import React, {Component} from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

export default class Contact extends Component {
    render() {

        function sendEmail(e) {
            (e).preventDefault();
            emailjs.sendForm('service_u3jcjmt', 'template_dl2g6dx', e.target, 'bIMuWdifZbnaMKdtS').then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
        }
        return (
            <div className='dami__contact section__padding' id='contactme'>
                <div className="dami__contact-heading">
                    <h1 className="gradient__text">Do you want to step in to the future before others</h1>
                </div>
                <form onSubmit={sendEmail} className="dami__contact-container">
                    <div className="dami__contact-container_row">
                        <div className='dami__contact-container_row__input'>
                            <input type="text" id="from_name" name="from_name" placeholder="Enter your name" required />
                        </div>
                        <div className='dami__contact-container_row__input'>
                            <input type="email" id="from_email" name="from_email" placeholder="Enter your email" required />
                        </div>
                        <div className='dami__contact-container_row__input-message'>
                            <textarea type="text" id="message" name="message" placeholder="Enter your message" required />
                        </div>
                    </div>
                    <button type='submit'>
                        <p>Send Email</p>
                    </button>
                </form>
            </div>
        )
    }

    
}