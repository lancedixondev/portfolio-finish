import React from 'react'



//styling imports
import "./ContactMe.css"

const ContactMe = () => {

    return(
        <div class='contact-container'>
            <h2>Contact Me</h2>
            <div class="contact-me-container">

                <div class="form">
                    <form action="https://formspree.io/f/xpzknjrb" method="POST">
                        <input type="Name" placeholder="Name" name="name"/>
                        <input type="email" placeholder="Email" name="_replyto"/>
                        <textarea name="message" placeholder="Message"></textarea>
                        <button class='contact-button' type="submit">Send</button>
                    </form>
                <a href="https://www.linkedin.com/in/lance-dixon-892385228/" target="_blank" rel="noreferrer" ><i class="fa-brands fa-linkedin"></i></a>
                
                </div>
            </div>
        </div>
    )
}

export default ContactMe;