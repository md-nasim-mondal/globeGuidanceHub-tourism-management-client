import { Link } from "react-router-dom";
// import logo from "../../../assets/logo22.svg";
const Footer = () => {
  return (
    <div className='bg-accent dark:bg-[#2b2d42]'>
      <footer className='footer container mx-auto py-20 bg-accent text-white justify-center lg:justify-between dark:bg-[#2b2d42]'>
        <aside>
          {/* <img className='w-20 md:w-32' src={logo} alt='' /> */}
          <p>
            <span className='md:text-xl'><span className='flex flex-wrap md:text-lg xl:text-3xl'>
            Globe
            <span className='text-primary'>GuidanceHub</span>
          </span> Company Ltd.</span>
            <br />
            Providing reliable services since 1992
          </p>
        </aside>
        <nav>
          <h6 className='footer-title'>Services</h6>
          <a className='link link-hover'>Home Rent</a>
          <a className='link link-hover'>Home Sell</a>
          <a className='link link-hover'>Marketing</a>
          <a className='link link-hover'>Advertisement</a>
        </nav>
        <nav>
          <h6 className='footer-title'>Company</h6>
          <a className='link link-hover'>About us</a>
          <Link className='link link-hover' to={"/contact"}>
            Contact
          </Link>
          <a className='link link-hover'>Jobs</a>
          <a className='link link-hover'>Press kit</a>
        </nav>
        <nav>
          <h6 className='footer-title'>Legal</h6>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
