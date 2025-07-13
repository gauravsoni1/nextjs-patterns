import React from "react";
import { RxAvatar } from "react-icons/rx";

const UserProfileIcon: React.FC = () => {
  const handleProfileClick = () => {
    // Logic for handling profile click (e.g., open dropdown)
  };

  return (
    <div onClick={handleProfileClick} style={{ cursor: "pointer" }}>
      <RxAvatar size={30} />
    </div>
  );
};

export default UserProfileIcon;
