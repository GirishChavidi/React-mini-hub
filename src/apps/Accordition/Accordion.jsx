import { useState } from "react";
import "./Accordion.css";

function Header({ title }) {
  return <h2 className="accordion-title">{title}</h2>;
}

function ToggleSwitch({ isOn, onToggle }) {
  return (
    <button className="toggle-btn" onClick={onToggle}>
      {isOn ? "Hide profile ▲" : "Show profile ▼"}
    </button>
  );
}

function ProfileCard({ user, onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(message);
    setMessage("");
  };

  return (
    <div className="profile-card">
      <h3>{user.name}</h3>
      <p>Role: {user.role}</p>

      <form onSubmit={handleSubmit}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a quick message"
        />
        <button type="submit" disabled={!message.trim()}>
          Send
        </button>
      </form>
    </div>
  );
}

export default function Accordion() {
  const [isVisible, setIsVisible] = useState(false);

  const user = { name: "Girish Chavidi", role: "Frontend Learner" };

  const handleSendMessage = (msg) => {
    alert(`Message sent to ${user.name}: "${msg}"`);
  };

  return (
    <div className="accordion-container">
      <Header title="Profile Viewer" />

      <ToggleSwitch
        isOn={isVisible}
        onToggle={() => setIsVisible((s) => !s)}
      />

      {isVisible ? (
        <ProfileCard user={user} onSendMessage={handleSendMessage} />
      ) : (
        <p className="accordion-hint">
          Click the button to view the profile.
        </p>
      )}
    </div>
  );
}
