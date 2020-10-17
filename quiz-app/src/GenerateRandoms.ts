import IQuestion from './models/IQuestion';

export const createQuiz = (iQuestions: IQuestion[]): IQuestion[] => {
    let questions: IQuestion[] = new Array<IQuestion>();

    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    for (let n = 1; n <= 5; ++n) {
        let i = Math.floor((Math.random() * (20 - n)) + 1);
        questions.push(iQuestions[i]);
        a[i] = a[20 - n];
    }
    return questions;
}

export const shuffleOptions = (orgOptions: String[]): String[] => {
    const options: String[] = orgOptions;
    console.log(options)
    let currentIndex = orgOptions.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = options[currentIndex];
        options[currentIndex] = options[randomIndex];
        options[randomIndex] = temporaryValue;
    }
    return options;
}
