import React, { useRef, useState, useEffect } from "react";
import sstclogo from "./../sstclogo.png";
import searchlogo from "./../searchlogo.png";
import sstc from "./../sstc.png";
import TestImage from "./../testseriesimg.jpg";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faHouse,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import sideimg from "./../sideimg.png";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import white from "./../white.jpg";

async function tryLogin(passwd) {
  try {
    const res = await axios.post("http://127.0.0.1:8080/login", {
      pwd: passwd,
    });

    return true;
  } catch (error) {
    return error;
  }
}

// async function LoginFx(passwd) {
//   const res = await tryLogin(passwd);
//   if (res) {
//     return true;
//   }
//   return false;
// }

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
  const [isShown, setIsShown] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // useEffect(() => {
  //   const text = "WELCOME TO SSTC";
  //   let i = 0;

  //   const typeText = () => {
  //     if (i < text.length) {
  //       setTypingText((prevText) => prevText + text.charAt(i));
  //       i++;
  //     } else {
  //       setIsTypingComplete(true);
  //     }
  //   };

  //   const typingInterval = setInterval(typeText, 100);

  //   return () => {
  //     clearInterval(typingInterval);
  //   };
  // }, []);

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

  const slideRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  const data = [
    {
      id: 1,
      imgUrl:
        "https://i.postimg.cc/RVm59Gqy/pexels-roberto-nickson-2559941.jpg",
      desc: "Some beautiful roads cannot be discovered without getting lost.",
      name: "CAREER",
    },
    {
      id: 2,
      imgUrl: sstc,
      desc: "The Computer Science & Engineering Department welcomes you",
      name: "WELCOME TO SSTC",
    },
    {
      id: 3,
      imgUrl:
        "https://i.postimg.cc/bw6KxhLf/pexels-eberhard-grossgasteiger-1062249.jpg",
      desc: "Some beautiful roads cannot be discovered without getting lost.",
      name: "FACULTY",
    },
    {
      id: 4,
      imgUrl: TestImage,
      desc: "Some beautiful roads cannot be discovered without getting lost.",
      name: "ONLINE TEST SERIES",
    },
    {
      id: 5,
      imgUrl: "https://i.postimg.cc/6qdkn4bM/pexels-joyston-judah-933054.jpg",
      desc: "Some beautiful roads cannot be discovered without getting lost.",
      name: "COURSES",
    },
  ];

  if (activeTab === "home") {
    return (
      <div
        style={{
          overflow: "auto",
          overflowX: "hidden",
          flex: 1,
          backgroundImage: "#fff",
        }}
      >
        <div className="box_header" style={{}}>
          <img src={sstclogo} alt="" width={255} height={47} />
          <div
            style={{
              display: "flex",
              margin: "auto",
              justifyContent: "space-between",
              fontSize: 18,
            }}
          >
            <FontAwesomeIcon
              icon={faHouse}
              className="navbar_items"
              style={{
                color: activeTab === "home" ? "white" : "black",
                marginLeft: "30rem",
              }}
              onClick={() => handleClick("home")}
            />

            <span
              className="navbar_items"
              style={{ color: activeTab === "faculty" ? "white" : "black" }}
              onClick={() => handleClick("faculty")}
            >
              𝐅𝐚𝐜𝐮𝐥𝐭𝐲
            </span>

            <span
              className="navbar_items"
              style={{ color: activeTab === "test" ? "white" : "black" }}
              onClick={() => handleClick("test")}
            >
              𝐎𝐧𝐥𝐢𝐧𝐞 𝐓𝐞𝐬𝐭 𝐒𝐞𝐫𝐢𝐞𝐬
            </span>

            <span
              className="navbar_items"
              style={{ color: activeTab === "access" ? "white" : "black" }}
              onClick={() => handleClick("access")}
            >
              𝐐𝐮𝐢𝐜𝐤 𝐀𝐜𝐜𝐞𝐬𝐬
            </span>

            <FontAwesomeIcon
              className="navbar_items"
              icon={faSearch}
              width={50}
              height={50}
            />
          </div>
        </div>
        <div className="container">
          <div
            className="loadbar"
            style={{ width: `${loadingProgress}%` }}
          ></div>
          <div id="slide" ref={slideRef}>
            {data.map((item) => (
              <div
                key={item.id}
                className="item"
                style={{ backgroundImage: `url(${item.imgUrl})` }}
              >
                {" "}
                <span className="smalldes">{item.name}</span>
                <div className="content">
                  <div className="name">{item.name}</div>
                  <div className="des">{item.desc}</div>
                  <button
                    style={{ backgroundColor: "inherit", color: "inherit" }}
                  >
                    See more...
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="buttons">
            <button id="prev" onClick={handleClickPrev}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button id="next" onClick={handleClickNext}>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>
        <div height={"95vh"} width={"100vw"}>
          <img className="white" src={white} alt="" />
        </div>
        <br />
        <span
          style={{
            color: "#242526",
            fontSize: 18,
            marginTop: "95vh",
            marginLeft: "-77vw",
          }}
        >
          Software | Technology | Excellence
        </span>
        <br />
        <br />
        <div
          style={{ width: "50vw", marginLeft: "-1rem", flexDirection: "row" }}
        >
          <span
            style={{
              color: "#000",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Welcome To Computer Science and Engineering Department of SSTC
          </span>
        </div>
        <div style={{ display: "flex" }}>
          <br />
          <div className="info2">
            <text
              className="dot"
              style={{ color: "grey", marginLeft: "-43vw", fontSize: "16px" }}
            >
              ●
            </text>
            <div
              style={{
                paddingLeft: "28px",
                paddingRight: "28px",
                paddingBottom: "28px",
                paddingTop: "5px",
              }}
            >
              <text
                className="info2-text"
                
              >
                The department of Computer Science and Engineering at the Shri
                shankaracharya technical campus promotes innovation-centric
                education and performs cutting-edge research. The department
                continuously endeavors to create and sustain an academic
                environment conducive to the highest level of research and
                teaching. The goal is to develop human resources with sound
                knowledge of theoretical, systems, and application aspects of
                Computer Science & Engineering. The department also facilitates
                the development of academia-industry collaborations and societal
                outreach activities.
              </text>
            </div>
          </div>

          <img className="sideimg" src={sideimg} alt="" />
        </div>
      </div>
    );
  } else if (activeTab === "test") {
    return (
      <div
        style={{
          overflow: "auto",
          height: "100vh",
          overflowX: "hidden",
          flex: 1,
          backgroundColor: "rgba(34,61,97,0.39)",
        }}
      >
        <div className="box_header" style={{}}>
          <img src={sstclogo} alt="" width={255} height={47} />

          <div
            style={{
              display: "flex",
              margin: "auto",
              justifyContent: "space-between",
              fontSize: 18,
            }}
          >
            <FontAwesomeIcon
              icon={faHouse}
              className="navbar_items"
              style={{
                color: activeTab === "home" ? "white" : "black",
                marginLeft: "50rem",
              }}
              onClick={() => handleClick("home")}
            />

            <span
              className="navbar_items"
              style={{ color: activeTab === "faculty" ? "white" : "black" }}
              onClick={() => handleClick("faculty")}
            >
              𝐅𝐚𝐜𝐮𝐥𝐭𝐲
            </span>

            <span
              className="navbar_items"
              style={{ color: activeTab === "test" ? "white" : "black" }}
              onClick={() => handleClick("test")}
            >
              𝐎𝐧𝐥𝐢𝐧𝐞 𝐓𝐞𝐬𝐭 𝐒𝐞𝐫𝐢𝐞𝐬
            </span>

            <span
              className="navbar_items"
              style={{ color: activeTab === "access" ? "white" : "black" }}
              onClick={() => handleClick("access")}
            >
              𝐐𝐮𝐢𝐜𝐤 𝐀𝐜𝐜𝐞𝐬𝐬
            </span>

            <FontAwesomeIcon
              className="navbar_items"
              icon={faSearch}
              width={50}
              height={50}
            />
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
                    if (value === true) {
                      navigate("/testseries/admin");
                    } else {
                      alert("Wrong Password For Admin.");
                    }
                  });
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
  } else if (activeTab === "faculty") {
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
          <img src={sstclogo} alt="" width={255} height={47} />
          <div
            style={{
              display: "flex",
              margin: "auto",
              justifyContent: "space-between",
              fontSize: 18,
            }}
          >
            <FontAwesomeIcon
              icon={faHouse}
              className="navbar_items"
              style={{
                color: activeTab === "home" ? "white" : "black",
                marginLeft: "50rem",
              }}
              onClick={() => handleClick("home")}
            />

            <span
              className="navbar_items"
              style={{ color: activeTab === "faculty" ? "white" : "black" }}
              onClick={() => handleClick("faculty")}
            >
              𝐅𝐚𝐜𝐮𝐥𝐭𝐲
            </span>

            <span
              className="navbar_items"
              style={{ color: activeTab === "test" ? "white" : "black" }}
              onClick={() => handleClick("test")}
            >
              𝐎𝐧𝐥𝐢𝐧𝐞 𝐓𝐞𝐬𝐭 𝐒𝐞𝐫𝐢𝐞𝐬
            </span>

            <span
              className="navbar_items"
              style={{ color: activeTab === "access" ? "white" : "black" }}
              onClick={() => handleClick("access")}
            >
              𝐐𝐮𝐢𝐜𝐤 𝐀𝐜𝐜𝐞𝐬𝐬
            </span>

            <FontAwesomeIcon
              className="navbar_items"
              icon={faSearch}
              width={50}
              height={50}
            />
          </div>
        </div>
        <text>𝐅𝐚𝐜𝐮𝐥𝐭𝐲</text>
      </div>
    );
  } else if (activeTab === "access") {
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
          <img src={sstclogo} alt="" width={255} height={47} />
          <div
            style={{
              display: "flex",
              margin: "auto",
              justifyContent: "space-between",
              fontSize: 18,
            }}
          >
            <FontAwesomeIcon
              icon={faHouse}
              className="navbar_items"
              style={{
                color: activeTab === "home" ? "white" : "black",
                marginLeft: "50rem",
              }}
              onClick={() => handleClick("home")}
            />

            <span
              className="navbar_items"
              style={{ color: activeTab === "faculty" ? "white" : "black" }}
              onClick={() => handleClick("faculty")}
            >
              𝐅𝐚𝐜𝐮𝐥𝐭𝐲
            </span>

            <span
              className="navbar_items"
              style={{ color: activeTab === "test" ? "white" : "black" }}
              onClick={() => handleClick("test")}
            >
              𝐎𝐧𝐥𝐢𝐧𝐞 𝐓𝐞𝐬𝐭 𝐒𝐞𝐫𝐢𝐞𝐬
            </span>

            <span
              className="navbar_items"
              style={{ color: activeTab === "access" ? "white" : "black" }}
              onClick={() => handleClick("access")}
            >
              𝐐𝐮𝐢𝐜𝐤 𝐀𝐜𝐜𝐞𝐬𝐬
            </span>

            <FontAwesomeIcon
              className="navbar_items"
              icon={faSearch}
              width={50}
              height={50}
            />
          </div>
        </div>
        <text>ACCESS</text>
      </div>
    );
  } else if (activeTab === "signup") {
    return (
      <div
        style={{
          overflow: "auto",
          height: "100vh",
          overflowX: "hidden",
          flex: 1,
          backgroundColor: "#D4D4D4",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            height: "70vh",
            width: "50%",
            marginTop: "15vh",
            marginLeft: "50vh",
            borderRadius: "4rem",
          }}
        >
          <text
            style={{
              fontSize: "2.5rem",
              textAlign: "left",
            }}
          >
            𝓒𝓻𝓮𝓪𝓽𝓮 𝓐𝓷 𝓐𝓭𝓶𝓲𝓷 𝓐𝓬𝓬𝓸𝓾𝓷𝓽
          </text>
          <div
            style={{
              backgroundColor: "#D4D4D4",
              height: 1,
              borderWidth: 1,
            }}
          ></div>

          <div style={{ marginTop: "3rem" }}>
            <span
              style={{
                fontSize: "2rem",
                marginLeft: "-41.5rem",
                fontWeight: "600",
              }}
            >
              Admin's Name
            </span>
          </div>
          <input></input>

          <div style={{ marginTop: "3rem" }}>
            <span
              style={{
                fontSize: "2rem",
                marginLeft: "-36rem",
                fontWeight: "600",
              }}
            >
              Admin's Designation
            </span>
          </div>
          <input style={{}}></input>

          <div style={{ marginTop: "3rem" }}>
            <span
              style={{
                fontSize: "2rem",
                marginLeft: "-38rem",
                fontWeight: "600",
              }}
            >
              Admin's Password
            </span>
          </div>
          <input></input>
          <div style={{ marginTop: "3rem" }}>
            <button onClick={() => handleClick("home")}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
