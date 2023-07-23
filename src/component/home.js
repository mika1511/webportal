import React, { useState, useEffect } from "react";
import sstclogo from "./../sstclogo.png";
import searchlogo from "./../searchlogo.png";
import sstc from "./../sstc.png";
import "./home.css";
import sideimg from "./../sideimg.png";
import { motion } from "framer-motion";

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState(null);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [typingText, setTypingText] = useState("");

  useEffect(() => {
    const text = "WELCOME TO SSTC";
    let i = 0;

    const typeText = () => {
      if (i < text.length) {
        setTypingText((prevText) => prevText + text.charAt(i));
        i++;
      } else {
        setIsTypingComplete(true);
      }
    };

    const typingInterval = setInterval(typeText, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div
      style={{
        overflow: "auto",
        height: "100vh",
        overflowX: "hidden",
        flex: 1,
        backgroundColor: "#D1E6F9"
      }}
    >
      {/* <div className="box_header" style={{}}>
        <img
          src={sstclogo}
          width={60}
          height={50}
          style={{
            marginLeft: 20,
          }}
        ></img>

        <span
          style={{
            fontSize: 20,
          }}
        >
          𝗦𝗛𝗥𝗜 𝗦𝗛𝗔𝗡𝗞𝗔𝗥𝗔𝗖𝗛𝗔𝗥𝗬𝗔 <br />
          𝗧𝗘𝗖𝗛𝗡𝗜𝗖𝗔𝗟 𝗖𝗔𝗠𝗣𝗨𝗦
        </span>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "auto",
            justifyContent: "space-between",
            fontSize: 18,
          }}
        >
          <span
            style={{
              color: activeTab === "home" ? "white" : "black",
              marginLeft: 400,
              cursor: "pointer",
              backgroundColor: activeTab === "home" ? "#2432AE" : "transparent",
              padding: "5px 10px",
            }}
            onClick={() => handleClick("home")}
          >
            Home
          </span>
          <span
            style={{
              color: activeTab === "faculty" ? "white" : "black",
              marginLeft: 50,
              cursor: "pointer",
              backgroundColor:
                activeTab === "faculty" ? "#2432AE" : "transparent",
              padding: "5px 10px",
            }}
            onClick={() => handleClick("faculty")}
          >
            Faculty
          </span>
          <span
            style={{
              color: activeTab === "test" ? "white" : "black",
              marginLeft: 50,
              cursor: "pointer",
              backgroundColor: activeTab === "test" ? "#2432AE" : "transparent",
              padding: "5px 10px",
            }}
            onClick={() => handleClick("test")}
          >
            Online test series
          </span>
          <span
            style={{
              color: activeTab === "access" ? "white" : "black",
              marginLeft: 50,
              cursor: "pointer",
              backgroundColor:
                activeTab === "access" ? "#2432AE" : "transparent",
              padding: "5px 10px",
            }}
            onClick={() => handleClick("access")}
          >
            Quick access
          </span>
          <img
            src={searchlogo}
            width={60}
            height={50}
            style={{
              marginLeft: 50,
            }}
          ></img>
        </div>
      </div> */}
      <div
        style={{
          position: "relative",
        }}
      >
        <img src={sstc} width={1600} height={700}></img>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          style={{
            position: "absolute",
            bottom: 350,
            left: 50,
            right: 50,
            fontSize: 80,
            color: "white",
          }}
        >
          WELCOME TO SSTC
        </motion.span>
      </div>
      <div
        style={{
          marginTop: 10,
          display: "flex",
          marginLeft: 30,
        }}
      >
        <span style={{ color: "#242526", fontSize: 18 }}>
          Software | Technology | Excellence
        </span>
      </div>

      <div
        style={{
          marginTop: 7,
          display: "flex",
          marginLeft: -30,
        }}
      >
        <span style={{ fontSize: 30, fontWeight: "bold" }}>
          Welcome to the Computer Science and Engineering Department of SSTC
        </span>
        <img
          style={{
            marginLeft: 80,
          }}
          src={sideimg}
        ></img>
      </div>
      <div
        style={{
          display: "flex",
          width: "40%",
          textAlign: "center",
          marginTop: -800,
          marginLeft: 40,        
        }}
      >
        <p
          style={{
            backgroundColor: "#E5f3fd",
            borderRadius: 20,
            fontSize: 25,
          }}
        >
          {
            " The department of Computer Science and Engineering at the Shri shankaracharya technical campus promotes innovation-centric education and performs cutting-edge research. The department continuously endeavors to create and sustain an academic environment conducive to the highest level of research and teaching. The goal is to develop human resources with sound knowledge of theoretical, systems, and application aspects of Computer Science & Engineering. The department also facilitates the development of academia-industry collaborations and societal outreach activities. "
          }
        </p>
      </div>
    </div>
  );
}
