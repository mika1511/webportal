import { stripBasename } from "@remix-run/router";
import { LayoutGroup } from "framer-motion";
import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import "./onlineTestPage.css";
import HomeIcon from "../homeicon.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import axios from "axios";

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

const saveQuestions = async (questions) => {
  try {
    const response = await axios.post('http://127.0.0.1:8080/save_questions', {questions});
    if (response.status === 200) {
      // Handle a successful response
      console.log('Questions saved successfully');
    } else {
      // Handle an error response
      console.error('Error saving questions');
    }
  } catch (error) {
    // Handle network or other errors
    console.error('Error saving questions:', error);
  }
};

const activeTabHandler = function (tab) {
  if (tab === "createatest") {
    return <CreateATest></CreateATest>;
  }
};

document.querySelector(":root").style.fontSize = "62.5%";

const QuizNameInput = ({ onCreate }) => {
  const [quizName, setQuizName] = useState("");

  const handleCreateClick = () => {
    if (quizName.trim() !== "") {
      onCreate(quizName);
    }
  };

  return (
    <div
      style={{
        display: "grid",
      }}
    >
      <div
        style={{
          marginLeft: "50rem",
          marginTop: "10rem",
          height: "16rem",
          width: "60rem",
          backgroundColor: "white",
          boxShadow: "1px 2px 10px grey",
          borderRadius: "1rem",
          marginBottom: "2rem",
          borderWidth: "0rem",
        }}
      >
        <span
          style={{
            fontSize: "2.1rem",
            fontWeight: "bold",
          }}
        >
          PLEASE ENTER A QUIZ NAME
        </span>
        <input
          type="text"
          placeholder="Enter Quiz Name"
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
          style={{
            textAlign: "center",
            marginLeft: "-1rem",
            marginTop: "3rem",
            borderWidth: "0rem",
            fontSize: "2rem",
            width: "90%",
            height: "30%",
          }}
        ></input>
        <button
          style={{
            height: "3rem",
            width: "12rem",
            outlineColor: "white",
            borderWidth: "0rem",
            fontWeight: "bold",
            marginTop: "1.1rem",
            borderRadius: "10rem",
            backgroundColor: "lightblue",
            // marginRight: "45rem",
          }}
          onClick={handleCreateClick}
        >
          CREATE A QUIZ
        </button>
      </div>
    </div>
  );
};

