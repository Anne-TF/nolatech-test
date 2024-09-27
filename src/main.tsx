import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

// CSS
import './index.css'
import '@app/css/app.scss';
import 'remixicon/fonts/remixicon.css';

// CONTEXT
import { AppSettingsProvider } from '@context/AppSettingsContext.tsx';

// ROUTES
import { DashboardRoutes } from '@modules/Dashboard/presentation/routes';
import { AuthRoutes} from '@modules/Auth/presentation/routes';
import { EmployeesRoutes} from '@modules/Employees/presentation/routes';
import { EvaluationFormsRoutes } from '@modules/EvaluationForms/presentation/routes';
import { AuthContextProvider } from '@modules/Auth/infrastructure/context/AuthContext';


const router = createBrowserRouter([
    AuthRoutes,
    DashboardRoutes,
    EmployeesRoutes,
    EvaluationFormsRoutes,
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppSettingsProvider>
        <AuthContextProvider>
            <RouterProvider router={router} />
        </AuthContextProvider>
    </AppSettingsProvider>
  </StrictMode>,
)
