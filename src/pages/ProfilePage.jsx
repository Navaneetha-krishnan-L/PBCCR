import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
export default function ProfilePage(){
return(
<>
<Navbar />
<section className='py-5 px-4 px-md-5' style={{background:'#F6F2FD',minHeight:'60vh'}}>
<div className='container'><div className='row g-4'>
<div className='col-lg-4'>
<div className='pbr-profile-card text-center mb-4'>
<img src='https://api.builder.io/api/v1/image/assets/TEMP/5c57c006aaa469f01cd60e61e9843aa87d9cbf22?width=70' alt='Profile' className='pbr-profile-avatar mb-3' />
<h4 className='fw-bold mb-1'>Navaneetha Krishnan</h4><p className='small opacity-75 mb-3'>Healthcare Researcher</p>
<div className='d-flex gap-2 justify-content-center'>
<Link to='/login' className='btn btn-sm bg-white fw-semibold rounded-pill px-3' style={{color:'#8805A4'}}>Edit Profile</Link>
<Link to='/login' className='btn btn-sm fw-semibold rounded-pill px-3 text-white' style={{background:'rgba(255,255,255,0.2)'}}>Sign Out</Link>
</div></div>
<div className='card border-0 rounded-4 p-4 shadow-sm'>
<h6 className='fw-bold mb-3'>Quick Links</h6>
<ul className='list-unstyled mb-0'>{[{l:'Data Visualization',p:'/data-visualization'},{l:'Factsheets',p:'/factsheets'},{l:'Methods',p:'/methods'},{l:'Help',p:'/help'}].map(i=>(<li key={i.p} className='mb-2'><Link to={i.p} className='text-secondary text-decoration-none fw-semibold small'>{i.l} &rarr;</Link></li>))}</ul>
</div></div>
<div className='col-lg-8'>
<div className='card border-0 rounded-4 p-4 shadow-sm mb-4'>
<h5 className='fw-bold mb-4'>Personal Information</h5>
<div className='row g-3'>
<div className='col-md-6'><label className='form-label fw-semibold small text-secondary'>First Name</label><input type='text' className='form-control rounded-pill' defaultValue='Navaneetha' /></div>
<div className='col-md-6'><label className='form-label fw-semibold small text-secondary'>Last Name</label><input type='text' className='form-control rounded-pill' defaultValue='Krishnan' /></div>
<div className='col-12'><label className='form-label fw-semibold small text-secondary'>Email Address</label><input type='email' className='form-control rounded-pill' defaultValue='navaneetha@pbccr.org' /></div>
<div className='col-md-6'><label className='form-label fw-semibold small text-secondary'>Role</label><input type='text' className='form-control rounded-pill' defaultValue='Healthcare Researcher' /></div>
<div className='col-md-6'><label className='form-label fw-semibold small text-secondary'>Organization</label><input type='text' className='form-control rounded-pill' defaultValue='Cancer Institute (WIA)' /></div>
<div className='col-12 mt-2 d-flex gap-3'>
<button className='btn fw-bold rounded-pill px-4 text-white' style={{background:'linear-gradient(105deg,#611DA2 0%,#A038D0 100%)'}}>Save Changes</button>
<Link to='/login' className='btn btn-outline-secondary fw-bold rounded-pill px-4'>Change Password</Link>
</div></div></div>
<div className='card border-0 rounded-4 p-4 shadow-sm'>
<h5 className='fw-bold mb-4'>Recent Activity</h5>
<ul className='list-unstyled'>{[{t:'Accessed Data Visualization',d:'2 hours ago'},{t:'Downloaded Factsheet 2023',d:'1 day ago'},{t:'Viewed Methods Page',d:'3 days ago'},{t:'Updated Profile',d:'1 week ago'}].map((a,i)=>(<li key={i} className='d-flex justify-content-between align-items-center py-2 border-bottom'><span className='small fw-semibold'>{a.t}</span><span className='small text-secondary'>{a.d}</span></li>))}</ul>
</div></div></div></div>
</section>
<Footer />
</>
)
}