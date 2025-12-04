import React, { useEffect, useState } from 'react';
import AvailabilityBadge from './AvailabilityBadge';
import Produit from '../assets/Produit.png';
import { useCart } from '../context/CartContext';

const ProductShowcase = () => {
    const { addToCart } = useCart();
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleAddToCart = () => {
        addToCart({
            id: 'chips-millesime-2025',
            name: 'Chips Millésime 2025',
            price: 2.50
        });
    };

    return (
        <section className="product-showcase animate-entrance" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
            padding: '4rem 0',
            minHeight: '80vh'
        }}>
            {/* Left: The Story */}
            <div className="showcase-content">
                <h2 style={{
                    fontSize: '3.5rem',
                    marginBottom: '1rem',
                    lineHeight: '1.1'
                }}>
                    L'Or de <br />
                    <span style={{ color: 'var(--color-wine-bright)' }}>Bourgogne</span>
                </h2>

                <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    fontStyle: 'italic',
                    marginBottom: '2rem',
                    color: 'var(--color-soil)'
                }}>
                    "Une chips d'exception qui transforme l'apéritif en une expérience de dégustation locale."
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <AvailabilityBadge />
                </div>

                <div style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                    <p style={{ marginBottom: '1rem' }}>
                        <strong>Le Concept :</strong> Une création artisanale conçue pour valoriser le terroir de la Bourgogne.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.5rem' }}>🥔 <strong>Base :</strong> Pommes de terre cultivées en Bourgogne.</li>
                        <li style={{ marginBottom: '0.5rem' }}>🍷 <strong>Signature :</strong> Élaborée avec du Bourgogne rouge 2025 Côte Chalonnaise.</li>
                        <li>👨‍🌾 <strong>Fabrication :</strong> Artisanale, par des producteurs locaux.</li>
                    </ul>
                </div>

                <div className="price-tag" style={{
                    fontSize: '2rem',
                    fontFamily: 'var(--font-display)',
                    color: 'var(--color-wine-deep)',
                    marginBottom: '2rem',
                    fontWeight: 'bold'
                }}>
                    2.50€ <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>/ 40g</span>
                </div>

                <button onClick={handleAddToCart} className="buy-button">
                    Ajouter au Panier
                </button>
            </div>

            {/* Right: The Chip Visual */}
            <div className="showcase-visual" style={{
                position: 'relative',
                height: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <img src={Produit} alt="Chips Millésime Packet" style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))',
                    transform: `rotate(-5deg) translateY(${offset * 0.05}px)`,
                    transition: 'transform 0.1s ease-out'
                }} />

                <div className="vintage-year" style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '10%',
                    fontSize: '3rem',
                    textShadow: '0 2px 4px rgba(255,255,255,0.8)',
                    transform: `translateY(${offset * -0.02}px)`
                }}>
                    2025
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
