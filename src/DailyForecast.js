import React from 'react';

const DailyForecast = ({ day, link }) => {
    const handleHover = (event) => {
        event.target.style.backgroundColor = '#F9F9F9';
    };

    const handleMouseOut = (event) => {
        event.target.style.backgroundColor = '#D0D0D0';
    };

return (
    <div
        style={{
        width: '200px',
        height: '100px',
        backgroundColor: '#4CAF50', // Default color
        transition: 'background-color 0.3s ease',
        }}
        onMouseOver={handleHover}
        onMouseOut={handleMouseOut}
    >
        <a
        href={link}
        style={{
            display: 'block',
            width: '100%',
            height: '100%',
            textAlign: 'center',
            lineHeight: '100px', // Vertically center the text
            color: 'white',
            textDecoration: 'none',
        }}
        >
        {day}
        </a>
    </div>
    );    
};

export default DailyForecast;