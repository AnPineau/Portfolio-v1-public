import React from 'react'

export default function Title({ title }) {
    return (
        <div className="Title">
            <h2 data-sal="slide-left" data-sal-duration="700" >{ title }</h2>
            <div data-sal="slide-left" data-sal-duration="700" data-sal-delay="500" className="line"></div>
        </div>
    )
}
