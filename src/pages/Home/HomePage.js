import { Link } from "react-router-dom";
import Contact from "../../components/Contact";

function HomePage() {
  return (
    <div>
      <div>
        <h1>Welcome to AMS GPs</h1>
        <Contact />
      </div>
      <Link to="/schedule">
        <button>Who is on duty?</button>
      </Link>
      <br />
      <br />
      <Link to="/signup">
        <button>I am a new patient</button>
      </Link>
    </div>
  );
}

export default HomePage;
