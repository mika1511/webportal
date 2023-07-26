import { stripBasename } from "@remix-run/router";
import { LayoutGroup } from "framer-motion";
import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import "./onlineTestPage.css";
import HomeIcon from "../homeicon.png"
const OnlineTestCreate = () => {
  return (
    <div
      style={{
        overflow: "auto",
        height: "100vh",
        overflowX: "hidden",
        flex: 1,
      }}
    >
      <text>Hello</text>
    </div>
  );
};

const OnlineTestExec = () => {};

export default function OnlineTestSeries() {
  return (
    <div>
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
            width: "30vh",
            height: "100%",
            backgroundColor: "#5c5c5c",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "5%",
            }}
          >
            <span
              style={{
                color: "white",
                fontSize: "2.5vh",
                overflow: "hidden",
                justifyContent: "flex-start",
              }}
            ></span>
          </div>
          <img src={HomeIcon} width="30%" height="8%"></img>
          <div
            className="sidebar_container"
            style={{
              marginTop: "5vh",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                fontSize: "2.5vh",
                color: "white",
              }}
            >
              DASHBOARD
            </span>
          </div>
          <div
            className="sidebar_container"
            style={{
              marginTop: "2vh",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                fontSize: "2.5vh",
                color: "white",
              }}
            >
              RESULTS
            </span>
          </div>

          <div
            className="sidebar_container"
            style={{
              marginTop: "2vh",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                fontSize: "2.5vh",
                color: "white",
              }}
            >
              SEE RESULTS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
