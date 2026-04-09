import './LoginPage.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function LoginPage() {
  const [show, setShow] = useState(false)
  return (
    <>
      <Navbar showLogin={true} />
      <div className="pbr-auth-panel">
        <div className="container-fluid p-0">
          <div className="row g-0 min-vh-100">

            {/* Left Panel */}
            <div className="col-lg-6 d-flex align-items-center justify-content-center p-5">
              <div className="text-center text-white">
                <div className="pbr-auth-img-wrap mb-4 mx-auto">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/cb2ada4b5cce2104c0cf97418a751b3b0b1ee0a0?width=478" alt="Healthcare" />
                </div>
                <h3 className="fw-bold mb-2">Better Care, Together</h3>
                <p style={{ maxWidth: 300, margin: '0 auto', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', textAlign: 'justify' }}>Join the PBCCR registry to contribute to life-changing pediatric cancer research and access exclusive resources.</p>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="col-lg-6 d-flex align-items-center justify-content-center p-4" style={{ background: 'rgba(0,0,0,0.15)' }}>
              <div className="pbr-auth-card">
                <h2 className="fw-bold text-center mb-1" style={{ color: '#0F172A' }}>Welcome Back</h2>
                <p className="text-center text-secondary small mb-4">Please enter your details to access your account.</p>

                <div className="mb-3">
                  <label className="form-label fw-semibold small">Email Address</label>
                  <input type="email" className="form-control rounded-pill py-2" placeholder="Enter your email" />
                </div>

                <div className="mb-2">
                  <label className="form-label fw-semibold small">Password</label>
                  <div className="input-group">
                    <input type={show ? 'text' : 'password'} className="form-control rounded-start-pill py-2" placeholder="Enter your password" />
                    <button className="btn btn-outline-secondary rounded-end-pill px-3" type="button" onClick={() => setShow(!show)}>
                      {show ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>

                <div className="text-end mb-4">
                  <a href="#" className="small fw-semibold" style={{ color: '#8805A4' }}>Forgot password?</a>
                </div>

                <div className="d-flex gap-3 mb-4">
                  <button className="btn flex-grow-1 text-white fw-bold rounded-pill py-2" style={{ background: '#8C2BEE' }}>Sign In</button>
                  <Link to="/" className="btn flex-grow-1 fw-bold rounded-pill py-2" style={{ background: '#F1F5F9', color: '#475569' }}>Cancel</Link>
                </div>

                <div className="d-flex align-items-center gap-3 mb-4">
                  <hr className="flex-grow-1" /><span className="text-secondary small">or</span><hr className="flex-grow-1" />
                </div>

                <button className="btn w-100 fw-semibold rounded-pill py-2 border mb-3" style={{ background: '#fff' }}>
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" className="me-2" alt="Google" />Continue with Google
                </button>

                <p className="text-center mt-3 small text-secondary">Don't have an account? <Link to="/signup" className="fw-bold" style={{ color: '#8805A4' }}>Sign up for free</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
