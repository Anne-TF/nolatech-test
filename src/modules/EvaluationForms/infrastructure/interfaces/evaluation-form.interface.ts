export interface IEvaluationForm {
    id: number;
    name: string;
    type: string;
    questions: IQuestion[];
    status: string;
    dateCreated: string;
}

export interface IQuestion {
    id: number;
    question: string;
    type: string;
}