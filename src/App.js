import React, { Component } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTelegram,
  faGithub,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Card from "./components/Card";

class App extends Component {
  render() {
    return (
      <div style={{
        backgroundColor: "#eeeeee",
        height: "100vh",
        paddingBottom: "20vh"
      }}
        className="d-flex align-items-center"
      >
        <div
          className="mx-auto p-5 d-flex align-items-center"
          style={{
            backgroundColor: "white",
            width: "fit-content",
            padding: "20px",
            borderRadius: "1.5rem",
            height: "fit-content",
            boxShadow: `1px 1px 5px 1px black`,
          }}>

          <div
            className="justify-content-center mb-4 px-5"
          >
            <div className="d-flex align-items-center ">
              Linkedin
              <div className="ml-auto">
                <Card>
                  <a
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Linkedin"
                    href="https://www.linkedin.com/in/alireza-azizi-8a53521b4/"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="3x"
                      color="#0077b5"
                      style={{
                        padding: "10px",
                      }}
                    />
                  </a>
                </Card>
              </div>
            </div>
            <div className="d-flex align-items-center">
              Github
              <div className="ml-auto">
                <Card>
                  <a
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Github"
                    href="https://github.com/alrzazz/"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="3x"
                      color="black"
                      style={{
                        padding: "10px",
                      }}
                    />
                  </a>
                </Card>
              </div>
            </div>
            <div className="d-flex align-items-center">
              Stackoverflow
              <div className="ml-auto">
                <Card>
                  <a
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="stackoverflow"
                    href="https://stackoverflow.com/users/13069919/alireza-azizi"
                  >
                    <FontAwesomeIcon
                      icon={faStackOverflow}
                      size="3x"
                      color="orange"
                      style={{
                        padding: "10px",
                      }}
                    />
                  </a>
                </Card>
              </div>
            </div>
            <div className="d-flex align-items-center">
              Telegram
              <div className="ml-auto">
                <Card>
                  <a
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Telegram"
                    href="https://t.me/alrzazz"
                  >
                    <FontAwesomeIcon
                      icon={faTelegram}
                      size="3x"
                      color="#0088cc"
                      style={{
                        padding: "10px",
                      }}
                    />
                  </a>
                </Card>
              </div></div>
            <div className="d-flex align-items-center">
              Resume
              <div className="ml-auto">
                <Card>
                  <a
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Resume"
                    href="https://drive.google.com/file/d/1Xalv6HliaviiiNnBv4rZ6SB7KBw46Sw8/view?usp=sharing"
                  >
                    <FontAwesomeIcon
                      icon={faDownload}
                      size="3x"
                      color="#44dd33"
                      style={{
                        padding: "10px",
                      }}
                    />
                  </a>
                </Card>
              </div></div>
            <div className="d-flex align-items-center">
              Email
              <div className="ml-auto">
                <Card>
                  <a
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Email"
                    href="mailto:alrzazz@yahoo.com"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="3x"
                      color="red"
                      style={{
                        padding: "10px",
                      }}
                    />
                  </a>
                </Card>
              </div></div>
            <div className="d-flex align-items-center">
              Hackerrank
              <div className="ml-auto">
                <Card>
                  <a
                    data-toggle="Hackerrank"
                    data-placement="bottom"
                    title="Email"
                    href="https://www.hackerrank.com/alireza_azizi"
                  >
                    <FontAwesomeIcon
                      icon={faGlobe}
                      size="3x"
                      color="green"
                      style={{
                        padding: "10px",
                      }}
                    />
                  </a>
                </Card>
              </div></div>
          </div>
          <div className="align-self-start" style={{ paddingRight: "3rem", paddingLeft: "2rem" }}>

            <h3 className="text-left">Hi. &#128075;	&#128512;</h3>
            <p>I'm Alireza Azizi</p>
            <p>Software Engineer</p>
            <p>Student at Iran University of Science and Technology</p>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
