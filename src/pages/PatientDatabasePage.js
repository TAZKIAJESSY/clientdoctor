import { useState, useEffect } from "react";
import axios from "axios";
import PatientItem from "../components/PatientItem";

function PatientDatabasePage() {
  const [patientData, set_patientData] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get();
      console.log("what are patients?", response);
      set_patientData(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Patient Database!</h1>
    </div>
  );
}
export default PatientDatabasePage;
