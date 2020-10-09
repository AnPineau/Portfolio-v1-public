import React from 'react'

const Home = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="Home">
            <p>Home</p>
        </div>
    )
});

export default Home;
