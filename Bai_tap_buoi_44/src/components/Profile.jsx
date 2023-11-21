import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogOut";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="place-info">
        <img className="img-info" src={user.picture} alt={user.name} />
        <p className="title-info">Xin chào {user.name}</p>
        <p className="location-info">Vị trí: {user.locale} </p>
        <p className="email-info">
          Email: <a href="#">{user.email}</a>
        </p>
      </div>
    )
  );
};

export default Profile;
