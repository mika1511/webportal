import React, { useState, useEffect } from "react";
import sstclogo from "./../sstclogo.png";
import searchlogo from "./../searchlogo.png";
import sstc from "./../sstc.png";
import "./home.css";
import sideimg from "./../sideimg.png";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";

async function tryLogin(passwd) {
  try {
    const res = await axios.post("http://127.0.0.1:8080/login", 
  {
    "pwd": passwd
  });
  
    return true;
} catch(error) {
    return error;
  }
}

async function LoginFx(passwd) {
  const res = await tryLogin(passwd);
  if(res) {
    return true;
  }
  return false;
}


export default function HomeScreen() {

  const [inputPwd, setInputPwd] = useState("");

  const handleInputPwd = (event) => {
    setInputPwd(event.target.value);
  };

  const [activeTab, setActiveTab] = useState("");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  const [activeSelectTab, setActiveSelectTab] = useState(false);

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

  const location = useLocation(); // Access current URL
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("home");
    } else if (location.pathname === "/faculty") {
      setActiveTab("faculty");
    } else if (location.pathname === "/OnlineTest") {
      setActiveTab("test");
    } else if (location.pathname === "/access") {
      setActiveTab("access");
    }
  }, [location.pathname]);

  if (activeTab == "home") {
    return (
      <div
        style={{
          overflow: "auto",
          height: "100vh",
          overflowX: "hidden",
          flex: 1,
          //backgroundColor: "#D1E6F9",
          backgroundImage: "linear-gradient(#D1E6F9, #FFFFFF)",
        }}
      >
        <div className="box_header" style={{}}>
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
                backgroundColor:
                  activeTab === "home" ? "#2432AE" : "transparent",
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
                backgroundColor:
                  activeTab === "test" ? "#2432AE" : "transparent",
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
        </div>
        <div
          style={{
            position: "relative",
          }}
        >
          <img src={sstc} width="100%" height={700}></img>
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
          <div style={{}}>
            <span style={{ fontSize: 30, fontWeight: "bold" }}>
              Welcome to the Computer Science and Engineering Department of SSTC
            </span>

            <div
              style={{
                width: "100%",
                marginLeft: "3vw",
              }}
            >
              <p
                style={{
                  backgroundImage: "linear-gradient(#D1E6F9, #FFFFFF)",
                  // backgroundColor: "#E5f3fd",
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
          <img
            style={{
              marginLeft: 80,
            }}
            src={sideimg}
          ></img>
        </div>
      </div>
    );
  } else if (activeTab == "test") {
    return (
      <div
        style={{
          overflow: "auto",
          height: "100vh",
          overflowX: "hidden",
          flex: 1,
        }}
      >
        <div className="box_header" style={{}}>
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
                backgroundColor:
                  activeTab === "home" ? "#2432AE" : "transparent",
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
                backgroundColor:
                  activeTab === "test" ? "#2432AE" : "transparent",
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
        </div>
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
                backgroundColor: activeSelectTab ? "#D4D4D4" : "#94B9FF",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
              onClick={() => {
                setActiveSelectTab(false);
              }}
            >
              <div
                style={{
                  marginTop: "1vh",
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  Student
                </span>
              </div>
            </div>

            <div
              style={{
                width: "7vw",
                height: "3vw",
                backgroundColor: activeSelectTab ? "#94b9ff" : "#D4D4D4",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
              onClick={() => {
                setActiveSelectTab(true);
              }}
            >
              <div
                style={{
                  marginTop: "1vh",
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  Admin
                </span>
              </div>
            </div>
          </div>

          {activeSelectTab ? (
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
                <br></br>Enter Admin Password : <br></br>
              </text>
              <input
              onChange={handleInputPwd}
                style={{
                  height: "8vh",
                  width: "30vw",
                  backgroundColor: "white",
                  marginLeft: "1vw",
                  marginTop: "5vh",
                  borderRadius: 10,
                  fontSize: 22,
                  textAlign: "center",
                  borderWidth: "0rem",
                }}
              ></input>
              <text>
                <br></br>
              </text>
              <button
                style={{
                  marginTop: "10vh",
                  height: "5vh",
                  width: "7vw",
                  color: "white",
                  backgroundColor: "white",
                  borderRadius: "2rem",
                  borderWidth: "0rem",
                }}
                onClick={() => {
                 tryLogin(inputPwd).then((value) => {
                  if(value === true) {
                    navigate("/testseries/admin")
                  }
                  else {
                    alert("Wrong Password For Admin.")
                  }
                 })
                }}
              >
                <text
                  style={{
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Login
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
                <br></br>Enter Your Roll Number :<br></br>
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
                  borderWidth: "0rem",
                }}
              ></input>

              <text>
                <br></br>
              </text>

              <button
                style={{
                  marginTop: "10vh",
                  height: "5vh",
                  width: "7vw",
                  color: "white",
                  backgroundColor: "white",
                  borderRadius: "3rem",
                  borderWidth: "0rem",
                }}
                onClick={() => {
                  navigate("testseries");
                }}
              >
                <text
                  style={{
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Start Test
                </text>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  } else if (activeTab == "faculty") {
    return (
      <div
        style={{
          overflow: "auto",
          height: "100vh",
          overflowX: "hidden",
          flex: 1,
          backgroundColor: "#D1E6F9",
        }}
      >
        <div className="box_header" style={{}}>
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
                backgroundColor:
                  activeTab === "home" ? "#2432AE" : "transparent",
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
                backgroundColor:
                  activeTab === "test" ? "#2432AE" : "transparent",
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
        </div>
        <text>FACULTY</text>
      </div>
    );
  } else if (activeTab == "access") {
    return (
      <div
        style={{
          overflow: "auto",
          height: "100vh",
          overflowX: "hidden",
          flex: 1,
          backgroundColor: "#D1E6F9",
        }}
      >
        <div className="box_header" style={{}}>
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
                backgroundColor:
                  activeTab === "home" ? "#2432AE" : "transparent",
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
                backgroundColor:
                  activeTab === "test" ? "#2432AE" : "transparent",
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
        </div>
        <text>ACCESS</text>
      </div>
    );
  }
}
