import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomeScreen from './component/home';
import sstclogo from "./sstclogo.png";
import searchlogo from "./searchlogo.png";
import sstc from "./sstc.png";
import "./component/home.css";
import sideimg from "./sideimg.png";
import { motion } from "framer-motion";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import OnlineTestSeries from './component/onlineTestPage';
import { useNavigate } from 'react-router-dom';
import StdTestSeries from './component/stdTestPage';

const NavBar = () => {
  const [activeTab, setActiveTab] = useState(null);
  const location = useLocation(); // Access current URL
  const navigate = useNavigate();
  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    
    if (location.pathname === '/') {
      setActiveTab('home');
    } else if (location.pathname === '/faculty') {
      setActiveTab('faculty');
    } else if (location.pathname === '/OnlineTest') {
      setActiveTab('test');
    } else if (location.pathname === '/access') {
      setActiveTab('access');
    }
  }, [location.pathname]);
  
  return (
    <div
      style={{
        overflow: "auto",
        overflowX: "hidden",
        overflowY: "hidden",
        //position: "static",
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
              backgroundColor: activeTab === "home" ? "#2432AE" : "transparent",
              padding: "5px 10px",
              borderRadius: 5.456,
            }}
            onClick={() =>{
               handleClick("home");
               navigate("/")
            }}
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
              borderRadius: 5.456,
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
              borderRadius: 5.456,
            }}
            onClick={() =>  {
              handleClick("test");
              navigate("/OnlineTest");
            }}
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
              borderRadius: 5.456,
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
    </div>
  )
}
function App() {
  return (
    
    <Router>
      <div className="App">
      {/* <NavBar /> */}
        <Routes>
          <Route exact path="/" Component={HomeScreen}/>
          <Route exact path="testseries/admin" Component={OnlineTestSeries}/>
          <Route exact path="testseries" Component={StdTestSeries} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;