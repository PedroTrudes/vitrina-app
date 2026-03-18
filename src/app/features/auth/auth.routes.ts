import { Routes } from "@angular/router";

export const AUTH_ROUTES: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
        data: {animation: 'LoginPage'}
    },
    {
        path: 'register',
        loadComponent: () => import('./pages/register/register-choice/register-choice.component').then(m => m.RegisterChoiceComponent),
        data: {animation: 'RegisterPage'}
    },
    {
        path: 'register/create-agency',
        loadComponent: () => import('./pages/register/create-agency/create-agency.component').then(m => m.CreateAgencyComponent),
        data: {animation: 'CreateAgencyPage'}
    },
    {
        path: 'register/join-agency',
        loadComponent: () => import('./pages/register/join-agency/join-agency.component').then(m => m.JoinAgencyComponent),
        data: {animation: 'JoinAgencyPage'}
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
]
