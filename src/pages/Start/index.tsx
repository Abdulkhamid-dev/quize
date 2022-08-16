import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyledStartPage } from "../../style";
import { IForm, IQuestion } from "../../interfaces";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";

import {
  storeQuestion,
  removeQuestions,
  storeCurrentQuestion,
  selectState,
} from "../../redux/questions/questionsSlice";

function Start() {
  const store = useAppSelector(selectState);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<IForm>({
    count: 10,
    category: 27,
  });
  const [questions, setQuestions] = useState<any[]>([]);
  let navigate = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const getQuestions = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.get(
        `https://opentdb.com/api.php?amount=${formValues.count}&category=${formValues.category}&difficulty=easy&type=multiple`
      );
      console.log(res);
      setQuestions(res.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const generateId = () => {
    questions.forEach((item, index) => {
      item.id = index + 1;
    });
    console.log(questions);
  };

  console.log(store);
  if (store.question.all_questions.length > 0) {
    navigate("/quize");
  }
  useEffect(() => {
    generateId();
    dispatch(storeQuestion(questions));
    dispatch(storeCurrentQuestion(questions[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions]);
  return (
    <StyledStartPage>
      <form onSubmit={getQuestions}>
        <div className="form_item">
          <label htmlFor="count">Number Of Questions:</label>
          <select id="count" value={formValues.count} onChange={handleInput}>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
          </select>
        </div>
        <div className="form_item">
          <label htmlFor="category">Select Category:</label>
          <select
            id="category"
            value={formValues.category}
            onChange={handleInput}
          >
            <option value="27">Animals</option>
            <option value="21">Sports</option>
            <option value="23">History</option>
          </select>
        </div>
        <button className="start_btn" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Start"}
        </button>
      </form>
    </StyledStartPage>
  );
}

export default Start;
