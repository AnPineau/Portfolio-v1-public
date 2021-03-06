import React from 'react'
import Title from '../components/Title';

export default React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="Contact"> 
            <Title title="Contact" />

            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" className="form" data-sal="zoom-in" data-sal-duration="1000">
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                    <label>
                        <input name="bot-field" />
                    </label>
                </div>
                <input type="text" name="name" className="name" placeholder="Name"/>
                <input type="text" name="email" className="email" placeholder="Email"/>
                <textarea name="message" className="message" placeholder="Your message"></textarea>
                <button className="submit" type="submit">Send</button>
            </form>

        </div>
    )
});
