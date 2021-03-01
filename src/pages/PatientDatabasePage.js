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

      const patient_sorted = [...response.data].sort(compareName);

      set_patientData(patient_sorted);
    }
    fetchData();
  }, []);
  // {
  //   /* <option key={doc.id} value={doc.id}>
  //               {doc.doctor}
  //             </option> */
  // }
  return (
    <div>
      <h1>Patient Database!</h1>
      {doctorData ? (
        <div>
          {doctorData.map((d, index) => {
            return <DoctorItem key={index} doctor={d.doctor} id={d.id} />;
          })}
        </div>
      ) : (
        <p>Loading....</p>
      )}

      <div>
        {patientData ? (
          <div style={{ marginTop: 200 }}>
            {patientData.map((p, index) => {
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
