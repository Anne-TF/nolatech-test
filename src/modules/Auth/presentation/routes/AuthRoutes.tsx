import { ErrorPage } from '@common/pages';

export const AuthRoutes = {
    path: "/",
    async lazy() {
        const { UnauthenticatedLayout } = await import("@common/layouts/UnauthenticatedLayout.tsx");
        return { Component: UnauthenticatedLayout };
    },
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            async lazy() {
                const { Login } = await import("../pages/Login.tsx");
                return {Component: Login};
            },
        },
    ],
};
