import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
export default function LoginPage(){
  const [show,setShow]=useState(false)
  return(
    <>
      <Navbar showLogin={true} />
      <div className="pbr-auth-left">
        <div className="container-fluid p-0">
          <div className="row g-0 min-vh-60">
            <div className="col-lg-6 pbr-auth-left d-flex align-items-center justify-content-center p-5">
              <div className="text-center text-white">
                <div className="pbr-auth-img-wrap mb-4 mx-auto">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/cb2ada4b5cce2104c0cf97418a751b3b0b1ee0a0?width=478" alt="Healthcare" />
                </div>
                <h3 className="fw-bold mb-2">Better Care, Together</h3>
                <p style={{maxWidth:300,margin:'0 auto',lineHeight:1.7,textAlign:'justify'}}>Join the PBCCR registry to contribute to life-changing pediatric cancer research and access exclusive resources.</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center p-4" style={{background:'rgba(158,47,205,0.95)'}}>
              <div className="pbr-card-white p-5" style={{width:'100%',maxWidth:480}}>
                <h2 className="fw-bold text-center mb-1" style={{color:'#0F172A'}}>Welcome Back</h2>
                <p className="text-center text-secondary small mb-4">Please enter your details to access your account.</p>
                <div className="mb-3">
                  <label className="form-label fw-semibold small">Email Address</label>
                  <input type="email" className="form-control rounded-pill" placeholder="Enter your email" />
                </div>
                <div className="mb-2">
                  <label className="form-label fw-semibold small">Password</label>
                  <div className="input-group">
                    <input type={show?'text':'password'} className="form-control rounded-start-pill" placeholder="Enter password" />
                    <button className="btn btn-outline-secondary rounded-end-pill" onClick={()=>setShow(!show)} type="button">{show?'Hide':'Show'}</button>
                  </div>
                </div>
                <div className="text-end mb-4">
                  <Link to="/forgot-password" className="small fw-bold" style={{color:'#8C2BEE'}}>Forgot password?</Link>
                </div>
                <div className="d-flex gap-3">
                  <button className="btn flex-grow-1 text-white fw-bold rounded-pill" style={{background:'#8C2BEE'}}>Sign In</button>
                  <button className="btn flex-grow-1 fw-bold rounded-pill" style={{background:'#F1F5F9',color:'#475569'}}>Cancel</button>
                </div>
                <p className="text-center mt-4 small text-secondary">Don't have an account? <Link to="/signup" className="fw-bold" style={{color:'#8C2BEE'}}>Sign up for free</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}