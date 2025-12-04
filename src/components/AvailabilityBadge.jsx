import React from 'react';

const AvailabilityBadge = () => (
    <div className="status-badge" style={{
        borderColor: 'var(--color-chip-gold)',
        border: '1px solid var(--color-chip-gold)',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'var(--color-ink)',
        fontFamily: 'var(--font-body)',
        fontSize: '0.9rem'
    }}>
        <span className="icon">⏳</span>
        <span>Production à la commande (4-5 jours)</span>
    </div>
);

export default AvailabilityBadge;
