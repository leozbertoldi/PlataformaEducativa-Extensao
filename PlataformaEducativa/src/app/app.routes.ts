import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Module } from './pages/module/module';
import { Descriptions } from './pages/descriptions/descriptions';
import { Team } from './pages/team/team';

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
        path: 'descriptions',
        component: Descriptions
    },
    {
        path: 'team',
        component: Team
    },
    {
        path: '**',
        redirectTo: ''
    }
];
