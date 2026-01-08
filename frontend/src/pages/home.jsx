import React from 'react';
import '../style/home.css';

const Home = () => {
    return (
        <header className="hero-header">
            <img className="hero-bg" src="../public/img/header-home.png" alt="Header image" />
            <div className="hero-content">
                <h1 className="hero-title">ANSANG PAINT</h1>
                <p className="hero-sub">Each story represented by their color. Choose your own story.</p>

                <div className="btn-group">
                    <button type="button" className="btn btn-dark"><a href="#simple-list-item-1" style={{ textDecoration: 'none', color: 'aliceblue' }}>Mua Sắm Ngay</a></button>
                    <button type="button" className="btn btn-light">Liên Hệ Tư Vấn</button>
                </div>
            </div>
        </header>
    );
};