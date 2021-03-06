import React, { useState } from 'react'
import './ContactStyle.css'
import emailjs from 'emailjs-com'


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_neh1oii';
            const templateId = 'template_vdw3ffh';
            const userId = 'user_JcD1331LVSdIeKGHTgDqA';
            const templateParams = { name, email, message };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }
    
    return (
        <div id='contact' className='contact-container'>
            <div id="contact-form">
                <div className='name-email'>
                    <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                <div onClick={submit} className='button'><button text={'Send Message'}>Send</button></div>
                <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
            </div>
        </div>
    );
}

export default Contact
