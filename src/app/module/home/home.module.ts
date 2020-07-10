import { NgModule } from '@angular/core';
import { HomeRouting, route } from './home.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [route],
    imports: [
        HomeRouting,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule

    ],
    exports: []
})
export class HomeModule {
    constructor() {

    }
}