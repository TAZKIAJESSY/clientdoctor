import "./App.css";
import { Switch, Route } from "react-router-dom";
import PatientDatabasePage from "./pages/PatientDatabasePage";
import PatientSignUpPage from "./pages/PatientSignUpPage";
import HomePage from "./pages/Home/HomePage";
import DoctorSchedulePage from "./pages/DoctorSchedule/DoctorSchedulePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/database" component={PatientDatabasePage} />
        <Route path="/signup" component={PatientSignUpPage} />

        <Route path="/schedule" component={DoctorSchedulePage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
