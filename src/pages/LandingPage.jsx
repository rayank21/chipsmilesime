import React from 'react';
import ProductShowcase from '../components/ProductShowcase';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import { useCart } from '../context/CartContext';

const LandingPage = () => {
    const { toggleCart, cartCount } = useCart();

    return (
        <div className="landing-page">
            <header className="landing-header">
                <div style={{ width: '150px', textAlign: 'left' }}>
                    <Link to="/pro" style={{
                        fontSize: '0.9rem',
                        color: 'var(--color-wine-deep)',
                        textDecoration: 'none',
                        borderBottom: '1px solid var(--color-wine-deep)'
                    }}>
                        Espace Pro
                    </Link>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <img src={Logo} alt="Chips Millésime" style={{ height: '80px', marginBottom: '0.5rem' }} />
                    <div className="vintage-year" style={{ fontSize: '1rem' }}>2023 Côte Chalonnaise</div>
                </div>

                <div style={{ width: '150px', textAlign: 'right' }}>
                    <button
                        onClick={toggleCart}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            position: 'relative',
                            fontSize: '1.5rem'
                        }}
                    >
                        🛒
                        {cartCount > 0 && (
                            <span style={{
                                position: 'absolute',
                                top: '-5px',
                                right: '-10px',
                                background: 'var(--color-wine-deep)',
                                color: '#fff',
                                fontSize: '0.7rem',
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold'
                            }}>
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </header>

            <main>
                <ProductShowcase />
            </main>

            <footer style={{
                textAlign: 'center',
                padding: '4rem 0',
                marginTop: '4rem',
                borderTop: '1px solid #ddd',
                color: 'var(--color-soil)'
            }}>
                &copy; 2025 Chips Millésime • L'abus d'alcool est dangereux pour la santé.
            </footer>
        </div>
    );
};

export default LandingPage;
