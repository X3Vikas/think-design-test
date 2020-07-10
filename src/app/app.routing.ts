import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PnfComponent } from './components/pnf/pnf.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./module/home/home.module').then(home => home.HomeModule) },
  { path: '**', component: PnfComponent }
];
export const route = [
  PnfComponent
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
