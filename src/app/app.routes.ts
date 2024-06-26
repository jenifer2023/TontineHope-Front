import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

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
    component: SignUpComponent,
    title: 'TontineHope | Sign Up'
  },

  {
    path: 'log-in',
    component: LogInComponent,
    title: 'TontineHope | Log In'
  },



  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Eschop | Page Not Found'
  },
];
