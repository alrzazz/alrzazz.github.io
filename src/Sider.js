import React from "react";
import Chip from "@material-ui/core/Chip";

function Sider() {
  return (
    <div
      className="p-3 pt-4 pb-4"
      style={{
        backgroundColor: "rgba(10, 10, 10, 0.7)",
        color: "white",
      }}
    >
      <div className="mb-5">
        <h4>Contact Info:</h4>
        <ul>
          <li> Phone: 09360448611</li>
          <li>Gmail: alirezaazizi1396622@gmail.com</li>
          <li>Tehran, Iran</li>
        </ul>
      </div>
      <div className="mb-5">
        <h4>Skills:</h4>
        <Chip label="Python" style={excellent} className="m-1" />
        <Chip label="Django" style={veryGood} className="m-1" />
        <Chip label="Django REST" style={veryGood} className="m-1" />
        <Chip label="JavaScript" style={veryGood} className="m-1" />
        <Chip label="Git" style={veryGood} className="m-1" />
        <Chip label="React" style={veryGood} className="m-1" />
        <Chip label="Linux" style={veryGood} className="m-1" />
        <Chip label="Bash Script" style={veryGood} className="m-1" />
        <Chip label="Mysql" style={veryGood} className="m-1" />
        <Chip label="Postgres" style={veryGood} className="m-1" />
        <Chip label="Deep Learning" style={veryGood} className="m-1" />
        <Chip label="Redux" style={veryGood} className="m-1" />
        <Chip label="Trello" style={veryGood} className="m-1" />
        <Chip label="Scrum" style={veryGood} className="m-1" />
        <Chip label="Agile" style={veryGood} className="m-1" />
        <Chip label="Nginx" style={veryGood} className="m-1" />
        <Chip label="REST API" style={veryGood} className="m-1" />
        <Chip label="C#" style={good} className="m-1" />
        <Chip label="C++" style={good} className="m-1" />
        <Chip label="Flask" style={good} className="m-1" />
        <Chip label="RL" style={good} className="m-1" />
        <Chip label="React Native" style={good} className="m-1" />
        <Chip label="Redis" style={good} className="m-1" />
        <Chip label="Design Pattern" style={good} className="m-1" />
        <Chip label="CI/CD" style={good} className="m-1" />
        <Chip label="Docker" style={good} className="m-1" />
        <Chip label="TensorFlow" style={good} className="m-1" />
        <Chip label="Keras" style={good} className="m-1" />
        <Chip label="Material UI" style={good} className="m-1" />
        <Chip label="Ant Design" style={good} className="m-1" />
        <Chip label="Java" style={good} className="m-1" />
        <Chip label="Nodejs" style={good} className="m-1" />
        <Chip label="RabbitMQ" style={elementary} className="m-1" />
        <Chip label="Celery" style={elementary} className="m-1" />
        <Chip label="GraphQl" style={elementary} className="m-1" />
        <Chip label="Android Studio" style={elementary} className="m-1" />
      </div>
      <div className="d-flex justify-content-center">
        <a href="https://github.com/alrzazz/">
          <img
            src={require("./static/icons/github-logo.svg")}
            alt=""
            style={iconStyle}
          />
        </a>
        <a href="https://t.me/alrzazz">
          <img
            src={require("./static/icons/telegram.svg")}
            alt=""
            style={iconStyle}
          />
        </a>
        <a href="https://www.linkedin.com/in/alireza-azizi-8a53521b4/">
          <img
            src={require("./static/icons/linkedin.svg")}
            alt=""
            style={iconStyle}
          />
        </a>
      </div>
    </div>
  );
}
const iconStyle = {
  width: "50px",
  height: "50px",
  margin: "4px",
};

const excellent = {
  backgroundColor: "#6718b5",
  color: "white",
  fontWeight: "bolder",
};

const veryGood = {
  backgroundColor: "#074da3",
  color: "white",
  fontWeight: "bolder",
};

const good = {
  backgroundColor: "#18b520",
  color: "white",
  fontWeight: "bolder",
};

const elementary = {
  backgroundColor: "#b5b218",
  color: "white",
  fontWeight: "bolder",
};
export default Sider;
