import IQuestion from "../../models/IQuestion";

export default interface IQuestionsState {
    questions: IQuestion[];
    currentQuestion: IQuestion | null;
    currentQuestionIndex: number;
    currentQuestionAnswer: string;
    isLastQuestion: number;
    isAnswered: boolean;
}