const CreateATest = function () {
  const [quizName, setQuizName] = useState("");
  const handleQuizCreate = (name) => {
    setQuizName(name);
  };

  const [questions, setQuestions] = useState([
    {
      quest: "",
      options: [
        { opt: "", isCorrect: false },
        { opt: "", isCorrect: false },
        { opt: "", isCorrect: false },
        { opt: "", isCorrect: false },
      ],
      correctOpt: "op1",
    },
  ]);

  const handleQuestionTextChange = (text, questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].quest = text;
    setQuestions(updatedQuestions);
  };

  const handleOptionTextChange = (text, questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex].opt = text;
    setQuestions(updatedQuestions);
  };

  const handleOptionSelect = (selectedOption, questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].correctOpt = selectedOption;
    setQuestions(updatedQuestions);
  };

  const canAddQuestion = (questionIndex) => {
    const currentQuestion = questions[questionIndex];
    return (
      currentQuestion.quest.trim() !== "" &&
      currentQuestion.options.every((option) => option.opt.trim() !== "")
    );
  };


  const addQuestion = () => {
    const lastIndex = questions.length - 1;

    if (lastIndex >= 0 && !canAddQuestion(lastIndex)) {
      alert("Please fill the questions.");
      return;
    }

    setQuestions((prevQuestions) => [
      ...prevQuestions,
      {
        quest: "",
        options: [
          { opt: "", isCorrect: false },
          { opt: "", isCorrect: false },
          { opt: "", isCorrect: false },
          { opt: "", isCorrect: false },
        ],
        correctOpt: "op1",
      },
    ]);
    console.log(questions[lastIndex]);
    saveQuestions(questions[lastIndex]);

  };

  const done_making_test = () => {
    if (!quizName) {
      alert("Quiz name is required before saving.");
      return;
    }
    addQuestion()
    axios.post(`http://127.0.0.1:8080/done_making_test/${quizName}`)
      .then((response) => {
        if (response.status === 200) {
          // Handle successful saving
          console.log(`Questions saved to ${quizName}.json successfully`);
          // You can also clear the quizName and questions state if needed
          setQuizName("");
          setQuestions([
            {
              quest: "",
              options: [
                { opt: "", isCorrect: false },
                { opt: "", isCorrect: false },
                { opt: "", isCorrect: false },
                { opt: "", isCorrect: false },
              ],
              correctOpt: "op1",
            },
          ]);
        } else {
          // Handle saving error
          console.error('Error saving questions');
        }
      })
      .catch((error) => {
        console.error('Error saving questions:', error);
      });
  };

  const removeQuestion = (questionIndex) => {
    if (questions.length === 1) {
      alert("You can't remove the last question.");
      return;
    }
    const updatedQuestions = [...questions];
    updatedQuestions.splice(questionIndex, 1);

    setQuestions(updatedQuestions);
    axios.delete('http://127.0.0.1:8080/remove_question', { data: { index: questionIndex } })
    .then((response) => {
      if (response.status === 200) {
        console.log('Question removed from backend successfully');
      } else {
        console.error('Error removing question from backend');
      }
    })
    .catch((error) => {
      console.error('Error removing question from backend:', error);
    });
  };

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      {quizName ? (
        <div>
          <h1
            style={{
              fontStyle: "italic",
            }}
          >
            Quiz Name: {quizName}
          </h1>
          {questions.map((question, questionIndex) => (
            <div
              key={questionIndex}
              style={{
                marginLeft: "30rem",
                marginTop: "5rem",
                height: "40rem",
                width: "90rem",
                backgroundColor: "white",
                boxShadow: "1px 2px 10px grey",
                borderRadius: "3rem",
                marginBottom: "2rem",
              }}
            > 

              {/* {isShown && (
                <div 
                style={{
                  backgroundColor: "black",
                  height: "3rem",
                  width: "7rem",
                }}> 

                </div>
              )} */}
              <span
                style={{
                  fontSize: "1.9rem",
                  fontWeight: "bold",
                }}
              >
                {questionIndex + 1 + "\t\t"}
              </span>

              <input
                //onMouseEnter={setIsShown(true)}
                //onMouseLeave={setIsShown(false)}
                placeholder="Question..."
                className="qna_container"
                style={{
                  borderColor: "white",
                  fontSize: "2rem",
                  marginTop: "4rem",
                }}
                value={question.quest}
                onChange={(e) =>
                  handleQuestionTextChange(e.target.value, questionIndex)
                }
              />
              <div
                style={{
                  marginLeft: "90%",
                  marginTop: "-5.2rem",
                }}
              >
                <button
                  className="cross_button"
                  onClick={() => removeQuestion(questionIndex)}
                  style={{
                    color: "white",
                    height: "2.5rem",
                    width: "2.5rem",
                    fontWeight: "bold",
                    borderWidth: "0rem",
                    borderRadius: "0.3rem",
                  }}
                >
                  X
                </button>
              </div>
              <div
                style={{
                  marginTop: "4.2rem",
                }}
              ></div>

              {question.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  style={{
                    display: "flex",
                  }}
                >
                  <Radio
                    size="large"
                    value={`op${optionIndex + 1}`}
                    onChange={() =>
                      handleOptionSelect(`op${optionIndex + 1}`, questionIndex)
                    }
                    checked={question.correctOpt === `op${optionIndex + 1}`}
                    style={{
                      marginTop: "2.5rem",
                      marginLeft: "3.5rem",
                    }}
                  />
                  <input
                    placeholder={`Option ${optionIndex + 1}...`}
                    className="qna_container"
                    style={{
                      borderColor: "white",
                      fontSize: "2rem",
                      marginTop: "3rem",
                    }}
                    value={option.opt}
                    onChange={(e) =>
                      handleOptionTextChange(
                        e.target.value,
                        questionIndex,
                        optionIndex
                      )
                    }
                  />
                </div>
              ))}
            </div>
          ))}

          <button
            className="add_button"
            onClick={addQuestion}
            style={{
              
            }}
          >
            Add Question
          </button>

          <button
            className="save_button"
            onClick={ () => {done_making_test()}}
          >
            Save as Draft
          </button>
        </div>
      ) : (
        <QuizNameInput onCreate={handleQuizCreate} />
      )}
    </div>
  );
};

