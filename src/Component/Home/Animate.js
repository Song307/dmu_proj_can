import React, { useRef, useEffect } from 'react';
import './Animate.css'; 

const AnimatedText = ({ text }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            const letterElements = containerRef.current.querySelectorAll('.letter');
            letterElements.forEach((letter, index) => {
                setTimeout(() => {
                    letter.style.opacity = '1';
                    letter.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }
    }, [text]);

    return (
        <div className="container" ref={containerRef}>
            <div className="text">
                {Array.from(text).map((letter, index) => (
                    <span key={index} className="letter">
                        {letter}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default AnimatedText;
