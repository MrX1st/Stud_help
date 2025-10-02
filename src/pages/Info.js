import "../styles/info.css";

export default function Info() {
  return (
    <div className="info-section">
      <h1>Info & Guides</h1>
      
      <section className="guide-section">
        <h2>How to Handle Dolg (step-by-step guide)</h2>
        <ol className="step-list">
          <li>Contact your teacher to ask about re-taking the exam or test.</li>
          <li>Check the schedule for resits (пересдачи).</li>
          <li>Pay the fee if required (some resits are paid).</li>
          <li>Attend the retake session and pass the assessment.</li>
          <li>Get confirmation in the electronic system that the debt is cleared.</li>
        </ol>
      </section>

      <section className="glossary-section">
        <h2>Key Terms</h2>
        <div className="glossary">
          <details className="glossary-item">
            <summary>Debt (долг)</summary>
            <p>An academic “debt.” This means you didn’t pass a required exam, test, or assignment on time. The subject remains “open” until you successfully retake it. If you collect too many dolgi, you may not be allowed to continue to the next semester or year until they are cleared.</p>
          </details>

          <details className="glossary-item">
            <summary>Offset (зачёт)</summary>
            <p>A pass/fail test, usually without a grade. Instead of numbers (2–5), you receive either “зачтено” (passed) or “незачтено” (not passed). Zachoty often test practical knowledge, attendance, or participation in class.</p>
          </details>

          <details className="glossary-item">
            <summary>Exam (экзамен)</summary>
            <p>A formal graded exam at the end of the semester. Grades are usually 2 (fail), 3 (satisfactory), 4 (good), or 5 (excellent). Exams are more detailed than zachoty and strongly influence your GPA.</p>
          </details>

          <details className="glossary-item">
            <summary>RetakeS (пересдача)</summary>
            <p>A retake of a failed zachot or exam. Retakes can be arranged with your teacher or scheduled officially. Sometimes you are allowed 2–3 attempts, but repeated failures can lead to serious academic consequences.</p>
          </details>

          <details className="glossary-item">
            <summary>Dormitory (общежитие)</summary>
            <p>Slang for dormitory. It’s where most international students live at UrFU. Dorms are affordable but shared (2–4 people per room). Facilities include a shared kitchen, bathrooms, and laundry. Conditions depend heavily on the building and your neighbors.</p>
          </details>

          <details className="glossary-item">
            <summary>Session (сессия)</summary>
            <p>The exam session at the end of each semester. During sessiya, students take all their zachoty and exams. It is the most stressful period of the semester, and students often prepare weeks in advance.</p>
          </details>

          <details className="glossary-item">
            <summary>Department (кафедра)</summary>
            <p>An academic department within the university. For example, the “Kafedra of Software Engineering.” Professors belong to kafedry, and they control courses, research, and exam policies.</p>
          </details>

          <details className="glossary-item">
            <summary>Dean's office (деканат)</summary>
            <p>The dean’s office. This is the main administrative unit for your faculty. Students go here for documents, certificates, academic records, or to solve organizational problems.</p>
          </details>

          <details className="glossary-item">
            <summary>Course (курс)</summary>
            <p>Academic year/level of study. For example, “1st kurs” means first year of bachelor studies, “2nd kurs” means second year, and so on.</p>
          </details>

          <details className="glossary-item">
            <summary>Mark (балл)</summary>
            <p>A point or grade. Many assignments, quizzes, or projects are graded by “bally” (points), which accumulate toward your final exam or zachot result.</p>
          </details>

          <details className="glossary-item">
            <summary>Schollarship (стипендия)</summary>
            <p>A student scholarship. Russian students may receive monthly stipends if they study well. International students sometimes qualify for stipends through government programs or agreements.</p>
          </details>

          <details className="glossary-item">
            <summary>Consultation (консультация)</summary>
            <p>A consultation session with a professor before an exam. Students can ask questions, clarify material, and sometimes receive hints about exam topics.</p>
          </details>

          <details className="glossary-item">
            <summary>Practice (практика)</summary>
            <p>A practical training or internship included in your study plan. For example, teaching practice, industrial internship, or research practice. It usually takes place during the summer.</p>
          </details>

          <details className="glossary-item">
            <summary>Course work (курсовая работа)</summary>
            <p>A course paper or project that students must complete in certain subjects. It is larger than a regular assignment and often requires research, analysis, and a written report.</p>
          </details>

          <details className="glossary-item">
            <summary>Diploma work (дипломная работа)</summary>
            <p>The final graduation thesis. Every bachelor or master student must complete and defend a diploma project in front of a committee to graduate.</p>
          </details>

          <details className="glossary-item">
            <summary>Credit Book (зачётная книжка)</summary>
            <p>A student’s official grade book (now mostly digital). It records all your passed zachoty and exams. Losing it used to be a big problem, though digital versions reduce the risk.</p>
          </details>

          <details className="glossary-item">
            <summary>Credit (кредит / зачетные единицы)</summary>
            <p>Credit units assigned to each subject, similar to ECTS. They indicate workload and are used for transferring courses between universities.</p>
          </details>

          <details className="glossary-item">
            <summary>БРС (балльно-рейтинговая система)</summary>
            <p>The system of accumulation of points: attendance, homework, tests and exams add up to the final grade.</p>
          </details>

          <details className="glossary-item">
            <summary>Schedule (Расписание)</summary>
            <p>A table with pairs for the week. It can change several times per semester, so students always check for updates in the UrFU app or on the website..</p>
          </details>

          <details className="glossary-item">
            <summary>Winter/Summer Holidays (Зимние/летние каникулы)</summary>
            <p>Official rest after the session. About 2-3 weeks in winter and up to 2 months in summer. But if there are "tails", the holidays are shortened..</p>
          </details>

          <details className="glossary-item">
            <summary>Team project (командный проект)</summary>
            <p>A group assignment where each student is responsible for a part of the work (code, design, research, etc.). Teachers look at both the result and teamwork.</p>
          </details>

          <details className="glossary-item">
            <summary>OpenEdu</summary>
            <p>An online platform for university courses. At UrFU, some subjects are counted through taking courses on OpenEdu.</p>
          </details>
        </div>
      </section>
    </div>
  );
}