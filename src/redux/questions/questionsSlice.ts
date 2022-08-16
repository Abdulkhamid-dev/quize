import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAllQuestions, IQuestion } from "../../interfaces";
import { RootState } from "../store";

const initialState: IAllQuestions = {
  all_questions: [],
  userInfo: {
    default_question: {
      id: 0,
      category: "",
      type: "",
      difficulty: "",
      question: "",
      correct_answer: "",
      incorrect_answers: [""],
      isAnswered: "",
    },
    correct_answers: 0,
    hasFinished: false,
  },
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    storeQuestion(state, action: PayloadAction<IQuestion[]>) {
      state.all_questions = action.payload;
    },
    storeCurrentQuestion(state, action: PayloadAction<IQuestion>) {
      state.userInfo.default_question = action.payload;
    },
    removeQuestions(state) {
      state.all_questions = [];
      state.userInfo = {default_question: {
      id: 0,
      category: "",
      type: "",
      difficulty: "",
      question: "",
      correct_answer: "",
      incorrect_answers: [""],
      isAnswered: "",
    },
    correct_answers: 0,
    hasFinished: false,}
    },
    incrementScore(state) {
      state.userInfo.correct_answers = state.userInfo.correct_answers + 1;
    },
    finishTest(state) {
      state.userInfo.hasFinished = true;
    },
  },
});

export const selectState = (state: RootState) => state;

export const { storeQuestion, removeQuestions, storeCurrentQuestion, finishTest, incrementScore} =
  questionSlice.actions;
export default questionSlice.reducer;
