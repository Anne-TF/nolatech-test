import {Outlet, useLocation} from 'react-router-dom';
import NolatechLogoWhite from "@assets/nolatech-logo-white.png";
import NolatechLogoGray from "@assets/nolatech-logo-gray.png";
import {useContext, useEffect, useState} from 'react';
import {AppSettingsContext} from '@context/AppSettingsContext.tsx';
import {
    RiArticleLine,
    RiDashboardLine,
    RiMenu2Line,
    RiSearch2Line,
    RiUser2Line,
} from '@remixicon/react';
import {Button, ListItem, NotificationsButton, ThemeSwitch} from '@common/components';

export function AuthenticatedLayout() {
    const [isMounted, setIsMounted] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const { isDarkMode, toggleDarkMode } = useContext(AppSettingsContext);
    const location = useLocation();

    const links = [
        {
            text: 'Dashboard',
            icon: <RiDashboardLine size={24} />,
            to: '/dashboard'
        },
        {
            text: 'Evaluation forms',
            icon: <RiArticleLine size={24} />,
            to: '/evaluation-forms'
        },
        {
            text: 'Employees',
            icon: <RiUser2Line size={24} />,
            to: '/evaluation-forms'
        }
    ];

    useEffect(() => {
        setTimeout(() => {
            setIsMounted(true);
        }, 200)
        return () => setIsMounted(false);
    }, [])

    return (
        <main className="flex min-h-[100vh] overflow-x-hidden max-w-full">
            <aside className={`py-4 sidebar-navigation bg-slate-100 dark:!bg-app-accent px-3 ${isMounted && 'sidebar-navigation--animation'} ${showSidebar && '!fixed xl:!relative w-4/5 md:w-3/5 lg:w-auto !block xl:!flex h-full xl:h-auto z-40 animate-slide-in-left'}`}>
                <img
                    src={isDarkMode ? NolatechLogoWhite : NolatechLogoGray}
                    alt="nolatech_logo_white"
                    height="auto"
                    width="auto"
                    className="w-3/5 mb-14 py-4 mt-3 mx-4"
                />

                {links.map((link, index) => {
                    return (
                        <ListItem
                            text={link.text}
                            icon={link.icon}
                            to={link.to}
                            customClassname="w-full text-neutral-500 hover:bg-neutral-700 rounded-lg dark:!text-neutral-300 py-4 px-4 text-regular font-bold mb-3"
                            iconPosition="left"
                            activeClassname={`${isDarkMode && 'bg-app-primary-900 !text-app-secondary'} ${!isDarkMode && 'bg-app-primary-100 !text-app-secondary'} text-semi-bold`}
                            isActive={location.pathname === link.to}
                            clickable={true}
                            key={index}
                        />
                    )
                })}
            </aside>

            <section
                className={`w-full flex flex-col overflow-y-auto overflow-x-hidden flex-1 bg-neutral-200 dark:bg-app-secondary ${showSidebar && '!overflow-hidden'}`}>
                <div
                    className="text-app-secondary dark:!text-white px-4 md:px-8 py-4 md:pt-10 text-regular flex justify-between w-full h-auto">
                    <div className="hidden lg:block w-3/6 xl:w-3/5">
                        <h1 className="mb-3 dark:!text-neutral-300 text-neutral-600"
                            style={{fontSize: 'clamp(23px, 30px, 32px)'}}>
                            Hello Jane
                        </h1>
                        Welcome to the 360° evaluation platform of Nolatech
                    </div>

                    <div className="gap-2 md:gap-4 flex items-start xl:items-center flex-row flex-wrap w-3/4 sm:w-2/4 md:w-auto">
                        <h1 className="w-full mb-1 dark:!text-neutral-300 text-neutral-600 text-xl block lg:hidden">
                            Hello Jane
                        </h1>
                        <Button
                            icon={<RiMenu2Line size={24}/>}
                            customOnClick={() => setShowSidebar(!showSidebar)}
                            customClassName="dark:!bg-app-accent bg-slate-100 rounded-lg p-2 text-bold block lg:hidden"
                            typeButton="button">
                        </Button>


                        <Button
                            icon={<RiSearch2Line size={24}/>}
                            customClassName="dark:!bg-app-accent bg-slate-100 rounded-lg p-2 text-bold"
                            typeButton="button">
                        </Button>

                        <NotificationsButton />

                        <ThemeSwitch className={`${isDarkMode ? '!bg-app-accent' : '!bg-slate-100'} dark:!text-white`}
                                     isDark={isDarkMode} toggleTheme={toggleDarkMode}/>
                    </div>

                    <div className="flex gap-3 items-start xl:items-center">
                        <p className="text-right text-semi-bold m-0">
                            <span style={{fontSize: 'clamp(16px, 17px, 18px)'}}>Jane Freya Doe</span>
                            <br/>
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
                </div>
                {showSidebar && <div className="fixed w-full h-full bg-app-secondary z-20 opacity-60 backdrop-blur-md overflow-hidden lg:hidden"
                                     onClick={() => setShowSidebar(!showSidebar)}/>}
                <Outlet/>
            </section>
        </main>
    );
}
