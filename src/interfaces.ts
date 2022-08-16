export interface IRoute {
  path: string;
  component: JSX.Element;
  key: string;
}

export interface IForm {
  count: number;
  category: number;
}

export interface IQuestion {
  id: number;
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: [string];
}

export interface IUserScore {
  default_question: IQuestion;
  correct_answers: number;
  incorrect_answers: number;
}
export interface IAllQuestions {
  all_questions: IQuestion[];
  userInfo: IUserScore;
}
