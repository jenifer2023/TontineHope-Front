import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomePageComponent,
    title: 'TontineHope | Sign Up'
  },

  {
    path: 'sign-up',
    component: SignUpPageComponent,
    title: 'TontineHope | Sign Up'
  },

  {
    path: 'log-in',
    component: LogInPageComponent,
    title: 'TontineHope | Log In'
  },



  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Eschop | Page Not Found'
  },
];
