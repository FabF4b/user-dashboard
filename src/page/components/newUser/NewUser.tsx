import "./NewUser.scss";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import Select from "../../../components/select/Select";
import { useState } from "react";
import { useUserContext } from "../../../context/UserContext";
import type { User } from "../../../context/UserContext";
import { ACTION } from "../../../context/UserContextProvider";
import { Link } from "react-router-dom";

type CreateNewUserProps = {};

export default function CreateNewUser({}: CreateNewUserProps) {
  const { dispatch } = useUserContext();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [newUser, setNewUser] = useState<User>({
    id: crypto.randomUUID(),
    firstName: "",
    lastName: "",
    gender: "",
    birthday: "",
    address: "",
    phone: "",
    email: "",
    website: "",
  });

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value.trim();

    setNewUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const name = e.target.name;
    const value = e.target.value;

    setNewUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch({ type: ACTION.ADD, payload: newUser });
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 3000);
    setNewUser({
      id: crypto.randomUUID(),
      firstName: "",
      lastName: "",
      gender: "",
      birthday: "",
      address: "",
      phone: "",
      email: "",
      website: "",
    });
  }

  return (
    <div className="new-user">
      <form className="new-user__form" onSubmit={handleSubmit}>
        <Input
          value={newUser.firstName}
          name="firstName"
          type="text"
          text="Vorname"
          handleInput={handleInput}
          isRequired={true}
        />
        <Input
          value={newUser.lastName}
          name="lastName"
          type="text"
          text="Name"
          handleInput={handleInput}
          isRequired={true}
        />
        <Select
          value={newUser.gender}
          name="gender"
          text="Geschlecht"
          handleSelect={handleSelect}
          isRequired={true}
        />
        <Input
          value={newUser.birthday}
          name="birthday"
          type="date"
          text="Geburtstag"
          handleInput={handleInput}
          isRequired={true}
        />
        <Input
          value={newUser.address}
          name="address"
          type="tel"
          text="Adresse"
          handleInput={handleInput}
          isRequired={true}
        />
        <Input
          value={newUser.phone}
          name="phone"
          type="text"
          text="Telefon"
          handleInput={handleInput}
          isRequired={true}
        />
        <Input
          value={newUser.email}
          name="email"
          type="email"
          text="E-Mail"
          handleInput={handleInput}
          isRequired={true}
        />
        <Input
          value={newUser.website}
          name="website"
          type="text"
          pattern="^(https?://)?(www\\.)?[a-z0-9-]+\\.(de|com|net|org)$"
          text="Website"
          handleInput={handleInput}
          isRequired={false}
        />
        <div className="new-user__actions-btn">
          <Button text="Erstellen" type="submit" />
          <Link className="new-user__link" to="/user-dashboard">
            «
          </Link>
        </div>
      </form>
      {submitSuccess && (
        <div className="new-user__submitSuccess">
          <p>User erfolgreich hinzugefügt!</p>
        </div>
      )}
    </div>
  );
}
