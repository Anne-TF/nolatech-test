import {ITableColum} from '@common/interfaces';
import React from 'react';

interface Props {
    columns: ITableColum[];
    tableClasses: string;
    includeActions: boolean;
    children: React.ReactNode;
    cards?: React.ReactNode;
    gridClasses?: string;
}

export const Table: React.FC<Props> = ({columns, tableClasses, includeActions, children, cards, gridClasses}) => {
    return (
        <>
            <table
                className={`w-full hidden xl:table text-sm text-left text-gray-500 rounded-xl dark:text-gray-400 ${tableClasses}`}>
                <thead
                    className="text-xs md:text-sm text-gray-700 uppercase bg-slate-100 dark:bg-app-accent dark:text-neutral-300 rounded-xl">
                <tr className="rounded-xl">
                    {columns.map((column, index) => {
                        return (
                            <th key={column.value} scope="col"
                                className={`px-4 py-4 ${index === 0 && 'rounded-l-t-md'}`}>
                                {column.name}
                            </th>
                        );
                    })}
                    {includeActions && <th scope="col" className="px-4 py-3 rounded-r-t-md">Actions</th>}
                </tr>
                </thead>
                <tbody className="!min-h-[500px] relative">
                {children}
                </tbody>
            </table>

            <div className={`w-full grid grid-cols-8 xl:hidden ${gridClasses}`}>
                {cards}
            </div>
        </>
    );
};