import {useEffect, useState} from 'react';
import {IEmployee} from '@modules/Employees/infrastructure/interfaces';
import {ListEmployeesUseCase} from '@modules/Employees/domain/useCases';
import {Button, Pagination, Spinner, Table} from '@common/components';
import {IPagination, ITableColum} from '@common/interfaces';
import {FormatDate} from '@common/utils';
import {RiEditLine, RiEye2Line, RiMenu2Line} from '@remixicon/react';
import {EmployeeItemForTable} from '@modules/Employees/presentation/componets/EmployeeItemForTable.tsx';

export const EmployeesTable = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [employees, setEmployees] = useState<IEmployee[]>([]);
    const [pagination, setPagination] = useState<IPagination | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const columns: ITableColum[] = [
        {
            name: 'First name',
            sortable: false,
            value: 'firstName'
        },
        {
            name: 'Last name',
            sortable: false,
            value: 'lastName'
        },
        {
            name: 'Email',
            sortable: false,
            value: 'email'
        },
        {
            name: 'Position',
            sortable: false,
            value: 'position'
        },
        {
            name: 'Date hired',
            sortable: false,
            value: 'dateHired'
        }
    ]

    const getEmployees = async (page: number) => {
        setLoading(true);
        setTimeout(async () => {
            const { data, ...pagination } = await ListEmployeesUseCase.handler(page, 8);
            setCurrentPage(page);
            setLoading(false);
            setEmployees(data);
            setPagination(pagination);
        }, 2000);
    }

    useEffect(() => {
        (async () => {
            await getEmployees(currentPage);
        })();

        return () => {
            setEmployees([]);
        }
    }, []);
    return (
        <>
            <Table
                tableClasses="!rounded-b-lg bg-neutral-50 dark:!bg-neutral-900"
                includeActions
                gridClasses="gap-3"
                cards={
                    !loading && employees.map((employee) => {
                        return (
                            <EmployeeItemForTable gridVersion employee={employee} key={employee.id} />
                        )
                    })
                }
                columns={columns}>
                {!loading && employees.map((employee) => {
                    return (
                        <EmployeeItemForTable employee={employee} gridVersion={false} key={employee.id} />
                    )
                })}
            </Table>

            {loading && (
                <div className="flex justify-center items-center w-5/6absolute h-[500px]">
                    <Spinner
                        spinnerColor="#fff"
                        loaderColor="#e5e5e5"
                    />
                </div>)}

            {pagination && (
                <Pagination
                    pagination={pagination}
                    onPageChange={(nextPage) => {
                        getEmployees(nextPage);
                    }}
                    currentPage={currentPage}
                    perPage={10}
                    resultsInPage={employees.length}
                />
            )}
        </>
    );
}