function Contact() {
  function openClose() {
    let date = new Date();
    let hours = date.getHours();

    return hours > 8 && hours < 17 ? "open" : "closed";
  }

  return (
    <div>
      {" "}
      <p>
        We are <b>{openClose()}</b>
      </p>
      <p>To make an appointment</p>
      <p>Call: 545454578 </p>
    </div>
  );
}

export default Contact;
