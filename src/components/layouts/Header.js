import React from "react";
import { Link } from "react-scroll";
import File from "../../dhruv-santilal-2022-frontend.pdf";
// import Logo from "../elements/Logo";

function Header({ light, logoSource, toggleMenu, headerToggler }) {
  const handleClasses = () => {
    let classes = "desktop-header-1 d-flex align-items-start flex-column";
    if (light & toggleMenu) {
      classes += " light open";
    } else if (toggleMenu) {
      classes += " open";
    } else if (light) {
      classes += " light";
    }
    return classes;
  };
  const handleMobileClasses = () => {
    let classes = "mobile-header-1";
    if (light & toggleMenu) {
      classes += " light open";
    } else if (toggleMenu) {
      classes += " open";
    } else if (light) {
      classes += " light";
    }
    return classes;
  };
  return (
    <>
      <header className={handleMobileClasses()}>
        <div className="container">
          <div className="menu-icon d-inline-flex mr-4">
            <button onClick={headerToggler}>
              <span></span>
            </button>
          </div>
        </div>
      </header>
      <header className={handleClasses()}>
        <h2 className="text-white">Dhruv Santilal</h2>
        <nav>
          <ul className="vertical-menu scrollspy">
            <li>
              <Link
                activeClass="active"
                to="section-home"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-home"></i>Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section-about"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-user-following"></i>About
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="section-experiences"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-layers"></i>Projects
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="section-contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-bubbles"></i>Contact
              </Link>
            </li>
            <li>
              <a
                activeClass="active"
                href="../cv/Dhruv-santilal-cv-2022-graduate-frontend.pdf"
                download="dhruv-santilal-2022-CV"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-doc"></i> CV
              </a>
            </li>
            <li>
              <a
                activeClass="active"
                target="_blank"
                href="https://www.linkedin.com/in/dhruv-santilal-4b8790210/"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="fab fa-linkedin"></i> Linkedin
              </a>
            </li>
            <li>
              <a
                activeClass="active"
                target="_blank"
                href="https://github.com/DhruvSantilal"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="fab fa-github"></i> Github
              </a>
            </li>
          </ul>
        </nav>

        <div className="footer d-flex  flex-column justify-content-center  align-items-center">
          {/* <div>
            <ul className="social-icons light list-inline mb-0 mt-4">
              <li className="list-inline-item">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/dhruv-santilal-4b8790210/"
                >
                  <i class="fab fa-linkedin"></i>{" "}
                </a>
              </li>
              <li className="list-inline-item">
                <a target="_blank" href="https://github.com/DhruvSantilal">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div> */}

          <span className="copyright">
            &copy; {new Date().getFullYear()} Dhruv Santilal.
          </span>
        </div>
      </header>
    </>
  );
}

export default Header;
