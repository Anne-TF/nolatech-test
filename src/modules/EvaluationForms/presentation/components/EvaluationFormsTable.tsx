import {useEffect, useState} from 'react';
import {Button, Input, Pagination, Spinner, Table} from '@common/components';
import {IPagination, ITableColum} from '@common/interfaces';
import {RiSearch2Line} from '@remixicon/react';
import {IEvaluationForm, IOptionForSearch} from '@modules/EvaluationForms/infrastructure/interfaces';
import {SearchOption} from '@modules/EvaluationForms/infrastructure/enums/search-option.enum.ts';
import {ListEvaluationFormsUseCase} from '@modules/EvaluationForms/domain/useCases';
import {
    EvaluationFormItemForTable
} from '@modules/EvaluationForms/presentation/components/EvaluationFormItemForTable.tsx';

export const EvaluationFormsTable = () => {
    const optionsForSearch: IOptionForSearch[] = [
        {
            label: 'Name',
            value: SearchOption.NAME
        },
        {
            label: 'Type',
            value: SearchOption.TYPE
        },
    ];

    const [loading, setLoading] = useState<boolean>(true);
    const [search, setSearch] = useState<string>('');
    const [results, setResults] = useState<IEvaluationForm[]>([]);
    const [pagination, setPagination] = useState<IPagination | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchBy, setSearchBy] = useState<SearchOption>(SearchOption.NAME);
    const columns: ITableColum[] = [
        {
            name: 'Name',
            sortable: false,
            value: 'name'
        },
        {
            name: 'Type',
            sortable: false,
            value: 'type'
        },
        {
            name: 'Creation date',
            sortable: false,
            value: 'dateCreated'
        },
        {
            name: 'Status',
            sortable: false,
            value: 'status'
        }
    ]

    const getEvaluationForms = async (page: number) => {
        setLoading(true);
        setTimeout(async () => {
            const { data, ...pagination } = await ListEvaluationFormsUseCase.handler(page, 8, search, [searchBy]);
            setCurrentPage(page);
            setLoading(false);
            setResults(data);
            setPagination(pagination);
        }, 2000);
    }

    useEffect(() => {
        (async () => {
            await getEvaluationForms(currentPage);
        })();

        return () => {
            setResults([]);
        }
    }, []);
    return (
        <>
            <div className="mb-5 mt-2">
                <div className="w-full lg:w-3/6 xl:w-5/12">
                    <Input
                        type="text"
                        name="search"
                        noLabel
                        ariaLabel={`Search evaluation forms by ${searchBy}`}
                        placeholder="Search"
                        showIcon
                        onKeyDown={() => getEvaluationForms(1)}
                        value={search}
                        onChange={(value) => setSearch(value)}
                        className="pl-4 pr-20 relative"
                        icon={
                            <button
                                type="button"
                                className="absolute top-0 h-full right-0"
                                onClick={() => getEvaluationForms(1)}>
                                <RiSearch2Line
                                    size={10}
                                    className="text-slate-100 bg-app-primary-700 px-3 py-2 h-full w-14 rounded-r-md hover:!bg-orange-600"
                                />
                            </button>
                        }
                    />
                    <div className="text-sm text-app-accent mt-3 font-medium md:space-x-2">
                        <span className="text-inter-bold dark:text-slate-200 ">Search By: <br className="block md:hidden" /></span>
                        {optionsForSearch.map((option) => {
                            return (
                                <Button
                                    text={option.label}
                                    customClassName={`border-app-primary-600 ls-1 py-1 mt-3 md:mt-0 mr-2 ${searchBy === option.value ? 'bg-app-primary-700 font-bold text-app-secondary dark:!text-app-accent' : 'text-app-primary-700 dark:text-app-primary '} rounded px-2`}
                                    customOnClick={() => setSearchBy(option.value)}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            {(!loading && results.length > 0) && (
                <Table
                    tableClasses="!rounded-b-lg bg-neutral-50 dark:!bg-neutral-900"
                    includeActions
                    gridClasses="gap-3"
                    cards={
                        !loading && results.map((item) => {
                            return (
                                <EvaluationFormItemForTable gridVersion={true} form={item} key={item.id} />
                            )
                        })
                    }
                    columns={columns}>
                    {!loading && results.map((item) => {
                        return (
                            <EvaluationFormItemForTable form={item} gridVersion={false} key={item.id} />
                        )
                    })}
                </Table>
            )}

            {loading && (
                <div className="flex justify-center items-center h-[550px]">
                    <Spinner
                        spinnerColor="#fff"
                        loaderColor="#e5e5e5"
                    />
                </div>)
            }

            {(search.length > 0 && results.length < 1 && !loading) && (
                <div className="flex flex-col justify-center dark:text-neutral-400 items-center h-[550px]">
                    <h1 className="text-xl mb-4 lg:text-2xl text-center text-semi-bold">
                        Seems like we don't have <br /> a result for that!
                    </h1>
                    <p className="text-base lg:text-lg">
                        Try with another search term.
                    </p>
                </div>)}

            {(pagination && results.length > 0) && (
                <Pagination
                    pagination={pagination}
                    onPageChange={(nextPage) => {
                        getEvaluationForms(nextPage);
                    }}
                    currentPage={currentPage}
                    perPage={10}
                    resultsInPage={results.length}
                />
            )}
        </>
    );
}