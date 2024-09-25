import {Button, ThemeSwitch} from '@common/components';
import {RiArticleLine, RiNotification2Line, RiPassPendingLine, RiSearch2Line, RiUser2Line} from '@remixicon/react';
import {useContext} from 'react';
import {AppSettingsContext} from '@context/AppSettingsContext.tsx';

export function Dashboard() {
    const { isDarkMode, toggleDarkMode } = useContext(AppSettingsContext);

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
            value: 5,
            icon: <RiPassPendingLine className="hidden md:block" size={24} />,
            caption: {
                value: '95',
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

    return (
        <>
            <section className="text-app-secondary dark:!text-white px-4 md:px-8 py-4 md:pt-10 text-regular flex justify-between w-full h-auto">
                <div className="w-3/5">
                    <h1 className="mb-3 dark:!text-neutral-300 text-neutral-600" style={{fontSize: 'clamp(23px, 30px, 32px)'}}>
                        Hello Jane
                    </h1>
                    Welcome to the 360° evaluation platform of Nolatech
                </div>

                <div className="gap-4 flex items-center">
                    <Button
                        icon={<RiNotification2Line size={24} />}
                        customClassName="dark:!bg-app-accent bg-slate-100 rounded-lg p-2 text-bold"
                        typeButton="button">
                    </Button>

                    <Button
                        icon={<RiSearch2Line size={24} />}
                        customClassName="dark:!bg-app-accent bg-slate-100 rounded-lg p-2 text-bold"
                        typeButton="button">
                    </Button>

                    <ThemeSwitch className={`${isDarkMode ? '!bg-app-accent' : '!bg-slate-100'} dark:!text-white`} isDark={isDarkMode} toggleTheme={toggleDarkMode} />
                </div>

                <div className="flex gap-3 items-center">
                    <p className="text-right text-semi-bold m-0">
                        <span style={{ fontSize: 'clamp(16px, 17px, 18px)' }}>Jane Freya Doe</span>
                        <br />
                        <span className="text-regular text-neutral-500 dark:!text-neutral-400">Lead HR</span>
                    </p>

                    <img
                        src="https://cdn2.stylecraze.com/wp-content/uploads/2020/09/Beautiful-Women-In-The-World.jpg.avif"
                        alt="Jane_Doe"
                        height="auto"
                        width="auto"
                        className="rounded-full h-[3.3em]"
                    />
                </div>
            </section>
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 px-4 md:px-8 h- md:pt-3">
                {upperCards.map((card, index) => {
                    return (
                        <div className="bg-slate-100 dark:bg-app-accent flex flex-col justify-between p-3 md:p-4 h-[8em] rounded-xl">
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

            <section className="grid grid-cols-12 px-4 md:px-8 md:pt-6 h-full gap-3 mb-8">
                <div className="h-full col-span-8 rounded-xl grid grid-cols-6 gap-3">
                    <div className="bg-slate-100 h-full dark:bg-app-accent col-span-4 rounded-xl">
                        card
                    </div>

                    <div className="bg-slate-100 h-full dark:bg-app-accent col-span-2 rounded-xl">
                        card
                    </div>

                    <div className="bg-slate-100 h-full dark:bg-app-accent col-span-3 rounded-xl">
                        card
                    </div>

                    <div className="bg-slate-100 h-full dark:bg-app-accent col-span-3 rounded-xl">
                        card
                    </div>
                </div>


                <div className="bg-slate-100 h-full dark:bg-app-accent col-span-4 rounded-xl">
                    card
                </div>
            </section>
        </>
    );
}