import { useState } from "react";

function PatientSignUpPage() {
  const [formData, set_formData] = useState("");
  // const [message, set_message] = useState("");

  function handleChange(e) {
    set_formData({ ...formData, [e.target.name]: e.target.value });
  }

  function doneSign(e) {
    e.preventDefault();

    console.log(formData);

    // set_message("successful");
  }
  return (
    <div>
      <form onSubmit={doneSign}>
        <label>First Name:</label>{" "}
        <input onChange={handleChange} type="text" name="fname" required />
        <br />
        <label>Last Name:</label>{" "}
        <input onChange={handleChange} type="text" name="lname" required />
        <br />
        <label>E-mail:</label>{" "}
        <input onChange={handleChange} type="email" name="email" required />
        <br />
        <label>Phone:</label>{" "}
        <input onChange={handleChange} type="number" name="phone" required />
        <br />
        <label>Gender: </label>
        <select name="gender" onChange={handleChange} required>
          <option>-------</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <label>Date of Birth:</label>{" "}
        <input onChange={handleChange} type="date" name="birth" required />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {/* <p>{message}</p> */}
    </div>
  );
}
export default PatientSignUpPage;
