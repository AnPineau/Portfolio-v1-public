import React from 'react'
import Title from '../components/Title';

export default React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="Projects">
            <Title title="Projects" />

            <div className="grid">
                <img className="thumbnail" data-sal="slide-right" data-sal-duration="1000" src="#" alt=""/>
                <div className="grid-item" data-sal="fade" data-sal-duration="1000">
                    <h4 className="grid__title">tourney-maker.com (work in progress)</h4>
                    <p className="grid__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="grid-item" data-sal="fade" data-sal-duration="1000"> 
                    <h4 className="grid__title">daily-raccoons</h4>
                    <p className="grid__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <img className="thumbnail" data-sal="slide-left" data-sal-duration="1000" src="#" alt=""/>
                <img className="thumbnail" data-sal="slide-right" data-sal-duration="1000" src="#" alt=""/>
                <div className="grid-item" data-sal="fade" data-sal-duration="1000">
                    <h4 className="grid__title">antoinepineau.me</h4>
                    <p className="grid__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i ndustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>

        </div>
    )
});