// const questionType = {
//   String,
//   String,
//   String,
//   String,
//   String,
//   String,
// };

export default function OnlineTestSeries() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  const navigation = useNavigate();

  return (
    <div
      style={{
        overflow: "auto",
        overflowX: "hidden",
        flex: 1,
        display: "flex",
        height: "100vh",
        backgroundColor: "#dcdcdc",
      }}
    >
      <div
        style={{
          width: "22rem",
          height: "100vh",
          backgroundColor: "#94B9FF",
          position: "fixed",
          // backgroundImage: "linear-gradient(#94B9FF, #FFFFFF)",
        }}
      >
        <img
          src={HomeIcon} alt=""
          width="90rem"
          height="90rem"
          onClick={() => {
            navigation("/");
          }}
          style={{
            marginTop: "4rem",
          }}
        ></img>
        <div
          className="sidebar_container"
          style={{
            marginTop: "5rem",
            overflow: "hidden",
            backgroundColor: activeTab === "dashboard" ? "#092c58" : "#94B9FF",
          }}
          onClick={() => {
            handleClick("dashboard");
          }}
        >
          <div
            style={{
              marginTop: "0.5rem",
            }}
          ></div>
          <span
            style={{
              fontSize: "1.8rem",
              color: "white",
              marginLeft: "1rem",
            }}
          >
            DASHBOARD
          </span>
        </div>
        <div
          className="sidebar_container"
          style={{
            //marginTop: "2vh",
            overflow: "hidden",
            backgroundColor: activeTab === "results" ? "#092c58" : "#94B9FF",
          }}
          onClick={() => {
            handleClick("results");
          }}
        >
          <div
            style={{
              marginTop: "0.5rem",
            }}
          ></div>
          <span
            style={{
              fontSize: "1.8rem",
              color: "white",
              marginLeft: "1rem",
            }}
          >
            PUBLISH
          </span>
        </div>

        <div
          className="sidebar_container"
          style={{
            //marginTop: "2vh",
            overflow: "hidden",
            backgroundColor:
              activeTab === "createatest" ? "#092c58" : "#94B9FF",
          }}
          onClick={() => {
            handleClick("createatest");
          }}
        >
          <div
            style={{
              marginTop: "0.5rem",
            }}
          ></div>
          <span
            style={{
              fontSize: "1.8rem",
              color: "white",
              marginLeft: "1rem",
            }}
          >
            CREATE A TEST
          </span>
        </div>

        <div
          className="sidebar_container"
          style={{
            //marginTop: "2vh",
            overflow: "hidden",
            backgroundColor: activeTab === "seeresults" ? "#092c58" : "#94B9FF",
          }}
          onClick={() => {
            handleClick("seeresults");
          }}
        >
          <div
            style={{
              marginTop: "0.5rem",
            }}
          ></div>
          <span
            style={{
              fontSize: "1.8rem",
              color: "white",
              marginLeft: "1rem",
            }}
          >
            SEE RESULTS
          </span>
        </div>
      </div>
      {activeTabHandler(activeTab)}
    </div>
  );
}
