import "./EditUser.scss";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Select from "../../components/select/Select";
import { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { ACTION } from "../../context/UserContextProvider";
import type { User } from "../../context/UserContext";
import { Link, useParams, useNavigate } from "react-router-dom";
import TrashIcon from "../../components/icon/svg/TrashIcon";
import CloseIcon from "../../components/icon/svg/closeIcon";

export default function EditUser() {
  const { state, dispatch } = useUserContext();
  const [deleteUserCheck, setDeleteUserCheck] = useState(false);
  const { userId } = useParams();
  const navigate = useNavigate();

  const user = state.find((user) => user.id === userId);
  if (!user) return;

  const [userData, setUserData] = useState<User>({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    gender: user.gender,
    birthday: user.birthday,
    address: user.address,
    phone: user.phone,
    email: user.email,
    website: user.website,
  });

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;

    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const name = e.target.name;
    const value = e.target.value;

    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch({ type: ACTION.UPDATE, payload: userData });
    navigate("/user-dashboard/");
  }

  function handleDeleteUser() {
    dispatch({ type: ACTION.DELETE, payload: userData.id });
    navigate("/user-dashboard/");
  }

  return (
    <div className="edit-user">
      <Link id="close-btn" to="/user-dashboard/">
        <CloseIcon />
      </Link>
      <form
        className="edit-user__form"
        id="editUserForm"
        onSubmit={handleSubmit}
      >
        <Input
          value={userData.firstName}
          name="firstName"
          type="text"
          text="Vorname"
          handleInput={handleInput}
          isRequired={true}
        />
        <Input
          value={userData.lastName}
          name="lastName"
          type="text"
          text="Name"
          handleInput={handleInput}
          isRequired={true}
        />
        {
          <Select
            value={userData.gender}
            name="gender"
            text="Geschlecht"
            handleSelect={handleSelect}
            isRequired={true}
          />
        }
        <Input
          value={userData.birthday}
          name="birthday"
          type="date"
          text="Geburtstag"
          handleInput={handleInput}
          isRequired={true}
        />
        <Input
          value={userData.address}
          name="address"
          type="tel"
          text="Adresse"
          handleInput={handleInput}
          isRequired={true}
        />
        <Input
          value={userData.phone}
          name="phone"
          type="text"
          text="Telefon"
          handleInput={handleInput}
          isRequired={true}
        />
        <Input
          value={userData.email}
          name="email"
          type="email"
          text="E-Mail"
          handleInput={handleInput}
          isRequired={true}
        />
        <Input
          value={userData.website}
          name="website"
          type="text"
          pattern="^(https?://)?(www\.)?[a-z0-9-]+\.[a-z]{2,3}$"
          text="Website"
          handleInput={handleInput}
          isRequired={false}
        />
        <div className="edit-user__action-btn">
          <Button
            id="update-btn"
            text="Update"
            form="editUserForm"
            type="submit"
          />
          <div id="check-delete-btn" onClick={() => setDeleteUserCheck(true)}>
            <TrashIcon />
          </div>
        </div>
      </form>
      {deleteUserCheck && (
        <div className="edit-user__delete-check">
          <p>
            Soll{" "}
            <span>
              {userData.firstName} {userData.lastName}
            </span>{" "}
            wirklich gelöscht werden?
          </p>
          <Button
            id="delete-btn"
            text="User löschen"
            clickEvent={handleDeleteUser}
          />
          <Button
            text="abbrechen"
            id="cancel-btn"
            clickEvent={() => setDeleteUserCheck(false)}
          />
        </div>
      )}
    </div>
  );
}
