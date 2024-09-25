import { ErrorPage } from '@common/pages';

export const DashboardRoutes = {
    path: "/dashboard",
    async lazy() {
        const { AuthenticatedLayout } = await import("@common/layouts/AuthenticatedLayout.tsx");
        return { Component: AuthenticatedLayout };
    },
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            async lazy() {
                const { Dashboard } = await import("../pages/Dashboard.tsx");
                return {Component: Dashboard};
            },
        },
    ],
};
