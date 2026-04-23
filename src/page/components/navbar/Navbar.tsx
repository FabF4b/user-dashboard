import { Link } from "react-router-dom";
import "./Navbar.scss";

type NavbarProps = {};

export default function Navbar({}: NavbarProps) {
  return (
    <div className="navbar">
      <Link className="navbar__item" to="/user-dashboard">
        Übersicht
      </Link>
      <Link className="navbar__item" to="/user-dashboard/create">
        Erstellen
      </Link>
    </div>
  );
}
