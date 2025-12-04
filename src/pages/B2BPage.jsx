import React from 'react';
import B2BOrderForm from '../components/B2BOrderForm';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const B2BPage = () => {
    return (
        <div className="b2b-page">
            <header style={{
                textAlign: 'center',
                padding: '2rem 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: 'var(--container-max)',
                margin: '0 auto',
                borderBottom: '1px solid #eee'
            }}>
                <div style={{ width: '100px' }}>
                    <Link to="/" style={{
                        fontSize: '0.9rem',
                        color: 'var(--color-wine-deep)',
                        textDecoration: 'none'
                    }}>
                        ← Retour
                    </Link>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <img src={Logo} alt="Chips Millésime" style={{ height: '60px', marginBottom: '0.5rem' }} />
                    <h1 style={{ fontSize: '1.5rem', marginBottom: '0', margin: 0, color: 'var(--color-wine-deep)' }}>
                        Espace Professionnel
                    </h1>
                </div>

                <div style={{ width: '100px', textAlign: 'right' }}>
                    {/* Placeholder for login/account */}
                </div>
            </header>

            <main style={{ minHeight: '80vh' }}>
                <div style={{
                    textAlign: 'center',
                    marginTop: '4rem',
                    maxWidth: '600px',
                    margin: '4rem auto 2rem'
                }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Offrez l'exception à vos clients</h2>
                    <p style={{ lineHeight: '1.6' }}>
                        Accédez à notre production en flux tendu. Idéal pour l'hôtellerie de luxe, les caves à vin et l'épicerie fine.
                    </p>
                </div>

                <B2BOrderForm />
            </main>

            <footer style={{
                textAlign: 'center',
                padding: '2rem 0',
                marginTop: '4rem',
                borderTop: '1px solid #ddd',
                color: 'var(--color-soil)',
                fontSize: '0.9rem'
            }}>
                Chips Millésime Pro • Support: pro@chips-millesime.com
            </footer>
        </div>
    );
};

export default B2BPage;
