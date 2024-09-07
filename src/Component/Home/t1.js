import React, { useEffect } from 'react';
import './t1.css';

const AnimatedComponent = () => {
    useEffect(() => {
        // 애니메이션 적용 코드
        const header = document.querySelector('.header');
        const hero = document.querySelector('.hero');

        if (header) {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }

        if (hero) {
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }
    }, []);

    return (
        <div>
            <header className="header">
                <div className="logo">MySite</div>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">Home</li>
                        <li className="nav-item">About</li>
                        <li className="nav-item">Services</li>
                        <li className="nav-item">Contact</li>
                    </ul>
                    <div className="icon_user">👤</div>
                </nav>
            </header>
            <main className="main-content">
                <div className="hero">
                    <h1>Welcome to My Modern Site</h1>
                    <p>Your journey to a sleek and stylish web experience starts here.</p>
                    <button className="cta-button">Get Started</button>
                </div>
            </main>
        </div>
    );
};

export default AnimatedComponent;
