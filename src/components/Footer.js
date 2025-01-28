import React from "react";
import logo from "../assets/logo.svg";
import line from "../assets/line-footer.svg";

function Footer() {
  return (
    <div className="">
      <footer className="relative footer bg-secondColor text-base-content text-white p-10 overflow-hidden">
        <img
          src={line}
          alt="Background"
          className="absolute -top-24 left-0 w-3/4 h-auto md:-top-56 md:w-2/5"
        />
        <nav>
          <img
            src={logo}
            className="absolute md:ml-10 mt-5 md:my-10"
            alt="logo"
          />
          <div className="h-20 md:h-32"></div>
          <div className="grid grid-flow-col gap-2 md:ml-10 mt-8">
            <a href="https://m.youtube.com/@creo_eg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="40"
                height="40"
              >
                <path
                  fill="#1263B0"
                  d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
                ></path>
              </svg>
            </a>
            <a href="https://www.facebook.com/share/18eo3CxBGE/?mibextid=wwXIfr">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="40"
                height="40"
              >
                <path
                  fill="#1263B0"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                ></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/creo.eg?igsh=eTk0MnAxMzVkdDZs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="40"
                height="40"
              >
                <path
                  fill="#1263B0"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                ></path>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@creo.eg?_t=ZS-8tHb5ZDtkWY&_r=1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="40"
                height="40"
              >
                <path
                  fill="#1263B0"
                  d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
                ></path>
              </svg>
            </a>
          </div>
        </nav>
        <nav className="md:mt-16">
          <h6 className="font-poppins font-bold text-lg">Location:</h6>
          <p className="font-poppins font-light">
            Hydepark, New cairo
            <br />
            Business buildings, building 3<br />
            Fifth floor, office 507,508
          </p>
        </nav>
        <nav className="md:mt-16">
          <h6 className="font-poppins font-bold text-lg">Contact Us:</h6>
          <p className="font-poppins font-light">
            +201228806338
            <br />
            creocreatorclub@gmail.com
          </p>
          <p className="mt-8 font-poppins">© 2025 Creo – All right reserved.</p>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
