import {Button} from '@common/components/index.ts';
import {RiNotification2Line} from '@remixicon/react';
import {useState} from 'react';
import {GetTimeDifference} from '@common/utils';
import { useRunOnce, OutsideAlerter } from '@common/hooks';
import {INotification} from '@common/interfaces';
import {Parser as HtmlToReactParser} from 'html-to-react';


export const NotificationsButton = () => {
    const htmlToReactParser = new HtmlToReactParser();
    const [showMenu, setShowMenu] = useState(false);
    const [notifications, setNotifications] = useState<INotification[]>([
        {
            id: 1,
            title: 'New notification',
            description: 'You have a new notification',
            date: '2024-09-10 12:00:00',
            read: true
        }
    ]);

    const markAsReadOrDelete = (id: number) => {
        const updatedNotifications = notifications.reduce((acc: INotification[], notification: INotification) => {
            if (notification.id === id) {
                return notification.read ? acc : [...acc, {...notification, read: true}];
            }
            return [...acc, notification];
        }, []);
        setNotifications(updatedNotifications);
    }

    const pushNewNotifications = () => {
        const toPush: INotification[] = [
            {
                id: 2,
                title: 'Reminder: Evaluation pending',
                description: 'The evaluation form for John Doe is pending. Please review it <strong>before 13/10/2024.</strong>',
                date: new Date(Date.now()).toISOString(),
                read: false
            },
            {
                id: 3,
                title: 'Evaluation overdue!',
                description: 'The evaluation form for Jane Doe <strong>is overdue</strong>. Please <strong>review it as soon</strong> as possible.',
                date: new Date(Date.now()).toISOString(),
                read: false
            },
            {
                id: 4,
                title: 'Evaluation completed',
                description: 'You have completed the evaluation form for John Doe. You can now <strong>view the results</strong>.',
                date: new Date(Date.now()).toISOString(),
                read: false
            }
        ]

        for (let i = 0; i < toPush.length; i++) {
            setTimeout(() => {
                setNotifications((prevNotifications) => [...new Set([toPush[i], ...prevNotifications])]);
            }, 4000 * i);
        }
    }

    const markAllAsRead = () => {
        setNotifications(notifications.map((notification) => ({...notification, read: true})));
    }

    useRunOnce({ fn: () => { setTimeout(pushNewNotifications, 3000) } });

    return (
        <OutsideAlerter fn={() => setShowMenu(false)}>
            <>
                <Button
                    icon={<RiNotification2Line size={24}/>}
                    customOnClick={() => setShowMenu(!showMenu)}
                    customClassName={`dark:!bg-app-accent hover:dark:!bg-neutral-800 bg-slate-100 hover:bg-slate-200 rounded-lg p-2 text-bold ${notifications.length > 0 && notifications.some((notification) => !notification.read) && 'animate-jiggle'}`}
                    typeButton="button">
                </Button>

                {notifications.length > 0 && notifications.some((notification) => !notification.read) && <span className="bg-app-primary-500 h-2 w-2 rounded-full absolute right-1 top-2"/>}

                <div
                    className={`absolute ${ showMenu ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out delay-150 duration-300 bg-slate-100 dark:!bg-app-accent w-[80vw] md:w-[50vw] xl:w-[23em] -left-12 xl:left-auto xl:right-0 mt-2 h-[45vh] md:h-[35vh] shadow-xl rounded-xl border-1 shadow-slate-200 dark:!shadow-neutral-800 border-app-quaternary dark:!border-neutral-700 p-1 md:p-2 z-20`}>
                    <div className="flex justify-between px-3">
                        <h1 className="text-base md:text-lg text-app-accent dark:!text-neutral-300 py-2">Notification
                            center</h1>
                        <button className="text-xs text-semi-bold text-app-primary-700 dark:!text-app-primary mt-1"
                                onClick={() => markAllAsRead()}>
                            Mark all as read
                        </button>
                    </div>
                    <div className="h-[73%] overflow-y-auto flex flex-col gap-2">
                        {notifications.map((notification) => {
                            return (
                                <div key={notification.id}
                                     className="flex flex-col rounded-md py-2 px-3 md:py-3 md:px-4 hover:bg-slate-200 dark:hover:!bg-neutral-700">
                                    <div className="flex items-start justify-between mb-1">
                                        <h4 className={`text-sm md:text-base text-semi-bold flex items-start w-4/6 relative ${!notification.read && 'pl-1'}`}>
                                            {!notification.read && <span className="bg-app-primary-500 animate-pulse h-2 w-2 mt-2 rounded-full -top-0 -left-3 absolute"/>}
                                            {notification.title}
                                        </h4>
                                        <button className="text-xs text-app-primary-700 dark:!text-app-primary mt-1"
                                                onClick={() => markAsReadOrDelete(notification.id)}>
                                            {notification.read ? 'Delete' : 'Mark as read'}
                                        </button>
                                    </div>
                                    <p className="text-xs md:text-sm dark:!text-neutral-300">{htmlToReactParser.parse(notification.description)}</p>
                                    <p className="text-xs md:text-sm dark:!text-neutral-400">{GetTimeDifference(notification.date)}</p>
                                </div>
                            )
                        })}

                        {notifications.length < 1 && (
                            <div className="h-full flex items-center flex-col justify-center">
                                <h1 className="mb-2 text-semi-bold text-lg md:text-xl text-neutral-400">All caught up!</h1>
                                <p className="w-4/5 text-center text-neutral-400">Seems like you don't have new
                                    notifications yet.</p>
                            </div>
                        )}
                    </div>

                    <Button text="View all" typeButton="button" customClassName="w-full py-2 mt-2 mb-1 text-app-primary-500 dark:!text-app-primary text-bold hover:bg-slate-200 dark:hover:!bg-neutral-700 rounded-md">
                    </Button>
                </div>
            </>
        </OutsideAlerter>
    )
}