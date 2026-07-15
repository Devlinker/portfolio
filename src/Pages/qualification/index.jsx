import { useState } from "react";
import "./qualification.css";

const qualificationsData = [
  {
    title: "SSLC",
    subtitle: "Government High School",
    calendar: "- 2019",
    modalTitle: "Class 10th Summary :",
    points: [
      "Subjects studied: Science, Maths, English, Social Studies.",
      "Scored 66%",
      "Came runners up in inter-school",
    ],
  },
  {
    title: "Class 12th",
    subtitle: "Government High School",
    calendar: "- 2021",
    modalTitle: "Class 12th Summary :",
    points: [
      "Subjects studied: Physics, Chemistry, Maths, English.",
      "Scored 72.5%",
    ],
  },
  {
    title: "College",
    subtitle: "Hindustan arts and science college Coimbatore.",
    calendar: "2021 - 2024",
    modalTitle: "College Summary :",
    points: [
      "Studying core subjects of IT including DSA, Embedded systems, Design analysis and algorithm, Operating systems, and Computer architecture .",
      "Scored an aggregate of 8.50 CGPA till now.",
      "I implemented a bug tracking system in my internship to streamline the process of identifying and fixing software defects.",
    ],
  },
];

export default function Qualification() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section
      className="qualification__section service__section"
      id="qualification"
    >
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div
        className="qualification__container container grid services__container"
      >
        <div className="qualification__tabs">
          <div
            className="qualification__button button--flex qualification__active"
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className="qualification__content qualifiation__active services__content"
            id="education"
          >
            {qualificationsData.map((q, idx) => {
              const isEven = idx % 2 === 0;
              const showLine = idx !== qualificationsData.length - 1;

              return (
                <div key={idx} className="qualification__data">
                  {!isEven && <div></div>}

                  {isEven ? (
                    <div className="qualification__card">
                      <h3 className="qualification__title">{q.title}</h3>
                      <span className="qualification__subtitle">{q.subtitle}</span>
                      <div className="qualification__calender">
                        <i className="uil uil-calendar-alt"></i> {q.calendar}
                      </div>
                      <span
                        className="button button--flex button--small button--link services__button"
                        onClick={() => setActiveModal(idx)}
                      >
                        View More
                        <i className="uil uil-arrow-right button__icon"></i>
                      </span>
                    </div>
                  ) : null}

                  <div>
                    <span className="qualification__rounder"></span>
                    {showLine && <span className="qualification__line"></span>}
                  </div>

                  {!isEven ? (
                    <div className="qualification__card">
                      <h3 className="qualification__title">{q.title}</h3>
                      <span className="qualification__subtitle">{q.subtitle}</span>
                      <div className="qualification__calender">
                        <i className="uil uil-calendar-alt"></i> {q.calendar}
                      </div>
                      <span
                        className="button button--flex button--small button--link services__button"
                        onClick={() => setActiveModal(idx)}
                      >
                        View More
                        <i className="uil uil-arrow-right button__icon"></i>
                      </span>
                    </div>
                  ) : null}

                  {activeModal === idx && (
                    <div className="services__modal active-modal">
                      <div className="services__modal-content">
                        <h4 className="services__modal-title">{q.modalTitle}</h4>
                        <i
                          className="uil uil-times services__modal-close"
                          onClick={() => setActiveModal(null)}
                        ></i>
                        <ul className="services__modal-services grid">
                          {q.points.map((point, pIdx) => (
                            <li key={pIdx} className="services__modal-service">
                              <i className="uil uil-check-circle services__modal-icon services__moda-icon"></i>
                              <p>{point}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
