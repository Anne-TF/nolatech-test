import {Outlet, useLocation} from 'react-router-dom';
import NolatechLogoWhite from "@assets/nolatech-logo-white.png";
import NolatechLogoGray from "@assets/nolatech-logo-gray.png";
import {useContext, useEffect, useState} from 'react';
import {AppSettingsContext} from '@context/AppSettingsContext.tsx';
import {RiArticleLine, RiDashboardLine, RiUser2Line} from '@remixicon/react';
import {ListItem} from '@common/components';

export function AuthenticatedLayout() {
    const [isMounted, setIsMounted] = useState(false);
    const { isDarkMode } = useContext(AppSettingsContext);
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
        <main className="flex min-h-[100vh]">
            <aside className={`flex py-4 sidebar-navigation bg-slate-100 dark:!bg-app-accent px-3 ${isMounted && 'sidebar-navigation--animation'}`}>
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

            <section className={"w-full flex flex-col flex-1 bg-neutral-200 dark:bg-app-secondary"}>
                <Outlet/>
            </section>
        </main>
    );
}
