import logo from "../assets/logo.svg";
import line from "../assets/line-footer.svg";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-[#E96759] text-white p-16 overflow-hidden">
    <img
          src={line}
          alt="Background"
          className="absolute -top-20 left-0 w-5/6 h-auto md:-top-56 md:w-2/5"
        />
      <div className="relative container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            {/* Logo */}
            <img src={logo} alt="Logo" className="h-24 mb-10" />
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="https://youtube.com" aria-label="Facebook">
                <FaFacebook className="h-12 w-12 text-[#1263B0]" />
              </a>
              <a href="https://facebook.com" aria-label="Twitter">
                <FaTwitter className="h-12 w-12 text-[#1263B0]" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <FaInstagram className="h-12 w-12 text-[#1263B0]" />
              </a>
              <a href="https://tiktok.com" aria-label="LinkedIn">
                <FaLinkedin className="h-12 w-12 text-[#1263B0]" />
              </a>
            </div>
          </div>
          <div className="pt-10">
          <h6 className="font-poppins font-bold text-lg">Location:</h6>
          <p className="font-poppins font-light">
            Hydepark, New cairo
            <br />
            Business buildings, building 3<br />
            Fifth floor, office 507,508
          </p>
          </div>
          <div>
          <div className="pt-10">
          <h6 className="font-poppins font-bold text-lg">Contact Us:</h6>
          <p className="font-poppins font-light">
            +201228806338
            <br />
            creocreatorclub@gmail.com
          </p>
          </div>
          <div className="mt-10">
          <p className="mt-8 font-poppins">© 2025 Creo – All right reserved.</p>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;