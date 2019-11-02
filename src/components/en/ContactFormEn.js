import React, { Component } from 'react'

export default class ContactFormEn extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        correct: false,
        errors: {
            nameError: false,
            emailError: false,
            messageError: false,
        },
    }

    errorMessages = {
        nameIncorrect: 'Write your name and surname',
        emailIncorrect: 'Write correct e-mail',
        messageIncorrect: 'Write your message'
    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    }

    formValidation = () => {
        let name = false;
        let email = false;
        let message = false;
        let correct = false;

        if (this.state.name.length > 5 && this.state.name.indexOf(' ') !== -1) {
            name = true
        };

        if(this.state.email.length > 5 && this.state.email.indexOf('@') !== -1 && this.state.email.indexOf('.') !== -1)  {
            email = true
        };

        if (this.state.message.length > 10) {
            message = true
        };

        if (name && email && message) {
            correct = true
        };

        return ({
            name,
            email,
            message,
            correct
        })
    }

    handleSubmit = (e) => {
        const validation = this.formValidation();

        if(!validation.correct) {
            e.preventDefault();
            this.setState({
                errors: {
                    nameError: !validation.name,
                    emailError: !validation.email,
                    messageError: !validation.message,
                }
            });
        } else {
            this.setState({
                correct: true,
            })
        }
    }

    render() {
        return (
            <form className="contact-form" onSubmit={this.handleSubmit} action={this.state.correct ? "https://formspree.io/akodu@usz.edu.pl" : ""} method={this.state.correct ? "POST" : ""}>
                <p className="contact-form__field">
                    <label className="contact-form__label" htmlFor="name">Name and surname</label>
                    <input className={this.state.errors.nameError && (this.state.name.length <= 5 || this.state.name.indexOf(' ') === -1) ? "contact-form__input contact-form__input--incorrect" : "contact-form__input"} type="text" name="name" id="name" placeholder="John Doe" value={this.state.name} onChange={this.handleChange}/>
                    {this.state.errors.nameError && (this.state.name.length <= 5 || this.state.name.indexOf(' ') === -1) ? <span className="contact-form__error">{this.errorMessages.nameIncorrect}</span> : ""}
                </p>
                <p className="contact-form__field">
                    <label className="contact-form__label" htmlFor="email">E-mail</label>
                    <input className={this.state.errors.emailError && (this.state.email.length <= 5 || this.state.email.indexOf('@') === -1 || this.state.email.indexOf('@') === (this.state.email.length - 1) || this.state.email.indexOf('.') === -1 || this.state.email.indexOf('.') === (this.state.email.length - 1) ) ? "contact-form__input contact-form__input--incorrect" : "contact-form__input"} type="email" name="email" id="email" placeholder="email@email.com" value={this.state.email} onChange={this.handleChange}/>
                    {this.state.errors.emailError && (this.state.email.length <= 5 || this.state.email.indexOf('@') === -1 || this.state.email.indexOf('@') === (this.state.email.length - 1) || this.state.email.indexOf('.') === -1 || this.state.email.indexOf('.') === (this.state.email.length - 1) ) ? <span className="contact-form__error">{this.errorMessages.emailIncorrect}</span> : ""}
                </p>
                <p className="contact-form__field">
                    <label className="contact-form__label" htmlFor="message">Message</label>
                    <textarea className={this.state.errors.messageError && this.state.message.length <= 10 ? "contact-form__textarea contact-form__textarea--incorrect" : "contact-form__textarea"} name="message" id="message" placeholder="Your message" cols="30" rows="10" value={this.state.message} onChange={this.handleChange}></textarea>
                    {this.state.errors.messageError && this.state.message.length <= 10 ? <span className="contact-form__error">{this.errorMessages.messageIncorrect}</span> : ""}
                </p>
                <p className="contact-form__agreement">By sending a message, you agree to the processing of your personal data by the Research Team of Organizational Sociology and Psychology. Your personal data will be processed only to respond to your message.</p>
                <button type="submit" className="contact-form__btn btn">Send</button>
            </form>
        )
    }
}