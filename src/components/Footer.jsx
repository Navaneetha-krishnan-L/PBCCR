import { Link } from 'react-router-dom'
export default function Footer(){
  return(
    <footer className="footer">
      <div className="footer-top">
        <div>
          <p className="footer-social-title">Connect with us</p>
          <div className="footer-social">
            <svg width="22" height="20" viewBox="0 0 30 30" fill="none"><path d="M23.6268 0H28.2269L18.1769 12.7077L30 30H20.7426L13.4919 19.5123L5.19538 30H0.592407L11.342 16.4077L0 0H9.49242L16.0464 9.58615L23.6268 0ZM22.0122 26.9538H24.5613L8.10736 2.88615H5.37199L22.0122 26.9538Z" fill="white"/></svg>
            <svg width="28" height="20" viewBox="0 0 90 30" fill="none"><path d="M83.4225 0.306871C78.0165-0.103123 65.976-0.101457 60.5775 0.306871C54.732 0.750198 54.0435 4.67348 54 15C54.0435 25.3082 54.726 29.2481 60.5775 29.6931C65.9775 30.1015 78.0165 30.1031 83.4225 29.6931C89.268 29.2498 89.9565 25.3265 90 15C89.9565 4.69181 89.274 0.751865 83.4225 0.306871ZM67.5 21.6666V8.33343L79.5 15L67.5 21.6666Z" fill="white"/></svg>
            <svg width="22" height="22" viewBox="0 0 144 30" fill="none"><path d="M129 0.0451128C120.75 0.0451128 114 6.79699 114 15.1128C114 22.6316 119.49 28.8722 126.66 30V19.4737H122.85V15.1128H126.66V11.7444C126.66 7.96992 128.895 5.89474 132.33 5.89474C133.965 5.89474 135.675 6.18045 135.675 6.18045V9.89474H133.785C131.925 9.89474 131.34 11.0526 131.34 12.2406V15.0677H135.51L134.835 19.4286H131.34V29.9549C138.643 28.7986 144.017 22.4798 144 15.0677C144 6.75188 137.25 0 129 0V0.0451128Z" fill="white"/></svg>
          </div>
          <p className="footer-col-title">About PBCCR</p>
          <p className="footer-text">PBCCR has evolved over time by stabilizing its case-finding practices to generate reliable cancer incidence statistics.</p>
          <Link to="/about" className="footer-link" style={{fontWeight:600}}>Learn More →</Link>
        </div>
        <div>
          <p className="footer-col-title">Quick Links</p>
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/" className="footer-link">Contact Us</Link>
          <Link to="/data-visualization" className="footer-link">Data Visualization</Link>
          <Link to="/help" className="footer-link">Help</Link>
        </div>
        <div>
          <p className="footer-col-title">Data Visualization</p>
          <Link to="/data-visualization" className="footer-link">Tree Maps</Link>
          <Link to="/data-visualization" className="footer-link">Age-Group Analysis</Link>
          <Link to="/data-visualization" className="footer-link">Survival Rates</Link>
          <Link to="/data-visualization" className="footer-link">By Cancer Type</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copyright">© PBCCR 2026 — All Rights Reserved</span>
        <div className="footer-legal"><a href="#">Terms of use</a><a href="#">Privacy Policy</a></div>
      </div>
    </footer>
  )
}