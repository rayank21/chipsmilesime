import React, { useState } from 'react';

const B2BOrderForm = () => {
    const [quantity, setQuantity] = useState(20); // Minimum order

    const calculateTotal = () => {
        const basePrice = 1.80; // B2B Price
        return (quantity * basePrice).toFixed(2);
    };

    return (
        <section className="b2b-order-form" style={{
            marginTop: '4rem',
            padding: '2rem',
            border: '1px solid var(--color-wine-deep)',
            borderLeft: '4px solid var(--color-chip-gold)',
            backgroundColor: '#fff',
            maxWidth: '800px',
            margin: '4rem auto',
            borderRadius: '12px'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem',
                borderBottom: '1px solid #eee',
                paddingBottom: '1rem'
            }}>
                <h3 style={{ margin: 0 }}>Espace Professionnel</h3>
                <span style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-wine-deep)',
                    fontWeight: 'bold'
                }}>
                    Flux Tendu • Production à la commande
                </span>
            </div>

            <form style={{ display: 'grid', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Nom de l'établissement</label>
                        <input type="text" style={{
                            width: '100%',
                            padding: '0.8rem',
                            border: '1px solid #ddd',
                            fontFamily: 'var(--font-body)',
                            borderRadius: '6px'
                        }} placeholder="ex: Le Grand Véfour" />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>SIRET</label>
                        <input type="text" style={{
                            width: '100%',
                            padding: '0.8rem',
                            border: '1px solid #ddd',
                            fontFamily: 'var(--font-body)',
                            borderRadius: '6px'
                        }} placeholder="000 000 000 00000" />
                    </div>
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Contact (Nom/Prénom)</label>
                    <input type="text" style={{
                        width: '100%',
                        padding: '0.8rem',
                        border: '1px solid #ddd',
                        fontFamily: 'var(--font-body)',
                        borderRadius: '6px'
                    }} placeholder="Jean Dupont" />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Adresse de Livraison</label>
                    <input type="text" style={{
                        width: '100%',
                        padding: '0.8rem',
                        border: '1px solid #ddd',
                        fontFamily: 'var(--font-body)',
                        borderRadius: '6px',
                        marginBottom: '1rem'
                    }} placeholder="12 Rue de la Paix" />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
                        <input type="text" style={{
                            width: '100%',
                            padding: '0.8rem',
                            border: '1px solid #ddd',
                            fontFamily: 'var(--font-body)',
                            borderRadius: '6px'
                        }} placeholder="75000" />
                        <input type="text" style={{
                            width: '100%',
                            padding: '0.8rem',
                            border: '1px solid #ddd',
                            fontFamily: 'var(--font-body)',
                            borderRadius: '6px'
                        }} placeholder="Paris" />
                    </div>
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Quantité (Sachets 40g)</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <input
                            type="range"
                            min="20"
                            max="500"
                            step="10"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            style={{ flex: 1 }}
                        />
                        <span style={{
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            color: 'var(--color-wine-deep)',
                            minWidth: '80px',
                            textAlign: 'right'
                        }}>
                            {quantity} u.
                        </span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem' }}>
                        Minimum de commande: 20 unités
                    </div>
                </div>

                <div style={{
                    background: 'var(--color-paper)',
                    padding: '1.5rem',
                    marginTop: '1rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: '8px'
                }}>
                    <div>
                        <div style={{ fontSize: '0.9rem' }}>Estimation Livraison</div>
                        <div style={{ fontWeight: 'bold' }}>4 à 5 jours (Production + Livraison)</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.9rem' }}>Total HT</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-wine-deep)' }}>
                            {calculateTotal()}€
                        </div>
                    </div>
                </div>

                <button type="button" className="buy-button" style={{ width: '100%', marginTop: '1rem' }}>
                    Demander un Devis / Commander
                </button>
            </form>
        </section>
    );
};

export default B2BOrderForm;
