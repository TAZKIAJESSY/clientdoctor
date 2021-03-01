import { Link } from "react-router-dom";

function patientItem(props) {
  return (
    <div
      style={{
        display: "border-box",
        width: "25%",
        margin: "auto",
        borderStyle: "solid",
        borderColor: "green",
      }}
    >
      <h2>
        Name:
        {props.firstName} {props.lastName}
      </h2>
      <h4>Id:{props.id}</h4>
      <p>Date Of Birth:{props.dateOfBirth}</p>
      <Link to={`/detailspatient/${props.id}`}>
        {" "}
        <button>Show details</button>{" "}
      </Link>
    </div>
  );
}

export default patientItem;
