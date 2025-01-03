import { Link, useLocation } from "react-router-dom";
import { Navbar } from "flowbite-react";

import Routes from "./Routes";

import "./Nav.css";

const customTheme = {
  "link": {
    "active": {
      "on": "bg-orange-700 text-white dark:text-white md:bg-transparent md:text-orange-700 md:dark:text-orange-500",
      "off": "border-b border-neutral-100 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
    }
  }
};

export default function Nav() {
  const { pathname } = useLocation();
  return (
    <Navbar fluid theme={customTheme} className="w-full dark:bg-neutral-900">
      <Navbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Code <span className="rainbow">{"{N}"}</span>ifty</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {
          Routes.map(Route => (
            <Navbar.Link as={Link} key={Route.path ?? "/"} to={Route.path ?? "/"} active={pathname === (Route.path ?? "/")}>{Route.label}</Navbar.Link>
          ))
        }
      </Navbar.Collapse>
    </Navbar>
  );
}