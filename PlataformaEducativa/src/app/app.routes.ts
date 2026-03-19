import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Module } from './pages/module/module';

export const routes: Routes = [

    { 
        path: '', 
        component: Home
    },
    { 
        path: 'module/:id', 
        component: Module
    },
    {
        path: '**',
        redirectTo: ''
    }
];
