import React, { Component } from "react";
import "./App.css";
import MainContent from "./MainContent";
import Sider from "./Sider";

class App extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <div className="p-4">
          <img
            src={require("./static/avatar.jpg")}
            alt="avatar"
            style={{
              width: "150px",
              borderWidth: "2px",
              borderColor: "gray",
              borderStyle: "solid",
              borderRadius: "10%",
            }}
          />
          <div className="p-3">
            <div>
              <h1>Alireza Azizi</h1>
              <h4>Born 1998</h4>
              <p>
                Backend developer interested in Deep Learning and Artificial
                Intelligence
              </p>
            </div>
          </div>
        </div>
        <div className="main">
          <Sider />
          <MainContent />
        </div>
      </div>
    );
  }
}

export default App;
