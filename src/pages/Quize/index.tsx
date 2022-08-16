import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { StyledQuize } from "./Style";
import Swal from "sweetalert2";
import {
  storeCurrentQuestion,
  storeQuestion,
  finishTest,
  incrementScore,
} from "../../redux/questions/questionsSlice";

function Quize() {
  const default_question = useAppSelector(
    (state) => state.question.userInfo.default_question
  );
  const correct_questions = useAppSelector(
    (state) => state.question.userInfo.correct_answers
  );
  const userFinished = useAppSelector(
    (state) => state.question.userInfo.hasFinished
  );

  const checkAnswers = () => {
    const correctAnswers = userFinished ? default_question.correct_answer : "";

    setUserAnswer(correctAnswers);
  };
  const [options, setOptions] = useState<string[]>([]);
  const [userAnswer, setUserAnswer] = useState<string>();
  const isRadioSelcted = (value: string): boolean => userAnswer === value;
  const state = useAppSelector((state) => state.question.all_questions);
  const dispatch = useAppDispatch();

  const getById = (id: number) => {
    let item = state.find((i) => i.id === id);
    if (typeof item !== "undefined") {
      dispatch(storeCurrentQuestion(item));
    }
  };
  const prevQuestion = () => {
    let currentId = default_question.id;
    if (currentId <= 1) {
    } else {
      let prevId = currentId - 1;
      let item = state.find((i) => i.id === prevId);
      if (typeof item !== "undefined") {
        dispatch(storeCurrentQuestion(item));
      }
    }
  };
  const nextQuestion = () => {
    let currentId = default_question.id;
    if (currentId > state.length) {
    } else {
      let prevId = currentId + 1;
      let item = state.find((i) => i.id === prevId);
      if (typeof item !== "undefined") {
        dispatch(storeCurrentQuestion(item));
      }
    }
  };

  const shuffleArr = (arr: string[]) => {
    if (!arr.includes(default_question.correct_answer)) {
      arr = Object.assign([], default_question.incorrect_answers);
      arr.push(default_question.correct_answer);
    }

    function shuffle() {
      arr.sort(() => Math.random() - 0.5);
      setOptions(arr);
    }
    shuffle();
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = () => {
    if (!userAnswer) {
      alert("select answer");
    } else {
      if (userAnswer === default_question.correct_answer) {
        const newArr = state.map((obj) => {
          if (obj.id === default_question.id) {
            return { ...obj, isAnswered: "did" };
          }
          nextQuestion();
          return obj;
        });
        dispatch(storeQuestion(newArr));
        dispatch(incrementScore());
        setUserAnswer("");
      } else {
        const newArr = state.map((obj) => {
          if (obj.id === default_question.id) {
            return { ...obj, isAnswered: "didnt" };
          }
          nextQuestion();
          return obj;
        });
        dispatch(storeQuestion(newArr));
        setUserAnswer("");
      }
    }
  };

  const handleFinish = () => {
    const newArr = state.map((obj) => {
      if (obj.isAnswered === "") {
        return { ...obj, isAnswered: "didnt" };
      }
      if (obj.isAnswered === "did") {
        dispatch(incrementScore());
      }
      Swal.fire(`Your Score is ${correct_questions}/${state.length}`);
      return obj;
    });
    dispatch(storeQuestion(newArr));
    dispatch(finishTest());
  };

  
  useEffect(() => {
    checkAnswers();
  }, [userFinished]);



  useEffect(() => {
    shuffleArr(default_question.incorrect_answers);
    checkAnswers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [default_question]);
  return (
    <StyledQuize>
      <div className="btn_wrapper">
        {state.map((item, index) => {
          return (
            <button
              className="question_btn"
              onClick={() => getById(item.id)}
              style={{
                backgroundColor:
                  item.isAnswered === "did"
                    ? "green"
                    : item.isAnswered === "didnt"
                    ? "red"
                    : item.id === default_question.id
                    ? "blue"
                    : "transparent",
                color:
                  item.isAnswered === "did"
                    ? "white"
                    : item.isAnswered === "didnt"
                    ? "white"
                    : item.id === default_question.id
                    ? "white"
                    : "black",
              }}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <div className="card">
        <div className="card_header">
          <h5>
            {default_question.id}. {default_question?.question}
          </h5>
        </div>
        <div className="card_body">
          <div>
            {options.map((item, index) => {
              return (
                <div className="radio_block">
                  <input
                    type="radio"
                    id={item}
                    name="drone"
                    value={item}
                    checked={isRadioSelcted(item)}
                    onChange={handleRadioChange}
                  />
                  <label htmlFor={item}>{item}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="card_footer">
          <div>
            <button onClick={prevQuestion}>Prev</button>
          </div>
          <div>
            {default_question.isAnswered === "did" ? (
              <button onClick={handleSubmit} disabled>
                Submit
              </button>
            ) : default_question.isAnswered === "didnt" ? (
              <button onClick={handleSubmit} disabled>
                Submit
              </button>
            ) : (
              <button onClick={handleSubmit}>Submit</button>
            )}
          </div>
          <div>
            <button onClick={handleFinish}>Finish</button>
          </div>
          <div>
            <button onClick={nextQuestion}>Next</button>
          </div>
        </div>
      </div>
    </StyledQuize>
  );
}

export default Quize;
