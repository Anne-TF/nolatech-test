import {IEmployee} from '@modules/Employees/infrastructure/interfaces';
import {FormatDate} from '@common/utils';
import {Button} from '@common/components';
import {RiEditLine, RiEye2Line} from '@remixicon/react';

interface Props {
    employee: IEmployee;
    gridVersion: boolean;
}

export const EmployeeItemForTable = ({ employee, gridVersion }: Props) => {
    const keys = ['lastName', 'email', 'position'];

    return (
        <>
            {gridVersion && (
                <div
                    className="flex flex-row bg-neutral-50 dark:!bg-neutral-900 col-span-12 rounded-lg md:col-span-4 p-4 border-b dark:border-app-accent text-gray-700 dark:text-neutral-300">
                    <img
                        src={employee.img}
                        alt="avatar"
                        className="w-20 h-4/5 rounded-md object-cover"
                    />
                    <div className="w-full pl-3 flex flex-wrap">
                        <div className="w-full flex gap-4">
                            <p className="text-sm font-medium h-auto">
                                            <span
                                                className="text-semi-bold">First name</span>
                                <br/>
                                {employee.firstName}
                            </p>

                            <p className="text-sm font-medium h-auto">
                                            <span
                                                className="text-semi-bold">Last name</span>
                                <br/>
                                {employee.lastName}
                            </p>
                        </div>
                        <p className="text-sm font-medium w-full sm:w-3/6 md:w-full mt-3">
                                            <span
                                                className="text-semi-bold">Email</span>
                            <br/>
                            {employee.email}
                        </p>
                        <p className="text-sm font-medium w-full sm:w-3/6 md:w-full mt-3">
                                            <span
                                                className="text-semi-bold">Position</span>
                            <br/>
                            {employee.position}
                        </p>
                        <p className="text-sm font-medium w-full sm:w-3/6 md:w-full mt-3">
                                            <span
                                                className="text-semi-bold">Date hired</span>
                            <br/>
                            {FormatDate(employee.dateHired, 'MM/DD/YYYY')}
                        </p>

                        <div className="flex justify-end gap-3 w-full">
                            <Button
                                icon={<RiEditLine size={18}/>}
                                customClassName="dark:!bg-app-accent hover:dark:!bg-neutral-800 bg-slate-100 hover:bg-slate-200 rounded-lg p-2 text-bold"
                                typeButton="button">
                            </Button>

                            <Button
                                icon={<RiEye2Line size={18}/>}
                                customClassName="dark:!bg-app-accent hover:dark:!bg-neutral-800 bg-slate-100 hover:bg-slate-200 rounded-lg p-2 text-bold"
                                typeButton="button">
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {!gridVersion && (
                <tr className="border-b dark:border-app-accent text-gray-900 dark:text-neutral-200">
                    <td className="px-4 py-4 whitespace-nowrap font-medium flex items-center gap-3">
                        <img
                            src={employee.img}
                            alt="avatar"
                            className="w-9 h-9 rounded-full object-cover"
                        />
                        {employee.firstName}
                    </td>
                    {keys.map((key) => {
                        return (
                            <td key={key} className="px-4 py-4 whitespace-nowrap font-medium">
                                {employee[key as keyof IEmployee]}
                            </td>
                        );
                    })}

                    <td className="px-4 py-4 whitespace-nowrap font-medium">
                        {FormatDate(employee.dateHired, 'MM/DD/YYYY')}
                    </td>

                    <td className="px-4 py-4 space-x-2">
                        <Button
                            icon={<RiEditLine size={18}/>}
                            customClassName="dark:!bg-app-accent hover:dark:!bg-neutral-800 bg-slate-100 hover:bg-slate-200 rounded-lg p-2 text-bold"
                            typeButton="button">
                        </Button>

                        <Button
                            icon={<RiEye2Line size={18}/>}
                            customClassName="dark:!bg-app-accent hover:dark:!bg-neutral-800 bg-slate-100 hover:bg-slate-200 rounded-lg p-2 text-bold"
                            typeButton="button">
                        </Button>
                    </td>
                </tr>
            )}
        </>
    )
}