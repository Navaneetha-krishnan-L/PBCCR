import './ProfilePage.css'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <section className="py-5 px-4" style={{ background: '#F6F2FD', minHeight: '80vh' }}>
        <div className="container">
          <div className="row g-4">

            {/* Profile Card */}
            <div className="col-lg-4">
              <div className="card border-0 rounded-4 shadow-sm p-4 text-center mb-4" style={{ background: 'linear-gradient(135deg,#611DA2 0%,#9333EA 100%)' }}>
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/5c57c006aaa469f01cd60e61e9843aa87d9cbf22?width=70" alt="Profile" className="rounded-circle mx-auto d-block mb-3 border border-white border-3" style={{ width: 90, height: 90, objectFit: 'cover' }} />
                <h5 className="fw-bold text-white mb-1">Navaneetha Krishnan</h5>
                <p className="text-white-50 small mb-3">Healthcare Researcher</p>
                <div className="d-flex gap-2 justify-content-center">
                  <button className="btn btn-sm fw-semibold rounded-pill px-3 bg-white" style={{ color: '#8805A4' }}>Edit Profile</button>
                  <Link to="/login" className="btn btn-sm fw-semibold rounded-pill px-3" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>Sign Out</Link>
                </div>
              </div>
              <div className="card border-0 rounded-4 p-4 shadow-sm">
                <h6 className="fw-bold mb-3">Quick Links</h6>
                {[{l:'Data Visualization',p:'/data-visualization'},{l:'Factsheets',p:'/factsheets'},{l:'Methods',p:'/methods'},{l:'Help',p:'/help'}].map((item) => (
                  <Link key={item.p} to={item.p} className="d-flex align-items-center justify-content-between text-decoration-none py-2 border-bottom" style={{ color: '#475569' }}>
                    <span className="fw-semibold small">{item.l}</span>
                    <span>&#8594;</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Edit Form */}
            <div className="col-lg-8">
              <div className="card border-0 rounded-4 shadow-sm p-4 mb-4">
                <h5 className="fw-bold mb-4">Personal Information</h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold small text-secondary">First Name</label>
                    <input type="text" className="form-control rounded-pill" defaultValue="Navaneetha" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold small text-secondary">Last Name</label>
                    <input type="text" className="form-control rounded-pill" defaultValue="Krishnan" />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold small text-secondary">Email Address</label>
                    <input type="email" className="form-control rounded-pill" defaultValue="navaneetha@pbccr.org" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold small text-secondary">Role</label>
                    <input type="text" className="form-control rounded-pill" defaultValue="Healthcare Researcher" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold small text-secondary">Organization</label>
                    <input type="text" className="form-control rounded-pill" defaultValue="Cancer Institute (WIA)" />
                  </div>
                  <div className="col-12 d-flex gap-3 mt-2">
                    <button className="btn fw-bold rounded-pill px-4 py-2 text-white" style={{ background: 'linear-gradient(105deg,#611DA2 0%,#A038D0 100%)' }}>Save Changes</button>
                    <Link to="/login" className="btn btn-outline-secondary fw-bold rounded-pill px-4 py-2">Change Password</Link>
                  </div>
                </div>
              </div>

              {/* Activity */}
              <div className="card border-0 rounded-4 shadow-sm p-4">
                <h5 className="fw-bold mb-4">Recent Activity</h5>
                {[{action:'Downloaded Tamil Nadu Cancer Report 2023',time:'2 hours ago'},{action:'Accessed Data Visualization dashboard',time:'Yesterday'},{action:'Updated profile information',time:'3 days ago'},{action:'Downloaded Gender-Based Analysis 2021',time:'1 week ago'}].map((a, i) => (
                  <div key={i} className="d-flex align-items-center gap-3 py-3 border-bottom">
                    <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 40, height: 40, background: 'rgba(147,51,234,0.1)' }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#9333EA" strokeWidth="1.5"/><path d="M8 5v4l2.5 1.5" stroke="#9333EA" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </div>
                    <div className="flex-grow-1">
                      <p className="fw-semibold mb-0 small">{a.action}</p>
                      <p className="text-secondary mb-0" style={{ fontSize: 12 }}>{a.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
