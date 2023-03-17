import { useState } from "react";
export function ExamForm() {
  const [Patient_id, setPatient_id] = useState("");
  const [AGE, setAGE] = useState("");
  const [SEX, setSEX] = useState("");
  const [ZIP, setZIP] = useState("");
  const [LATEST_BMI, setLATEST_BMI] = useState("");
  const [LATEST_WEIGHT, setLATEST_WEIGHT] = useState("");
  const [png_filename, setPng_filename] = useState("");
  const [exam_Id, setExam_Id] = useState("");
  const [ICU_Admit, setICU_Admit] = useState("");
  const [_ICU_Admit, set_ICU_Admit] = useState("");
  const [MORTALITY, setMORTALITY] = useState("");
  const [_id, set_id] = useState("");
  const [error, setError] = useState(null)

  const submitHandler = async (e) => {
    e.preventDefault()

    const exam = {Patient_id, AGE, SEX, ZIP, LATEST_BMI, LATEST_WEIGHT, png_filename,
        exam_Id, ICU_Admit, _ICU_Admit, MORTALITY, _id}

        const reponse = await fetch('/', {
            method: 'POST',
            body: JSON.stringify(exam),
            headers: {
                'content-Type': 'application/json'
            }
        })
        const json = await Response.json()

        if (!reponse.ok) {
            setError(json)
        }
        if (reponse.ok) {
            setPatient_id('')
            setAGE('')
            setSEX('')
            setZIP('')
            setLATEST_BMI('')
            setLATEST_WEIGHT('')
            setPng_filename('')
            setExam_Id('')
            setICU_Admit('')
            set_ICU_Admit('')
            setMORTALITY('')
            set_id('')
            setError(null)
            console.log('new exam is added', json)
        }
  }

  return (
    <form className="create" onSubmit={submitHandler}>
      <h2>Insert snew exam.</h2>

      <label>Patient ID:</label>
      <input
        type="number"
        onChange={(e) => setPatient_id(e.target.value)}
        value={Patient_id}
      />

      <label>AGE:</label>
      <input
        type="number"
        onChange={(e) => setAGE(e.target.value)}
        value={AGE}
      />

      <label>SEX:</label>
      <input type="text" onChange={(e) => setSEX(e.target.value)} value={SEX} />

      <label>ZIP:</label>
      <input
        type="number"
        onChange={(e) => setZIP(e.target.value)}
        value={ZIP}
      />

      <label>Latest BMI:</label>
      <input
        type="number"
        onChange={(e) => setLATEST_BMI(e.target.value)}
        value={LATEST_BMI}
      />

      <label>Latest Weight:</label>
      <input
        type="number"
        onChange={(e) => setLATEST_WEIGHT(e.target.value)}
        value={LATEST_WEIGHT}
      />

      <label>Image Address:</label>
      <input
        type="text"
        onChange={(e) => setPng_filename(e.target.value)}
        value={png_filename}
      />

      <label>Exam ID:</label>
      <input
        type="number"
        onChange={(e) => setExam_Id(e.target.value)}
        value={exam_Id}
      />

      <label>ICU Admit:</label>
      <input
        type="boolean"
        onChange={(e) => setICU_Admit(e.target.value)}
        value={ICU_Admit}
      />

      <label>ICU UNIT NUMBER:</label>
      <input
        type="number"
        onChange={(e) => set_ICU_Admit(e.target.value)}
        value={_ICU_Admit}
      />

      <label>MORTALITY:</label>
      <input
        type="boolean"
        onChange={(e) => setMORTALITY(e.target.value)}
        value={MORTALITY}
      />

      <label>User ID:</label>
      <input
        type="number"
        onChange={(e) => set_id(e.target.value)}
        value={_id}
      />

      <button>Add Exam</button>
      {error && <div className="arror">{error}</div>}
    </form>
  );
}
