import React from 'react'
import Title from '../components/Title';

export default React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="Contact"> 
            <Title title="Contact" />

            <form data-sal="zoom-in" data-sal-duration="1000" action="mailto:an.pineau12@gmail.com" method="post" encType="text/plain" className="form">
                <input type="text" className="name" placeholder="Name"/>
                <input type="text" className="email" placeholder="Email"/>
                <textarea name="message" className="message" placeholder="Your message"></textarea>
                <button className="submit" type="submit">Send</button>
            </form>

        </div>
    )
});
