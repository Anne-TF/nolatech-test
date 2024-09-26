import { ErrorPage } from '@common/pages';

export const EmployeesRoutes = {
    path: "/employees",
    async lazy() {
        const { AuthenticatedLayout } = await import("@common/layouts/AuthenticatedLayout.tsx");
        return { Component: AuthenticatedLayout };
    },
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            async lazy() {
                const { List  } = await import("../pages/List.tsx");
                return {Component: List};
            },
        },
    ],
};
