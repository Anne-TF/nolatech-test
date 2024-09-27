import {FormatDate} from '@common/utils';
import {Button} from '@common/components';
import {RiEditLine, RiEye2Line} from '@remixicon/react';
import {IEvaluationForm} from '@modules/EvaluationForms/infrastructure/interfaces';

interface Props {
    form: IEvaluationForm;
    gridVersion: boolean;
}

export const EvaluationFormItemForTable = ({ form, gridVersion }: Props) => {
    const keys = ['name', 'type'];

    const GetStatusDot = (status: string) => {
        return (
            <span className={`w-2 h-2 ml-2 inline-block rounded-full ${status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`} />
        );
    }

    return (
        <>
            {gridVersion && (
                <div
                    className="flex flex-row bg-neutral-50 dark:!bg-neutral-900 col-span-12 rounded-lg md:col-span-4 p-4 border-b dark:border-app-accent text-gray-700 dark:text-neutral-300">
                    <div className="w-full pl-3 flex flex-wrap">
                        <p className="text-sm font-medium sm:w-3/6 md:w-full h-auto">
                          <span className="text-semi-bold">Name</span>
                            <br/>
                            {form.name}
                        </p>
                        <p className="text-sm font-medium w-full sm:w-3/6 md:w-full mt-3 sm:mt-0 md:mt-3">
                            <span className="text-semi-bold">Type</span>
                            <br/>
                            {form.type}
                        </p>
                        <p className="text-sm font-medium w-full sm:w-3/6 md:w-full mt-3">
                            <span className="text-semi-bold">Creation date</span>
                            <br/>
                            {FormatDate(form.dateCreated, 'MM/DD/YYYY')}
                        </p>
                        <p className="text-sm font-medium w-full sm:w-3/6 md:w-full mt-3">
                            <span className="text-semi-bold">Status</span>
                            <br/>
                            {form.status} {GetStatusDot(form.status)}
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
                    {keys.map((key) => {
                        return (
                            <td key={key} className="px-4 py-4 whitespace-nowrap font-medium">
                                {form[key as keyof IEvaluationForm]}
                            </td>
                        );
                    })}

                    <td className="px-4 py-4 whitespace-nowrap font-medium">
                        {FormatDate(form.dateCreated, 'MM/DD/YYYY')}
                    </td>

                    <td className="px-4 py-4 whitespace-nowrap font-medium">
                        {form.status} {GetStatusDot(form.status)}
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