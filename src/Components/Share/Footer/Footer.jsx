import logo from '../../../assets/logo/logo.jpg'
 
const Footer = () => {
  return (
     <footer className="footer p-10 bg-base-200 text-base-content max-w-screen-xl  mx-auto">
  <aside>
   <img src={logo} className='w-40 rounded-full' alt="" />
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <h2 className="footer-title">Services</h2> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h2 className="footer-title">Company</h2> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h2 className="footer-title">Legal</h2> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  )
}

export default Footer