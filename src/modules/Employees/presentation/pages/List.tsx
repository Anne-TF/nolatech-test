import {EmployeesTable} from '@modules/Employees/presentation/componets/EmployeesTable.tsx';
import {Button} from '@common/components';

export function List() {

    return (
        <>
            <section className="px-4 md:px-8 pt-6 text-neutral-500 dark:!text-white flex flex-wrap justify-between items-start">
                <div className="w-full mb-4 md:mb-0 md:w-3/5">
                    <h1 className="text-xl mb-2 md:text-2xl">
                        Employees
                    </h1>
                    <p className="text-inter-regular text-app-accent dark:!text-neutral-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus nisi vitae mauris
                        faucibus, ut imperdiet urna aliquet.
                    </p>
                </div>

                <Button
                    customClassName="bg-app-primary-700 w-full md:w-auto hover:dark:!bg-orange-600 bg-slate-100 hover:bg-slate-200 rounded-lg p-3 text-bold"
                    text="Add new employee"></Button>
            </section>
            <section className="px-4 md:px-8 pt-6">
                <div className="dark:!bg-app-accent min-h-[550px] bg-slate-100 p-4 rounded-lg relative">
                    <EmployeesTable />
                </div>
            </section>
        </>

    )
}