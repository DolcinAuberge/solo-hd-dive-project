import { useState, useEffect } from 'react';

const API_ROOT = 'https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams'
 // '/';
// 'http://localhost:9000';

export function useApi({ path } = { path: '' }) {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    fetch(API_ROOT)
      .then(res => res.text())
      .then(res => setExams(res));
  }, []);

  return (
    exams
  
  );
}

//<div>
//    {
//        exams && exams.map(exam=>{
//          return(
//            <div key={exam.id} style={{alignItems:'center', margin:'20px 60px'}}>
//            <h4>{exam.patientId}</h4>
//            <p>{exam.bmi}</p>
//
//            </div>
//          )
//        })
//      }
//    </div>
