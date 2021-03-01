import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function DetailsPatientPage() {
  const { patientId } = useParams();
  const [detailsData, set_detailsData] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/${patientId}`
      );
      console.log("Only one patient data", response);
      set_detailsData(response.data);
    }
    fetchData();
  }, [patientId]);

  return (
    <div style={{ marginTop: 200 }}>
      <div
        style={{
          width: "25%",
          margin: "auto",
          display: "border-box",
          borderStyle: "solid",
          borderColor: "green",
          paddingTop: 20,
        }}
      >
        <h2>
          {detailsData.firstName} {detailsData.lastName}
        </h2>
        <h3>{detailsData.gender}</h3>
        <p>{detailsData.dateOfBirth}</p>
        <div>
          {" "}
          <ol style={{ listStyleType: "none" }}>
            Contact details:
            <br /> <li>{detailsData.phoneNumber}</li>
            <li>{detailsData.email}</li>
          </ol>
        </div>

        <ul style={{ listStyleType: "none" }}>
          prescriptions:
          <li>{detailsData.prescriptions}</li>
        </ul>
      </div>
    </div>
  );
}

export default DetailsPatientPage;
