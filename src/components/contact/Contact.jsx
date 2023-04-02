import React, { Component } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Contact extends Component {
    
    constructor() {
        super();
        this.state = {
            input: {},
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.validate()) {
            console.log(this.state);

            emailjs.sendForm('service_iusqqve', 'template_dl2g6dx', e.target, 'bIMuWdifZbnaMKdtS').then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });

            toast("Your message has been sent!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                className: 'toast-success'
            });
        }
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["name"]) {
            isValid = false;
            errors["name"] = "Please enter your name.";
        }

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email address.";
        }

        if (typeof input["email"] !== "undefined") {

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }

        if (!input["comment"]) {
            isValid = false;
            errors["comment"] = "Please enter your comment.";
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }

    render() {

        return (

            <div className='dami__contact section__padding' id='contactme'>
                <div className="dami__contact-heading">
                    <h1 className="gradient__text">Do you want to step in to the future before others</h1>
                </div>
                <form onSubmit={this.handleSubmit} className="dami__contact-container">
                    <div className="dami__contact-container_row">
                        <div className="form-group">
                            <div className='dami__contact-container_row__input'>
                                <input type="text" id="name" name="name" value={this.state.input.name} onChange={this.handleChange} className="form-control" placeholder="Enter your name" required />
                                <div className="text-danger">{this.state.errors.name}</div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className='dami__contact-container_row__input'>
                                <input type="email" id="email" name="email" value={this.state.input.email} onChange={this.handleChange} className="form-control" placeholder="Enter your email" required />
                                <div className="text-danger">{this.state.errors.email}</div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className='dami__contact-container_row__input-message'>
                                <textarea type="text" id="comment" name="comment" value={this.state.input.comment} onChange={this.handleChange} className="form-control" placeholder="Enter your comment" required />
                                <div className="text-danger">{this.state.errors.comment}</div>
                            </div>
                        </div>
                    </div>
                    <button type='submit'>
                        <p>Send Email</p>
                    </button>
                    <ToastContainer />
                </form>
            </div>
        )
    }


}