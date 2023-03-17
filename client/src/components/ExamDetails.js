
export function ExamDetails ( {exam} ) {
    return (
        <div>
            <h3>{exam.Patient_id}</h3>
            <p>AGE : {exam.AGE}</p>
            <p>SEX : {exam.SEX}</p>
            <p>ZIP : {exam.ZIP}</p>
            <p>LATEST_BMI : {exam.LATEST_BMI}</p>
            <p>LATEST_WEIGHT : {exam.LATEST_WEIGHT}</p>
            <p>png_filename : {exam.png_filename}</p>
            <p>exam_Id : {exam.exam_Id}</p>
            <p>ICU_Admit : {exam.ICU_Admit}</p>
            <p>_ICU_admits : {exam._ICU_Admit}</p>
            <p>MORTALITY : {exam.MORTALITY}</p>
            <p>_id : {exam.id}</p>
        </div>
    )
}