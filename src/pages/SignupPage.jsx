import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function SignupPage() {
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
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/168df0df395c8f7480f5c28d7ae03f8f50769420?width=542" alt="Healthcare" />
                </div>
                <h3 className="fw-bold mb-2">Better Care, Together</h3>
                <p style={{ maxWidth: 300, margin: '0 auto', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', textAlign: 'justify' }}>Join the PBCCR registry to contribute to life-changing pediatric cancer research and access exclusive resources.</p>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="col-lg-6 d-flex align-items-center justify-content-center p-4" style={{ background: 'rgba(0,0,0,0.15)' }}>
              <div className="pbr-auth-card">
                <h2 className="fw-bold text-center mb-1" style={{ color: '#0F172A' }}>Create Account</h2>
                <p className="text-center text-secondary small mb-4">Fill in your details to get started with PBCCR</p>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold small">First Name</label>
                    <input type="text" className="form-control rounded-pill" placeholder="First name" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold small">Last Name</label>
                    <input type="text" className="form-control rounded-pill" placeholder="Last name" />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold small">Email Address</label>
                    <input type="email" className="form-control rounded-pill" placeholder="Enter your email" />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold small">Organization</label>
                    <input type="text" className="form-control rounded-pill" placeholder="Your hospital or institution" />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold small">Password</label>
                    <div className="input-group">
                      <input type={show ? 'text' : 'password'} className="form-control rounded-start-pill" placeholder="Create a strong password" />
                      <button className="btn btn-outline-secondary rounded-end-pill px-3" type="button" onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold small">Confirm Password</label>
                    <input type="password" className="form-control rounded-pill" placeholder="Confirm your password" />
                  </div>
                  <div className="col-12 mt-2">
                    <button className="btn w-100 fw-bold rounded-pill py-2 text-white" style={{ background: '#8C2BEE' }}>Create Account</button>
                  </div>
                </div>

                <p className="text-center mt-4 small text-secondary">Already have an account? <Link to="/login" className="fw-bold" style={{ color: '#8805A4' }}>Sign in</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
