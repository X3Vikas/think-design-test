import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: [`./index.component.scss`]
})
export class IndexComponent {
    emailSendForm: FormGroup;
    emailSendFormSubmitted = false;
    emailSendFormSubmitting = false;
    isSendSuccess = false;
    constructor(
        private _FormBuilder: FormBuilder,
        private _EmailService: EmailService
    ) {
        this.emailSendForm = this._FormBuilder.group({
            to: ['', [Validators.required, Validators.pattern(/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/)]],
            subject: [null, [Validators.required]],
            message: [null, [Validators.required]],
        });
    }

    emailSendFormSubmit() {
        this.emailSendFormSubmitted = true;
        if (this.emailSendForm.valid) {
            this.emailSendFormSubmitting = true;
            this._EmailService.sendEmail(this.emailSendForm.value).then((data) => {
                if (data.success) {
                    this.emailSendFormSubmitting = false;
                    this.isSendSuccess = true;
                    setTimeout(() => {
                        this.emailSendFormSubmitted = false;
                        this.isSendSuccess = false;
                        this.emailSendForm.reset();
                    }, 4000);

                }
            });


        }


    }
}