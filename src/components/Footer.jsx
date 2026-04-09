import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="pbr-footer">
      <div className="row g-4 pb-4">
        <div className="col-lg-4">
          <p className="fw-semibold mb-3">Connect with us</p>
          <div className="d-flex gap-3 mb-4">
            <a href="#" aria-label="Twitter"><svg width="22" height="20" viewBox="0 0 30 30" fill="none"><path d="M23.6268 0H28.2269L18.1769 12.7077L30 30H20.7426L13.4919 19.5123L5.19538 30H0.592407L11.342 16.4077L0 0H9.49242L16.0464 9.58615L23.6268 0ZM22.0122 26.9538H24.5613L8.10736 2.88615H5.37199L22.0122 26.9538Z" fill="white"/></svg></a>
            <a href="#" aria-label="YouTube"><svg width="28" height="20" viewBox="0 0 90 64" fill="none"><path d="M88.1 10.1C87 6.3 84 3.3 80.2 2.2 73.2 0 45 0 45 0S16.8 0 9.8 2.1C6 3.2 3 6.3 1.9 10.1 0 17.2 0 32 0 32s0 14.9 1.9 21.9C3 57.7 6 60.7 9.8 61.8 16.9 64 45 64 45 64s28.2 0 35.2-2.1c3.8-1.1 6.8-4.1 7.9-7.9C90 47 90 32.1 90 32.1S90.1 17.2 88.1 10.1zM36 45.5V18.5L59.4 32 36 45.5z" fill="white"/></svg></a>
            <a href="#" aria-label="Facebook"><svg width="22" height="22" viewBox="0 0 50 50" fill="none"><path d="M25 0C11.2 0 0 11.2 0 25c0 12.5 9.2 22.8 21.1 24.7V32.2h-6.4V25h6.4v-5.5c0-6.3 3.8-9.8 9.5-9.8 2.7 0 5.6 0.5 5.6 0.5v6.2h-3.1c-3.1 0-4.1 1.9-4.1 3.9V25h6.9l-1.1 7.2h-5.8v17.5C40.8 47.8 50 37.5 50 25 50 11.2 38.8 0 25 0z" fill="white"/></svg></a>
          </div>
          <h6 className="fw-bold fs-6 mb-2">About PBCCR</h6>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: 14 }}>PBCCR has evolved over time by stabilizing its case-finding practices to generate reliable cancer incidence statistics.</p>
          <Link to="/about" className="pbr-footer-link fw-semibold" style={{ width: 'fit-content' }}>Learn More &#8594;</Link>
        </div>
        <div className="col-lg-4">
          <h6 className="fw-bold fs-6 mb-3">Quick Links</h6>
          <Link to="/" className="pbr-footer-link">Home</Link>
          <Link to="/about" className="pbr-footer-link">About</Link>
          <Link to="/data-visualization" className="pbr-footer-link">Data Visualization</Link>
          <Link to="/help" className="pbr-footer-link">Help</Link>
          <a href="#" className="pbr-footer-link">Contact Us</a>
        </div>
        <div className="col-lg-4">
          <h6 className="fw-bold fs-6 mb-3">Data Visualization</h6>
          <Link to="/data-visualization" className="pbr-footer-link">Tree Maps</Link>
          <Link to="/data-visualization" className="pbr-footer-link">Age-Group Analysis</Link>
          <Link to="/data-visualization" className="pbr-footer-link">Survival Rates</Link>
          <Link to="/data-visualization" className="pbr-footer-link">By Cancer Type</Link>
        </div>
      </div>
      <div className="border-top border-white border-opacity-25 py-3 d-flex justify-content-between align-items-center flex-wrap gap-2">
        <p className="mb-0 small" style={{ color: 'rgba(255,255,255,0.6)' }}>&#169; 2024 PBCCR. All rights reserved.</p>
        <div className="d-flex gap-3">
          <a href="#" className="small pbr-footer-link">Terms of Use</a>
          <a href="#" className="small pbr-footer-link">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
