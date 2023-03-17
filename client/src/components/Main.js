// import { useApi } from '../hooks/use-api';
import Data from "./data.json";

export function Main() {
  //   const { exams } = useApi;
  return (
    <>
      <table
        className="mainTable"
        width="100%"
        cellPadding="10"
        cellSpacing="2"
      >
        <thead>
          <tr>
            <td>Patient id</td>
            <td>Exam Id</td>
            <td>Image</td>
            <td>key Findings</td>
            <td>Brixia Scores</td>
            <td>Age</td>
            <td>Sex</td>
            <td>BMI</td>
            <td>Zip</td>
          </tr>
        </thead>
        <tbody>
          {Data.map((data) => {
            return (
              <tr>
                <td>{data.patientId}</td>
                <td>{data.examId}</td>
                <td>
                  <img
                    src={data.image}
                    width="25"
                    height={30}
                    alt=" this image is available"
                  ></img>
                </td>
                <td>{data.keyFindings}</td>
                <td>{data.brixiaScores}</td>
                <td>{data.age}</td>
                <td>{data.SEX}</td>
                <td>{data.bmi}</td>
                <td>{data.zipCode}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

// <h1>Main</h1>

//       <div>
// {
//     exams && exams.map(exam=>{
//       return(
//         <div key={exam.id} style={{alignItems:'center', margin:'20px 60px'}}>
//         <h4>{exam.patientId}</h4>
//         <p>{exam.bmi}</p>
//         </div>
//       )
//     })
//   }
// </div>
