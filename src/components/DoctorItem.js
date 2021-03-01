function DoctorItem(props) {
  return (
    <div>
      <tbody>
        <tr>
          <td>{props.doctor}</td>
          <td>{props.onDuty}</td>
        </tr>
      </tbody>
    </div>
  );
}

export default DoctorItem;
