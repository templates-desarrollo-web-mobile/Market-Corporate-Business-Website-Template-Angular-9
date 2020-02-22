import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: ``, loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule),
      canActivate:[]
  },
  {
    path: `contact`, loadChildren: () =>
      import('./pages/contact/contact.module').then(m => m.ContactModule),
      canActivate:[]
  },
  {
    path: `about`, loadChildren: () =>
      import('./pages/about/about.module').then(m => m.AboutModule),
      canActivate:[]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
