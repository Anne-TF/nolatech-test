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


const router = createBrowserRouter([
    AuthRoutes,
    DashboardRoutes,
    EmployeesRoutes,
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppSettingsProvider>
        <RouterProvider router={router} />
    </AppSettingsProvider>
  </StrictMode>,
)
