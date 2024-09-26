interface Evaluation {
    id: number;
    date: string;
    type: string;
    status: string;
    result: string;
}

export interface IEmployee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    position: string;
    img: string;
    department: string;
    salary: number;
    age: number;
    dateHired: string;
    typeJob: string;
    status: string;
    evaluations: Evaluation[];
}