import { Routes } from "@angular/router";
import { authGuard } from "../../core/guards/auth.guard";

export const DASHBOARD_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard-page/dashboard-page.component').then(m => m.DashboardPageComponent), canActivate: [authGuard]
    }

]