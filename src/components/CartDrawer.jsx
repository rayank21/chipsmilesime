import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Produit from '../assets/Produit.png';

const CartDrawer = () => {
    const { isCartOpen, toggleCart, cartItems, updateQuantity, cartTotal } = useCart();
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [step, setStep] = useState('cart'); // 'cart', 'form', 'success'
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zip: ''
    });

    if (!isCartOpen) return null;

    const handleCheckoutClick = () => {
        setStep('form');
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsCheckingOut(true);
        setTimeout(() => {
            setIsCheckingOut(false);
            setStep('success');
            setOrderSuccess(true);
        }, 1500);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const closeDrawer = () => {
        toggleCart();
        setTimeout(() => {
            setStep('cart');
            setOrderSuccess(false);
            setFormData({ firstName: '', lastName: '', address: '', city: '', zip: '' });
        }, 300);
    };

    return (
        <>
            {/* Overlay */}
            <div
                onClick={closeDrawer}
                style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.5)',
                    zIndex: 999
                }}
            />

            {/* Drawer */}
            <div style={{
                position: 'fixed',
                top: 0, right: 0, bottom: 0,
                width: '100%',
                maxWidth: '400px',
                background: '#fff',
                zIndex: 1000,
                boxShadow: '-5px 0 30px rgba(0,0,0,0.1)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                animation: 'slideIn 0.3s ease-out'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ margin: 0, fontSize: '1.5rem' }}>
                        {step === 'cart' && 'Votre Panier'}
                        {step === 'form' && 'Vos Coordonnées'}
                        {step === 'success' && 'Confirmation'}
                    </h2>
                    <button onClick={closeDrawer} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>×</button>
                </div>

                {step === 'success' ? (
                    <div style={{ textAlign: 'center', marginTop: '4rem', animation: 'fadeIn 0.5s' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✨</div>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--color-wine-deep)' }}>Commande Confirmée</h3>
                        <p>Merci {formData.firstName} !</p>
                        <p>Vos chips arriveront bientôt à {formData.city}.</p>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>Un email de confirmation vous a été envoyé.</p>
                        <button
                            onClick={closeDrawer}
                            className="buy-button"
                            style={{ marginTop: '2rem', width: '100%' }}
                        >
                            Fermer
                        </button>
                    </div>
                ) : step === 'form' ? (
                    <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <input
                                type="text" name="firstName" placeholder="Prénom" required
                                value={formData.firstName} onChange={handleInputChange}
                                style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px', width: '100%' }}
                            />
                            <input
                                type="text" name="lastName" placeholder="Nom" required
                                value={formData.lastName} onChange={handleInputChange}
                                style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px', width: '100%' }}
                            />
                        </div>
                        <input
                            type="text" name="address" placeholder="Adresse" required
                            value={formData.address} onChange={handleInputChange}
                            style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px', width: '100%' }}
                        />
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
                            <input
                                type="text" name="zip" placeholder="CP" required
                                value={formData.zip} onChange={handleInputChange}
                                style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px', width: '100%' }}
                            />
                            <input
                                type="text" name="city" placeholder="Ville" required
                                value={formData.city} onChange={handleInputChange}
                                style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '6px', width: '100%' }}
                            />
                        </div>

                        <div style={{ marginTop: 'auto', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
                            <button
                                type="submit"
                                className="buy-button"
                                style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                                disabled={isCheckingOut}
                            >
                                {isCheckingOut ? 'Validation...' : 'Valider la commande'}
                            </button>
                            <button
                                type="button"
                                onClick={() => setStep('cart')}
                                style={{ width: '100%', marginTop: '0.5rem', padding: '0.5rem', background: 'none', border: 'none', color: '#666', cursor: 'pointer', textDecoration: 'underline' }}
                            >
                                Retour au panier
                            </button>
                        </div>
                    </form>
                ) : (
                    <>
                        <div style={{ flex: 1, overflowY: 'auto' }}>
                            {cartItems.length === 0 ? (
                                <p style={{ textAlign: 'center', color: '#888', marginTop: '2rem' }}>Votre panier est vide.</p>
                            ) : (
                                cartItems.map(item => (
                                    <div key={item.id} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                                        <img src={Produit} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontWeight: 'bold' }}>{item.name}</div>
                                            <div style={{ fontSize: '0.9rem', color: '#666' }}>{item.price.toFixed(2)}€</div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                                                <button onClick={() => updateQuantity(item.id, -1)} style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid #ddd', background: '#fff' }}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)} style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid #ddd', background: '#fff' }}>+</button>
                                            </div>
                                        </div>
                                        <div style={{ fontWeight: 'bold' }}>
                                            {(item.price * item.quantity).toFixed(2)}€
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <div style={{ borderTop: '1px solid #eee', paddingTop: '1.5rem', marginTop: 'auto' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                    <span>Total</span>
                                    <span>{cartTotal.toFixed(2)}€</span>
                                </div>
                                <button
                                    onClick={handleCheckoutClick}
                                    className="buy-button"
                                    style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                                    disabled={isCheckingOut}
                                >
                                    Commander
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
            <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
        </>
    );
};

export default CartDrawer;
