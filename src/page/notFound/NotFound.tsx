import { Link } from "react-router-dom";
import "./NotFound.scss";

type NotFoundProps = {};

export default function NotFound({}: NotFoundProps) {
  return (
    <div className="not-found">
      <p>
        <h2>Seite konnte nicht gefunden werden!</h2>
        <br />
        Die angeforderte Seite existiert nicht oder wurde verschoben. Bitte
        überprüfen Sie die URL oder kehren Sie zurück.
      </p>
      <Link className="not-found__link" to="/user-dashboard">
        Startseite
      </Link>
    </div>
  );
}
