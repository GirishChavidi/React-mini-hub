import React, { useState } from "react";
import "./ProfileCreation.css";

const ProfileCreation = () => {
  const [name, setName] = useState("GIRISH");
  const [title] = useState("Software Developer");
  const [bio] = useState(
    "Passionate React developer learning and building cool projects!"
  );
  const [avatar] = useState("https://via.placeholder.com/100");

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={avatar} alt={name} width="100" height="100" />
        <h2>{name}</h2>
        <h4>{title}</h4>
        <p>{bio}</p>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Change name"
        />
      </div>
    </div>
  );
};

export default ProfileCreation;

