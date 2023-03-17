
import { useApi } from "../hooks/use-api";

export function Table () {
    const { response } = useApi();
    return(
      <>
      <div>
        {response.map((data, key) => {
          return (
            <div key={key}>
              {data.Id +
              " , " +
              data.patientId +
              " , " +
              data.age +
              " , " +
              data.sex +
              " , " +
              data.zipCode +
              " , " +
              data.bmi +
              " , " +
              data.__v +
              " , " +
              data.examId +
              " , " +
              data.keyFindings +
              " , " +
              data.brixiaScores +
              " , " +
              data.imageURL +
              " , "
              }
            </div>
          );
        })}
      </div>
      </>


// <Table striped>
   //         <thead>
     //         <tr>
       //         <th>Id</th>
         //       <th>Patient Id</th>
           //     <th>Age</th>
             //   <th>Sex</th>
               // <th>Zip Code</th>
   //             <th>BMI</th>
     //           <th>__V</th>
       //         <th>exam Id</th>
         //       <th>Key Finding</th>
           //     <th>Brixia Scores</th>
             //   <th>Image</th>
                
   //           </tr>
     //       </thead>
       //     <tbody>
          //    {data.map((exams) => {
            //    return (
              //    <tr>
    //                <td>{exams.id}</td>
  //                  <td>{exams.patientId}</td>
      //              <td>{exams.age}</td>
        //            <td>{exams.sex}</td>
          //          <td>{exams.zipCode}</td>
            //        <td>{exams.bmi}</td>
              //      <td>{exams.__v}</td>
                //    <td>{exams.examId}</td>
   //                 <td>{exams.KeyFindings}</td>
     //               <td>{exams.brixiascores}</td>
       //             <td>{exams.imageURL}</td>
         //         </tr>
           //     );
          //    })}
          //  </tbody>
        //  </Table>
               
    );
}