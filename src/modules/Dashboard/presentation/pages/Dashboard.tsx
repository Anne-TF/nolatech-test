import {Spinner} from '@common/components';
import {RiArticleLine, RiPassPendingLine, RiUser2Line} from '@remixicon/react';
import {lazy, Suspense} from 'react';
import {ChartCard} from '@modules/Dashboard/presentation/components/ChartCard.tsx';
import {EmployeeItem} from '@modules/Dashboard/presentation/components/EmployeeItem.tsx';

export function Dashboard() {
    const Chart = lazy(() => import('@common/components/ChartComponent.tsx'));

    // MOCKS
    const upperCards = [
        {
            title: "Total Employees",
            value: 100,
            icon: <RiUser2Line className="hidden md:block" size={24} />,
            caption: {
                value: '+3',
                text: 'last month'
            }
        },
        {
            title: "Evaluations Pending",
            value: 25,
            icon: <RiPassPendingLine className="hidden md:block" size={24} />,
            caption: {
                value: '85',
                text: 'this year'
            }
        },
        {
            title: "Total Evaluation Forms",
            value: 100,
            icon: <RiArticleLine className="hidden md:block" size={24}/>,
            caption: {
                value: '+10',
                text: 'last month'
            }
        },
        {
            title: "Total Results",
            value: 300,
            icon: <RiUser2Line className="hidden md:block" size={24}/>,
            caption: {
                value: '+4',
                text: 'last month'
            }
        }
    ];
    const recentResults = [
        {
            name: 'Jane Doe',
            img: 'https://imgcdn.stablediffusionweb.com/2024/5/10/d9622fb4-da27-4341-971c-6f703d897417.jpg',
            evaluation: '360°',
            position: 'Frontend developer',
            date: '02/02/2022',
            result: 'Excellent'
        },
        {
            name: 'John Doe',
            img: 'https://imgcdn.stablediffusionweb.com/2024/5/10/d9622fb4-da27-4341-971c-6f703d897417.jpg',
            evaluation: '180°',
            position: 'Frontend developer',
            date: '02/02/2022',
            result: 'Excellent'
        },
        {
            name: 'Jane Doe',
            img: 'https://imgcdn.stablediffusionweb.com/2024/5/10/d9622fb4-da27-4341-971c-6f703d897417.jpg',
            evaluation: '360°',
            position: 'Frontend developer',
            date: '02/02/2022',
            result: 'Excellent'
        },
        {
            name: 'John Doe',
            img: 'https://imgcdn.stablediffusionweb.com/2024/5/10/d9622fb4-da27-4341-971c-6f703d897417.jpg',
            evaluation: '180°',
            position: 'Frontend developer',
            date: '02/02/2022',
            result: 'Excellent'
        }
    ]

    return (
        <>
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 px-4 md:px-8 h-auto md:pt-3">
                {upperCards.map((card, index) => {
                    return (
                        <div key={index} className="bg-slate-100 dark:bg-app-accent flex flex-col justify-between p-3 md:p-4 h-[8em] rounded-xl">
                            <div className="flex items-center gap-2 w-full col-12 dark:!text-neutral-400 text-neutral-600">
                                {card.icon}
                                <h1 className="text-regular">{card.title}</h1>
                            </div>

                            <div className="flex justify-between items-center">
                                <p className="text-semi-bold dark:!text-white text-neutral-500 text-xl md:text-3xl">{card.value}</p>

                                <p className="text-inter-regular font-medium text-neutral-500 dark:!text-neutral-400">
                                    <span className="text-app-primary text-bold">{card.caption.value} </span>
                                    {card.caption.text}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </section>

            <section className="grid grid-cols-12 px-4 pt-6 md:px-8 md:pt-6 gap-3 pb-6 h-full">
                <div className="h-full col-span-12 xl:col-span-8 rounded-xl grid grid-cols-8 gap-3">
                <ChartCard
                    title="People Evaluated Through The Years"
                    chart={
                        <div className="w-full md:w-11/12">
                            <Suspense fallback={<Spinner loaderColor="#F9B58B" spinnerColor="white"/>}>
                                <Chart
                                    categories={[2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]}
                                    series={[
                                        {
                                            name: "People evaluated",
                                            data: [30, 40, 45, 50, 49, 60, 70, 85],
                                        },
                                        {
                                            name: "Employees",
                                            data: [30, 45, 50, 50, 48, 55, 60, 100],
                                        },
                                    ]}
                                    colors={['#2e90fa', '#D5590B']}
                                    id="area-chart"
                                    type="area"
                                />
                            </Suspense>
                        </div>}
                    customClassname="col-span-12 md:col-span-5 lg:col-span-5"/>

                <div className={`bg-slate-100 pb-5 h-auto dark:bg-app-accent col-span-12 md:col-span-3 lg:col-span-3 rounded-xl flex flex-col items-center `}>
                    <h1 className="text-xl w-full px-3 md:px-6 py-5 text-app-secondary text-semi-bold dark:!text-neutral-300">
                        Most Recent Results
                    </h1>

                    <div className="max-h-[14em] md:max-h-[17em] lg:max-h-[22em] h-auto w-full px-4 md:px-6 overflow-y-auto flex flex-col gap-5">
                        {recentResults.map((result, index) => {
                            return <EmployeeItem key={index} employee={result} />
                        })}
                    </div>
                </div>

                <ChartCard
                    title="Employees Evaluation Status"
                    chart={
                        <div className="w-full sm:w-8/12 md:w-10/12 pb-6">
                            <Suspense fallback={<Spinner loaderColor="#F9B58B" spinnerColor="white"/>}>
                                 <Chart
                                        categories={[2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]}
                                        series={[85, 15, 10]}
                                        labels={['Evaluated', 'Programmed', 'Pending']}
                                        colors={['#4CAF50', '#D5590B', '#F8C31F']}
                                        id="area-chart"
                                        type="pie"
                                    />
                                </Suspense>
                            </div>}
                        customClassname="col-span-12 md:col-span-5 lg:col-span-4"/>

                    <ChartCard
                        title="Employees Distribution"
                        chart={
                            <div className="w-5/6 col-span-12 md:col-span-3 lg:col-span-4 pb-6">
                                <Suspense fallback={<Spinner loaderColor="#F9B58B" spinnerColor="white"/>}>
                                    <Chart
                                        categories={[]}
                                        series={[
                                            {
                                                name: 'Administrative',
                                                data: [
                                                    {
                                                        x: 'Managers',
                                                        y: 10
                                                    },
                                                    {
                                                        x: 'Supervisors',
                                                        y: 30
                                                    },
                                                    {
                                                        x: 'Consultants',
                                                        y: 41
                                                    },
                                                    {
                                                        x: 'Coordinators',
                                                        y: 20
                                                    },
                                                    {
                                                        x: 'Human Resources',
                                                        y: 20
                                                    }
                                                ]
                                            },
                                            {
                                                name: 'Engineering and Design',
                                                data: [
                                                    {
                                                        x: 'Designers',
                                                        y: 10
                                                    },
                                                    {
                                                        x: 'RRSS',
                                                        y: 20
                                                    },
                                                    {
                                                        x: 'Software Developers',
                                                        y: 51
                                                    },
                                                    {
                                                        x: 'Software Engineers',
                                                        y: 30
                                                    },
                                                    {
                                                        x: 'UI/UX Designers',
                                                        y: 20
                                                    },
                                                    {
                                                        x: 'QA Engineers',
                                                        y: 30
                                                    }
                                                ]
                                            }
                                        ]}
                                        labels={[]}
                                        colors={['#4CAF50', '#D5590B', '#F8C31F']}
                                        id="area-chart"
                                        type="treemap"
                                    />
                                </Suspense>
                            </div>}
                        customClassname="col-span-12 md:col-span-5 lg:col-span-4"/>
                </div>


                <div className="bg-slate-100 h-full dark:bg-app-accent col-span-12 lg:col-span-4 rounded-xl">
                    card
                </div>
            </section>
        </>
    );
}