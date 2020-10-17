import IQuestion from "../models/IQuestion";
import Axios from 'axios';
import { createQuiz } from "../GenerateRandoms";

const fetchQuestions = async (): Promise<IQuestion[]> => {
    let iQuiz: IQuestion[] = await Axios.get('http://localhost:4000/api/questions').then(data => {
        // console.log(data.data.results);
        return createQuiz(data.data.results);
    }).catch(error => {
        console.log(error);
        return error;

    });
    return iQuiz;
}

export default fetchQuestions;
