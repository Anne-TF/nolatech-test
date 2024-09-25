interface Props {
    employee: {
        name: string;
        img: string;
        date: string;
        evaluation: string;
        position: string;
        result: string;
    };
}

export const EmployeeItem = ({ employee }: Props) => {
return (
    <div className="flex w-full flex-wrap gap-3 items-start text-app-secondary dark:!text-white">
        <img height="auto" width="auto" className="w-12 h-12 object-cover rounded-full" src={employee.img} alt={employee.name}/>
        <div className="w-9/12 text-inter-regular break-words">
            <h6 className="text-bold text-base md:text-lg">{employee.name}</h6>
            <p className="text-sm md:text-base text-gray-500 dark:!text-slate-200">Position: {employee.position}</p>
            <p className="text-sm md:text-base text-gray-500 dark:!text-slate-200">Evaluation: {employee.evaluation}</p>
            <p className="text-sm md:text-base text-gray-500 dark:!text-slate-200">Result: <span className="text-app-primary">{employee.result}</span></p>
        </div>
    </div>
)
}