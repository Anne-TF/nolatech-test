import {IPagination} from '@common/interfaces';

interface Props {
    pagination: IPagination;
    onPageChange: (to: number) => void;
    currentPage: number;
    perPage: number;
    resultsInPage: number;
}

export const Pagination = ({pagination, onPageChange, currentPage, perPage, resultsInPage}: Props) => {
    return (
        <nav
            className="flex flex-col md:flex-row justify-between items-center md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation">
            <p className="text-base font-normal text-gray-500 space-x-1 dark:text-neutral-400">
                <span>Showing </span>
                <span className="font-semibold text-gray-900 dark:text-white">
                    {(currentPage * perPage) - (perPage - 1)}-{((currentPage * perPage) - perPage) + resultsInPage}
                </span>
                <span>of</span>
                <span className="font-semibold text-gray-900 dark:text-white">{pagination.items}</span>
            </p>

            <ul className="inline-flex items-stretch -space-x-px">
                {pagination.prev && (
                    <li>
                        <a href="#"
                           onClick={() => onPageChange(currentPage - 1)}
                           className="flex items-center justify-center h-full py-1.5 px-2 ml-0 text-gray-500 rounded-l-lg bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-app-secondary dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-white">
                            <span className="sr-only">Previous</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                      clipRule="evenodd"/>
                            </svg>
                        </a>
                    </li>
                )}

                {[...Array(pagination.pages)].map((p, index) => {
                    return (
                        <li key={index}>
                            <a href="#"
                               onClick={() => onPageChange(index+1)}
                               className={`flex items-center justify-center text-base py-2 px-3 leading-tight text-gray-500 bg-white rounded hover:bg-gray-100 hover:text-gray-700 dark:bg-app-secondary dark:text-gray-400 text-semi-bold dark:hover:bg-neutral-800 dark:hover:text-white ${(index+1) === currentPage && 'bg-app-primary-700 !text-white'}`}>{index + 1}</a>
                        </li>
                    )
                })}

                {currentPage !== pagination.last && (
                    <li>
                        <a href="#"
                           onClick={() => onPageChange(currentPage + 1)}
                           className="flex items-center justify-center h-full py-1.5 px-2 ml-0 text-gray-500 bg-white rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-app-secondary dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-white">
                            <span className="sr-only">Next</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      clipRule="evenodd"/>
                            </svg>
                        </a>
                    </li>
                )}

            </ul>
        </nav>
    )
};
