import { Injectable } from '@angular/core';
import { ResponseBase } from '../models/response';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class EmailService {
    constructor(
        private _ApiService: ApiService
    ) { }


    sendEmail(request: any): Promise<ResponseBase> {
        return this._ApiService.postRequest<ResponseBase>(`/email`, request);
    }
}