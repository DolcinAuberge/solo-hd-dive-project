import { useEffect, useState } from "react";
import { ExamDetails } from "../components/ExamDetails";
import { ExamForm } from "../components/ExamForm";

export function TestApi() {
  const [exams, setExams] = useState(null);

  useEffect(() => {
    const fetchExams = async () => {
      const response = await fetch("http://localhost:9000");
      const json = await response.json();

      if (response.ok) {
        setExams(json);
      }
    };
    fetchExams();
  }, []);
  return (
    <div className="testApi">
      <div>
        {exams &&
          exams.map((exam) => (
             <ExamDetails key={exam.AGE} exam={exam} />
             ))}
      </div>
      <ExamForm />
    </div>
  );
}
