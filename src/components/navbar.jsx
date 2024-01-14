import { Link } from "react-router-dom";
import { Navbar } from 'flowbite-react';

function Navbars() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {/* Use Link from react-router-dom for internal navigation */}
        <Link to="/" activeClassName="active">
          Home
        </Link>
        <Link to="/about">
          About
        </Link>
        <Link to="/services">
          Services
        </Link>
        <Link to="/pricing">
          Pricing
        </Link>
        <Link to="/contact">
          Contact
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbars;
