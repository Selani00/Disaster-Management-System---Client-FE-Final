import { Navbar, Button } from "flowbite-react";
import { IoNotifications } from "react-icons/io5";
import { Link,useLocation } from "react-router-dom";

const NavBar = () => {
    const path = useLocation().pathname;
  return (
    <Navbar className="bg-primary">
        <Link to="/Emargancy">
          <Button
            
            className="animate-blinkingBg text-white font-semibold "
          >
            Emargancy
          </Button>
        </Link>

        <div className="flex gap-2 md:order-2">
          <div className="text-white border hover:border-white border-transparent  rounded-full p-2 transition duration-300 mr-5">
            <IoNotifications className="w-6 h-6 cursor-pointer" />
          </div>
          <Link to="/Login">
            <Button gradientMonochrome="info">Sign In</Button>
          </Link>
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse >
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/" className="text-white hover:text-yellow-200 text-base font-semibold ">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/Contacts"} as={"div"}>
            <Link to="/Contacts" className="text-white hover:text-yellow-200 text-base font-semibold ">Contacts</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/Plan"} as={"div"}>
            <Link to="/Plan" className="text-white hover:text-yellow-200 text-base font-semibold ">Plan</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/News"} as={"div"}>
            <Link to="/News" className="text-white hover:text-yellow-200 text-base font-semibold ">News</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/Donations"} as={"div"}>
            <Link to="/Donations" className="text-white hover:text-yellow-200 text-base font-semibold ">Donations</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default NavBar
