import { stripBasename } from "@remix-run/router";
import { LayoutGroup } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function OnlineTestSeries() {
  const [activeTab, setActiveTab] = useState(false);
  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      style={{
        overflow: "auto",
        height: "100vh",
        overflowX: "hidden",
        flex: 1,
      }}
    >
      <div
        style={{
          borderWidth: 5,
          borderColor: "black",
          marginLeft: "30vw",
          marginTop: "24vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginRight: "30vw",
          }}
        >
          <div
            style={{
              width: "7vw",
              height: "3vw",
              backgroundColor: activeTab ? "#D4D4D4" : "#94B9FF",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onClick={() => {
              setActiveTab(false);
            }}
          >
            <text
              style={{
                color: "white",
                fontSize: 20,
              }}
            >
              student
            </text>
          </div>

          <div
            style={{
              width: "7vw",
              height: "3vw",
              backgroundColor: activeTab ? "#94b9ff" : "#D4D4D4",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            onClick={() => {
              setActiveTab(true);
            }}
          >
            <text
              style={{
                color: "white",
                fontSize: 20,
              }}
            >
              admin
            </text>
          </div>
        </div>

        {activeTab ? (
          <div
          style={{
            width: "40vw",
            height: "50vh",
            backgroundColor: "#94B9FF",
            borderRadius: 30,

            //opacity: "80%",
          }}
        >
          <text style={{ fontSize: 20, color: "white" }}>
            <br></br>
            <br></br>Enter Admin Password: <br></br>
          </text>
          <input
            style={{
              height: "8vh",
              width: "30vw",
              backgroundColor: "white",
              marginLeft: "1vw",
              marginTop: "5vh",
              borderRadius: 10,
              fontSize: 22,
              textAlign: "center",
            }}
          ></input>
          <text><br></br></text>
          <button style={{
              marginTop: "10vh",
              height: "5vh",
              width: "7vw",
              color: "white",
            }}>
              <text style={{
                color: "black",
              }}>
                login
              </text>
            </button>
        </div>
        ) : (
          <div
            style={{
              width: "40vw",
              height: "50vh",
              backgroundColor: "#94B9FF",
              borderRadius: 30,

              
            }}
          >
            <text style={{ fontSize: 20, color: "white" }}>
              <br></br>
              <br></br>Enter your Roll Number:<br></br>
            </text>

            <input
              style={{
                height: "8vh",
                width: "30vw",
                backgroundColor: "white",
                marginLeft: "1vw",
                marginTop: "5vh",
                borderRadius: 10,
                fontSize: 22,
                textAlign: "center",
              }}
            ></input>
            
            <text><br></br></text>

            <button style={{
              marginTop: "10vh",
              height: "5vh",
              width: "7vw",
              color: "white",
            }}>
              <text style={{
                color: "black",
              }}>
                Start Test
              </text>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
