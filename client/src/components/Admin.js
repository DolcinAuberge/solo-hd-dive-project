import { useState, useEffect } from "react";
import data from "./data.json";

export function Admin() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");

  return (
    <>
    {status}
    {show ?
      <ExamForm setShow={setShow} setStatus={setStatus} /> :
      <ExamMsg setShow={setShow} setStatus={setStatus} />}
    </>
  );
}

function ExamMsg(props) {
  return (
    <>
      <h5>Posting exam was successful</h5>
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => {
          props.setShow(true);
          props.setStatus("");
        }}
      >
        Add an other exam.
      </button>
    </>
  );
}

function ExamForm(props) {
  const [id, setId] = useState("");
  const [patientId, setPatientId] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [bmi, setBmi] = useState("");
  const [v, setV] = useState("");
  const [examId, setExamId] = useState("");
  const [keyFindings, setKeyFindings] = useState("");
  const [brixiaScores, setBrixiaScores] = useState("");
  const [imageURL, setImageURL] = useState("");

  function handle() {
    fetch(`data`)
      .then((response) => response.text())
      .then((text) => {
        try {
          const data = JSON.parse(text);
          props.setStatus(JSON.stringify(data.value));
          props.setShow(false);
          console.log("JSON:", data);
        } catch (err) {
          props.setStatus("Posting exam failed");
          console.log("err:", text);
        }
      });
  }
  return (
    <>
      <form className="examForm">
        <div>
        <table width= "800" cellPadding="10" cellSpacing={5}>
          <tr>
          <td>
            id
            <br />
            <input
              type="input"
              className="form-control"
              placeholder="Enter id"
              value={id}
              onChange={(e) => setId(e.currentTarget.value)}
            />
            </td>
            <td>
            patientId
            <br />
            <input
              type="number"
              className="form-control"
              placeholder="Enter patient id"
              value={patientId}
              onChange={(e) => setPatientId(e.currentTarget.value)}
            />
            </td>
            <td>
            age
            <br />
            <input
              type="number"
              className="form-control"
              placeholder="enter age"
              value={age}
              onChange={(e) => setAge(e.currentTarget.value)}
            />
            </td>
            </tr>
            <tr>
            <td>
            sex
            <br />
            <input
              type="input"
              className="form-control"
              placeholder="Enter sex"
              value={sex}
              onChange={(e) => setSex(e.currentTarget.value)}
            />
            </td>
            <td>
            zip Code
            <br />
            <input
              type="number"
              className="form-control"
              placeholder="Enter zipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.currentTarget.value)}
            />
            </td>
            <td>
            bmi
            <br />
            <input
              type="number"
              className="form-control"
              placeholder="Enter bmi"
              value={bmi}
              onChange={(e) => setBmi(e.currentTarget.value)}
            />
            </td>
            </tr>
            <tr>
            <td>
            v<br />
            <input
              type="number"
              className="form-control"
              placeholder="Enter __v"
              value={v}
              onChange={(e) => setV(e.currentTarget.value)}
            />
            </td>
            <td>
            exam Id
            <br />
            <input
              type="number"
              className="form-control"
              placeholder="Enter exam id"
              value={examId}
              onChange={(e) => setExamId(e.currentTarget.value)}
            />
            </td>
            <td>
            key Findings
            <br />
            <input
              type="textarea"
              className="form-control"
              placeholder="Enter key findings"
              value={keyFindings}
              onChange={(e) => setKeyFindings(e.currentTarget.value)}
            />
            </td>
            </tr>
            <tr>
            <td>
            brixias Scores
            <br />
            <input
              type="number"
              className="form-control"
              placeholder="Enter brixiasscores"
              value={brixiaScores}
              onChange={(e) => setBrixiaScores(e.currentTarget.value)}
            />
            </td>
            <td>
            imageURL
            <br />
            <input
              type="input"
              className="form-control"
              placeholder="Enter your image"
              value={imageURL}
              onChange={(e) => setImageURL(e.currentTarget.value)}
            />
            </td>
            </tr>
            <tr>
            <td></td><td>
            <button type="submit" className="btn btn-light" onClick={handle}>
              Add exam
            </button>
            </td><td></td>
            </tr>
            </table>
        </div>
      </form>
    </>
  );
}
