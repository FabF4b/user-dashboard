import { useState } from "react";
import { useUserContext } from "../../../context/UserContext";
import EditUser from "../editUser/EditUser";
import User from "../user/User";
import "./Overview.scss";

export default function Overview() {
  const { state } = useUserContext();
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  function handleSelectUser(id: string) {
    setSelectedUser(id);
  }

  return !selectedUser ? (
    <div className="overview">
      {state.map((user) => (
        <User key={user.id} user={user} handleSelectUser={handleSelectUser} />
      ))}
    </div>
  ) : (
    <EditUser userId={selectedUser} setSelectedUser={setSelectedUser} />
  );
}
