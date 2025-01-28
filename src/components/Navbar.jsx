import logo from "../assets/logo.svg";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-2 py-4 bg-[#1263B0] text-white shadow-md">
      {/* Logo */}
      <img
          src={logo}
          className="w-16 md:w-40 ml-5 md:ml-10 my-5 md:my-5"
          alt="logo"
        />

      {/* Middle Link */}
      <div>
        <a
          href="#studios"
          className="text-lg font-medium hover:text-[#E96759] transition-colors"
        >
          STUDIOS
        </a>
      </div>

      {/* Right Link */}
      <div className="mr-5 md:mr-10">
        <a
          href="https://creocreatorclub.simplybook.me/v2/"
          className="text-lg font-medium hover:text-[#E96759] transition-colors"
        >
          RESERVATION
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

