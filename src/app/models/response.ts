export class ResponseBase {
    data: any;
    success: boolean;
    message: string;
    constructor() {
        this.success = false;
        this.message = '';

    }
}