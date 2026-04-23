import "./User.scss";
import GenderIcon from "../../../components/icon/svg/GenderIcon";
import BirthdayIcon from "../../../components/icon/svg/BirthdayIcon";
import AdressIcon from "../../../components/icon/svg/AddressIcon";
import ContactIcon from "../../../components/icon/svg/ContactIcon";
import EmailIcon from "../../../components/icon/svg/EmailIcon";
import WebsiteIcon from "../../../components/icon/svg/WebsiteIcon";
import AvatarMaleIcon from "../../../components/icon/svg/AvatarMaleIcon";
import AvatarFemaleIcon from "../../../components/icon/svg/AvatarFemaleIcon";
import AvatarDiversIcon from "../../../components/icon/svg/AvatarDiversIcon";
import { useUserContext, type User } from "../../../context/UserContext";
import Button from "../../../components/button/Button";

type UserProps = {
  user: User;
  handleSelectUser: (id: string) => void;
};

export default function User({ user, handleSelectUser }: UserProps) {
  const genderIcon =
    user.gender === "Männlich" ? (
      <AvatarMaleIcon />
    ) : user.gender === "Weiblich" ? (
      <AvatarFemaleIcon />
    ) : user.gender === "Divers" ? (
      <AvatarDiversIcon />
    ) : null;

  return (
    <div className="user" onClick={() => handleSelectUser(user.id)}>
      <div className="user__picture">{genderIcon}</div>
      <div>
        <h4 className="user__name">
          {user.firstName} {user.lastName}
        </h4>
        <div className="user__details">
          <div>
            <div className="user__detail-item">
              <GenderIcon />
              <p>{user.gender}</p>
            </div>
            <div className="user__detail-item">
              <BirthdayIcon />
              <p>
                {new Date(user.birthday).toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="user__detail-item">
              <AdressIcon />
              <p>{user.address}</p>
            </div>
          </div>
          <div>
            <div className="user__detail-item">
              <ContactIcon />
              <p>{user.phone}</p>
            </div>
            <div className="user__detail-item">
              <EmailIcon />
              <p>{user.email}</p>
            </div>
            <div className="user__detail-item">
              <WebsiteIcon />
              <p>{user.website}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
