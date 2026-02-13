import { Link } from "react-router-dom";
import ProfileCreation from "../apps/Profile/ProfileCreation";

function ProfilePage() {
  return (
    <div style={{ padding: "40px" }}>
      <Link to="/">⬅ Back to Home</Link>
      <ProfileCreation />
    </div>
  );
}

export default ProfilePage;
