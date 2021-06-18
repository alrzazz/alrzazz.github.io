import React, { Component } from "react";
import "./App.css";
import { Spring, useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTelegram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Card from "./components/Card";

class App extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            height: "100vh",
            position: "static",
            zIndex: -1,
            width: "100vw",
            // backgroundImage: `url(${require("./assets/back.jpg")})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          style={{
            height: "100vh",
            top: 0,
            position: "absolute",
          }}
        >
          <Spring
            delay={500}
            from={{
              opacity: 0,
              marginTop: -1000,
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.85)",
            }}
            to={{
              opacity: 1,
              marginTop: 0,
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.85)",
            }}
          >
            {(styles) => (
              <animated.div style={styles}>
                <div
                  style={{
                    textAlign: "center",
                    color: "white",
                    width: "60%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    paddingTop: "100px",
                  }}
                >
                  <h1 className="mb-4">Alireza Azizi</h1>
                  <img
                    src={require("./assets/avatar.jpg")}
                    className="mb-4"
                    style={{
                      borderRadius: "2rem",
                      width: "300px",
                      height: "300px",
                    }}
                  />
                  <p className="mb-4">
                    Hi, I'm so happy for see you there. My name is Alireza and
                    I'm a Mid Level Backend Developer and AI Enthusiast.
                    Currently study Computer Engingeering in Iran University of
                    Science and Technology and doing my project from home. Glad
                    to keep in touch with me.
                  </p>
                  <div
                    className="d-flex flex-row justify-content-center mx-auto mb-4"
                    style={{
                      backgroundColor: "white",
                      width: "fit-content",
                      padding: "20px",
                      borderRadius: "2rem",
                    }}
                  >
                    <Card>
                      <a
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Linkedin"
                        href="https://www.linkedin.com/in/alireza-azizi-8a53521b4/"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          size="5x"
                          color="#0077b5"
                          style={{
                            padding: "10px",
                          }}
                        />
                      </a>
                    </Card>

                    <Card>
                      <a
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Github"
                        href="https://github.com/alrzazz/"
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          size="5x"
                          color="black"
                          style={{
                            padding: "10px",
                          }}
                        />
                      </a>
                    </Card>
                    <Card>
                      <a
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Telegram"
                        href="https://t.me/alrzazz"
                      >
                        <FontAwesomeIcon
                          icon={faTelegram}
                          size="5x"
                          color="#0088cc"
                          style={{
                            padding: "10px",
                          }}
                        />
                      </a>
                    </Card>
                    <Card>
                      <a
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Resume"
                        href="https://raw.githubusercontent.com/alrzazz/CV/6d477f8b7e52beaefc34ef13ae97293d4f8084b7/cv.pdf"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faDownload}
                          size="5x"
                          color="#44dd33"
                          style={{
                            padding: "10px",
                          }}
                        />
                      </a>
                    </Card>
                    <Card>
                      <a
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Gmail"
                        href="mailto:alirezaazizi1396622@gmail.com"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          size="5x"
                          color="red"
                          style={{
                            padding: "10px",
                          }}
                        />
                      </a>
                    </Card>
                  </div>
                </div>
              </animated.div>
            )}
          </Spring>
        </div>
      </div>
    );
  }
}

export default App;
