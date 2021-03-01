import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 40,
        fontSize: 30,
      }}
    >
      <NavLink activeStyle={{ fontWeight: "bold", color: "teal" }} exact to="/">
        Home
      </NavLink>
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "red" }}
        exact
        to="/schedule"
      >
        Doctor schedule
      </NavLink>
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "violet" }}
        exact
        to="/signup"
      >
        Patient Signup
      </NavLink>
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "orange" }}
        exact
        to="/database"
      >
        Patient Database
      </NavLink>
    </div>
  );
}

export default NavBar;
