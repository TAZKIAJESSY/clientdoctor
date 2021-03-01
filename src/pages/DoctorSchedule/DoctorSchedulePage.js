import axios from "axios";
import { useState, useEffect } from "react";
import DoctorItem from "../../components/DoctorItem";
import Contact from "../../components/Contact";

function DoctorSchedulePage() {
  const [doctorData, set_doctorData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors`
      );
      console.log("What are doctor Datas?", response);
      set_doctorData(response.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>Who is on duty?</h1>
      <table className="table">
        <thead>
          <tr>
            <th>doctor</th>
            <th>availability</th>
          </tr>
        </thead>
        {doctorData.map((doctor, index) => {
          return (
            <DoctorItem
              key={index}
              doctor={doctor.doctor}
              onDuty={doctor.onDuty === true ? "onDuty" : "OffDuty"}
            />
          );
        })}
      </table>

      <Contact />
    </div>
  );
}

export default DoctorSchedulePage;
