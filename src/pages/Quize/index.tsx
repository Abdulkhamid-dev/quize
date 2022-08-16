import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { StyledQuize } from "./Style";
import { storeCurrentQuestion } from "../../redux/questions/questionsSlice";

function Quize() {
  const default_question = useAppSelector(
    (state) => state.question.userInfo.default_question
  );
  const state = useAppSelector((state) => state.question.all_questions);
  const dispatch = useAppDispatch();

  console.log(default_question);

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
    arr.push(default_question.correct_answer);
    function shuffle() {
      let currentIndex = arr.length,
        randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [arr[currentIndex], arr[randomIndex]] = [
          arr[randomIndex],
          arr[currentIndex],
        ];
      }

      return arr;
    }
    console.log(shuffle());
  };

  useEffect(() => {
    shuffleArr(default_question.incorrect_answers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <StyledQuize>
      <div className="btn_wrapper">
        {state.map((item, index) => {
          return (
            <button className="question_btn" onClick={() => getById(item.id)}>
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
          {/* <fieldset>
            {out.map((item, index) => {
              return (
                <div>
                  <input type="radio" id={item} name="drone" value={item} />
                  <label htmlFor={item}>{item}</label>
                </div>
              );
            })}
          </fieldset> */}
        </div>
        <div className="card_footer">
          <div>
            <button onClick={prevQuestion}>Prev</button>
          </div>
          <div>
            <button>Submit</button>
          </div>
          <div>
            <button onClick={nextQuestion}>Next</button>
          </div>
        </div>
      </div>
      {JSON.stringify(default_question)}
    </StyledQuize>
  );
}

export default Quize;
