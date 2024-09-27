import { ErrorPage } from '@common/pages';

export const EvaluationFormsRoutes = {
    path: "/evaluation-forms",
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
