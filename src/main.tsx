import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import '@app/css/app.scss';
import 'remixicon/fonts/remixicon.css';
import { AuthRoutes} from '@modules/Auth/presentation/routes';
import { AppSettingsProvider } from '@context/AppSettingsContext.tsx';

const router = createBrowserRouter([
    AuthRoutes,
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppSettingsProvider>
        <RouterProvider router={router} />
    </AppSettingsProvider>
  </StrictMode>,
)
