import React from "react";
import Chip from "@material-ui/core/Chip";
import LinearProgress from "@material-ui/core/LinearProgress";

function Content() {
  return (
    <div
      className="p-3 pt-4 pb-4"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        width: "inherit",
      }}
    >
      <div className="pb-3">
        <h3>Education</h3>
        <ul>
          <li className="mb-2">
            Mathematics and Physics in Shahid Beheshti High School, Shahrood,
            Iran (2012-2016)
          </li>
          <li className="mb-2">
            Computer Engineering in Iran University of Science and Technology,
            Tehran, Iran (2017-Present)
          </li>
        </ul>
      </div>
      <h3>Teahcing Experience</h3>
      <div className="pb-3">
        <ul>
          <li className="mb-2">
            Teacher's Assistant for Fundamental of Programing (Dr. Zeinab
            Movahedi)
          </li>
          <li className="mb-2">
            Teacher's Assistant for Fundamental of Programing of C# (Dr. Sauleh
            Etemadi)
          </li>
          <li className="mb-2">
            Teacher's Assistant for Advanced Programming of C# (Dr. Sauleh
            Etemadi)
          </li>
        </ul>
      </div>

      <div className="pb-3">
        <div className="right-title-border">
          <h3>Self Study</h3>
        </div>
        <ul>
          {certificates.map(({ name, cert }) => (
            <li key={name} className="mb-2">
              <p>
                {name}
                <a href={cert} className="text-secondary">
                  {" "}
                  <small>[Certificate]</small>
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="right-title-border">
        <h3>Projects</h3>
      </div>
      <ul>
        {projects.map(({ name, url, tags }) => (
          <li key={name} className="mb-2">
            <div>
              <a href={url} className="text-dark">
                {name}
              </a>
            </div>
            {tags.map((t) => (
              <Chip label={t} key={t} />
            ))}
          </li>
        ))}
      </ul>

      <div className="right-title-border">
        <h3>Primary Skills</h3>
      </div>
      <ul>
        {primarySkills.map(({ name, level, familiarity, color }) => (
          <li key={name} className="mb-0">
            {name}
            <div className="pl-2">
              Level:
              <LinearProgress
                variant="determinate"
                value={level}
                style={{ backgroundColor: "#bbbbbb", color: "#1a0000" }}
              />
              <p className="text-dark">Familiarity: {familiarity} years</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const certificates = [
  {
    name:
      "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization",
    cert:
      "https://www.coursera.org/account/accomplishments/certificate/2GCY2E86E45S",
  },
  {
    name: "Introduction to Git and GitHub",
    cert:
      "https://www.coursera.org/account/accomplishments/certificate/YVKKPJ8FHXE4",
  },
  {
    name: "Using Python to Interact with the Operating System",
    cert:
      "https://www.coursera.org/account/accomplishments/certificate/GT85JCDVR6H4",
  },
  {
    name: "Neural Networks and Deep Learning",
    cert:
      "https://www.coursera.org/account/accomplishments/certificate/PCA3ZEPX4KA6",
  },
  {
    name: "Crash Course on Python",
    cert:
      "https://www.coursera.org/account/accomplishments/certificate/9APBSP4M9TDF",
  },
  {
    name: "Design Patterns",
    cert: "https://coursera.org/share/763349519c28dade196a8e35e1eb5ba6",
  },
];

const projects = [
  {
    name: "Health-Record-Frontend",
    url: "https://github.com/alrzazz/Health-Record-Frontend",
    tags: ["React", "JSX", "Redux", "Bootstrap", "Docker"],
  },
  {
    name: "yes-or-no-recognition",
    url: "https://github.com/alrzazz/yes-or-no-recognition",
    tags: [
      "Signal Processing",
      "Keras",
      "TensorFlow",
      "Voice Processing",
      "Deep Learning",
    ],
  },
  {
    name: "Health-Record-Backend",
    url: "https://github.com/alrzazz/Health-Record-Backend",
    tags: [
      "Django",
      "Django Rest Freamework",
      "Bash",
      "Docker",
      "Nginx",
      "Postgres",
      "Github Action",
      "uwsgi",
      "yml",
    ],
  },
  {
    name: "Data-Structure-Course",
    url: "https://github.com/alrzazz/Data-Structure-Course",
    tags: ["Data Structure", "C#"],
  },
  {
    name: "Alphabet-Detection-Hopfield",
    url: "https://github.com/alrzazz/Alphabet-Detection-Hopfield",
    tags: ["Hopfield Neural Network", "Image Processing"],
  },
];

const primarySkills = [
  {
    name: "Python",
    level: 70,
    familiarity: 3,
    color: "#6718b5",
  },
  {
    name: "Django",
    level: 60,
    familiarity: 2,
    color: "#074da3",
  },
  {
    name: "Flask",
    level: 50,
    familiarity: 1,
    color: "#074da3",
  },
  {
    name: "Docker",
    level: 60,
    familiarity: 1,
    color: "#074da3",
  },
];

export default Content;
