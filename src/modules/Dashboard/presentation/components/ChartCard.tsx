import {useEffect, useState} from 'react';
import {Spinner} from '@common/components';

interface Props {
    title: string;
    chart: React.ReactNode;
    customClassname: string;
}

export const ChartCard = ({title, chart, customClassname} : Props) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsMounted(true);
        }, 1500)
        return () => setIsMounted(false);
    }, [])

    return (
        <div className={`bg-slate-100 h-auto dark:bg-app-accent ${customClassname} rounded-xl flex flex-col items-center`}>
            <h1 className="text-xl w-full px-3 md:px-6 py-5 text-app-secondary text-semi-bold dark:!text-neutral-300">
                {title}
            </h1>
            {isMounted ? chart : <div className="w-full flex items-center justify-center h-full mb-8">
                <Spinner loaderColor="#F9B58B" spinnerColor="white"/>
            </div>}
        </div>
    )
}