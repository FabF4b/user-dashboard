import { useUserContext } from "../../context/UserContext";
import UserCard from "../components/userCard/UserCard";
import "./Overview.scss";
import { Link } from "react-router-dom";

export default function Overview() {
  const { state } = useUserContext();

  return (
    <div className="overview">
      {state.map((user) => (
        <Link
          className="overview__user-link"
          key={user.id}
          to={`edit/${user.id}`}
        >
          <UserCard user={user} />
        </Link>
      ))}
    </div>
  );
}
