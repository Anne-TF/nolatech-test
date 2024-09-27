import {Navigate, Outlet} from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from '@modules/Auth/infrastructure/context/AuthContext.tsx';

export function UnauthenticatedLayout() {
    const { user } = useContext(AuthContext);

    if (user) {
        // user is authenticated
        return <Navigate to="/dashboard" />;
    }

    return (
        <main className={"min-h-[100vh] bg-neutral-300 dark:bg-app-secondary"}>
            <Outlet />
        </main>
    );
}
