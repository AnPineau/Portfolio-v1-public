import React from 'react'
import Title from '../components/Title';

export default React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="Contact"> 
            <Title title="Contact" />

            <form name="contact" method="post" className="form" data-sal="zoom-in" data-sal-duration="1000">
                <input type="hidden" name="contact" value="contact" />
                <input type="text" className="name" placeholder="Name"/>
                <input type="text" className="email" placeholder="Email"/>
                <textarea name="message" className="message" placeholder="Your message"></textarea>
                <button className="submit" type="submit">Send</button>
            </form>

        </div>
    )
});
