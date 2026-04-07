import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
export default function SignupPage(){
  const [show,setShow]=useState(false)
  return(
    <>
      <Navbar showLogin={true} />
      <div style={{background:'linear-gradient(180deg,rgba(158,47,205,0.95) 0%,rgba(88,17,157,0.95) 100%)'}}>
        <div className="row g-0">
          <div className="col-lg-6 d-flex align-items-center justify-content-center p-5 border-end border-secondary">
            <div className="text-center text-white">
              <div className="pbr-auth-img-wrap mb-4 mx-auto">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/168df0df395c8f7480f5c28d7ae03f8f50769420?width=542" alt="Healthcare" />
              </div>
              <h3 className="fw-bold mb-2">Better Care, Together</h3>
              <p style={{maxWidth:300,margin:'0 auto',lineHeight:1.7,textAlign:'justify'}}>Join the PBCCR registry to contribute to life-changing pediatric cancer research and access exclusive resources.</p>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center p-4">
            <div className="pbr-card-white p-5" style={{width:'100%',maxWidth:500}}>
              <h2 className="fw-bold text-center mb-1" style={{color:'#0F172A'}}>Create Account</h2>
              <p className="text-center text-secondary small mb-4">Please fill in your details to get started</p>
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
                  <label className="form-label fw-semibold small">Password</label>
                  <div className="input-group">
                    <input type={show?'text':'password'} className="form-control rounded-start-pill" placeholder="Create password" />
                    <button className="btn btn-outline-secondary rounded-end-pill" onClick={()=>setShow(!show)} type="button">{show?'Hide':'Show'}</button>
                  </div>
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold small">Confirm Password</label>
                  <input type="password" className="form-control rounded-pill" placeholder="Confirm password" />
                </div>
                <div className="col-12 mt-2">
                  <button className="btn w-100 text-white fw-bold rounded-pill py-2" style={{background:'#8C2BEE'}}>Create Account</button>
                </div>
              </div>
              <p className="text-center mt-3 small text-secondary">Already have an account? <Link to="/login" className="fw-bold" style={{color:'#8C2BEE'}}>Sign in</Link></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}