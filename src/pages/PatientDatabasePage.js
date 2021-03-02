import { useState, useEffect } from "react";
import axios from "axios";
import PatientItem from "../components/PatientItem";
import DoctorItem from "../components/DoctorItem";

function compareName(patient_a, patient_b) {
  return patient_a.lastName.localeCompare(patient_b.lastName);
}

function PatientDatabasePage() {
  const [doctorData, set_doctorData] = useState("");
  const [patientData, set_patientData] = useState("");
  const [doctorId, set_doctorId] = useState("all");

  function change_sorting(event) {
    console.log("New filter sort", event.target.value);
    set_doctorId(event.target.value);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors`
      );
      console.log("what are doctors?", response);
      set_doctorData(response.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients`
      );
      console.log("what are patients?", response);

      set_patientData(response.data);
    }
    fetchData();
  }, []);
  const patient_sorted = [...patientData].sort(compareName);

  const sorted_doctor_byid = patient_sorted.filter((Patient) => {
    if (doctorId === "all") {
      return Patient;
    } else {
      return parseInt(doctorId) === Patient.doctorId;
    }
  });

  return (
    <div>
      <h1>Patient Database!</h1>

      {doctorData ? (
        <div>
          <label>Select Doctor's Name: </label>
          <select onChange={change_sorting}>
            <option value="all">All</option>
            {doctorData.map((d, index) => {
              return (
                <option key={index} value={d.id}>
                  doctor={d.doctor}
                </option>
              );
            })}
          </select>
        </div>
      ) : (
        <p>Loading....</p>
      )}

      <div>
        {patientData ? (
          <div style={{ marginTop: 200 }}>
            {sorted_doctor_byid.map((p, index) => {
              return (
                <PatientItem
                  key={index}
                  firstName={p.firstName}
                  lastName={p.lastName}
                  id={p.id}
                  dateOfBirth={p.dateOfBirth}
                />
              );
            })}
          </div>
        ) : (
          <p>Loading.....</p>
        )}
      </div>
    </div>
  );
}
export default PatientDatabasePage;
