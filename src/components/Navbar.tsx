import { Link } from "react-router-dom";
import { Button } from "../components";
import HigherSVG from "../assets/svgs/higher.svg";
import { FaBars } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";

interface NavbarProps {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({
  isMobileNavOpen,
  setIsMobileNavOpen,
}) => {
  return (
    <nav className="sticky top-0 bg-white-500 flex w-full justify-center items-center h-20 md:px-[5rem] px-7 py-5 z-[99]">
      <div className="flex justify-between items-center w-full max-w-[1400px]">
        <Link to="/">
          <img
            src={HigherSVG}
            alt="Higher SVG"
            className="w-48 h-auto object-cover"
          />
        </Link>

        <div
          className="lg:hidden grid place-items-center text-[1.8rem] cursor-pointer"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          <FaBars />
        </div>

        <div className="lg:flex hidden justify-center items-center gap-10">
          <Link
            to="/"
            className="navLink"
            style={{ fontSize: 18, fontWeight: 600, fontFamily: "Avenir Next" }}
          >
            Home
          </Link>
          <Link
            to="/find-courses"
            className="navLink"
            style={{ fontSize: 18, fontWeight: 600, fontFamily: "Avenir Next" }}
          >
            Find Your Courses
          </Link>
          <Link
            to="/institutes"
            className="navLink"
            style={{ fontSize: 18, fontWeight: 600, fontFamily: "Avenir Next" }}
          >
            Institutes
          </Link>
        </div>
        <LinkScroll
          to="register-form"
          onClick={() => setIsMobileNavOpen(false)}
          smooth={true}
          duration={500}
          className="lg:grid hidden place-items-center cursor-pointer"
        >
          <Button text="Register Your Institute" width="25rem" />
        </LinkScroll>
      </div>
    </nav>
  );
};

export default Navbar;
