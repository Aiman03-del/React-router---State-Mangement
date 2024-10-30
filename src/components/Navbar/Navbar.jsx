import React, { useState } from "react";
import Link from "../Link/Link";
import { CgClose, CgMenuLeft } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import { FaCheck } from "react-icons/fa6";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { path: "/", id: 1, name: "Home" },
    { path: "/about", id: 2, name: "About" },
    { path: "/services", id: 3, name: "Services" },
    { path: "/contact", id: 4, name: "Contact" },
    { path: "*", id: 5, name: "NotFound" },
  ];

  return (
    <nav className=" text-black bg-yellow-200 p-2 shadow-lg">
      <div className=" md:hidden bg-yellow-200" onClick={() => setOpen(!open)}>
        {open === true ? (
          <button className="btn bg-yellow-200 border-none text-xl ">
            <CgClose />
          </button>
        ) : (
          <button className="btn bg-yellow-200 border-none text-xl">
            <CgMenuLeft />
          </button>
        )}
      </div>
      <ul
        className={`md:flex absolute duration-1000
          md:static
          ${open ? "top-16" : "-top-80"} bg-yellow-200 px-6 `}
      >
        {" "}
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
