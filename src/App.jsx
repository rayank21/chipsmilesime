import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import B2BPage from './pages/B2BPage'
import { CartProvider } from './context/CartContext'
import CartDrawer from './components/CartDrawer'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/pro" element={<B2BPage />} />
          </Routes>
          <CartDrawer />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
