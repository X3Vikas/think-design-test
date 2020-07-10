import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: '', component: IndexComponent, pathMatch: 'full' }
        ]
    }


];
export const route = [
    HomeComponent,
    IndexComponent
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class HomeRouting {
    constructor() {

    }
}