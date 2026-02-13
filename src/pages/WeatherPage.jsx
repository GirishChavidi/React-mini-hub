import { Link } from "react-router-dom";
import Weather from "../apps/Weather/Weather";

function WeatherPage() {
  return (
    <div style={{ padding: "40px" }}>
      <div style={{ marginBottom: "20px" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#2563eb",
            fontWeight: "600",
          }}
        >
          ⬅ Back to Home
        </Link>
      </div>

      <Weather />
    </div>
  );
}

export default WeatherPage;
