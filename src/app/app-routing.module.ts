import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    // canActivate: [LoginGuard],
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    data: { title: 'Login' }
  },
  {
    path: 'signup',
    // canActivate: [LoginGuard],
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule),
    data: { title: 'SignUp' }
  },
  {
    path: '',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    data: { title: 'Work4C' }
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
