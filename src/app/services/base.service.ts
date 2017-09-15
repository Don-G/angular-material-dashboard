import { Err } from "../domain/index";
import { Observable } from "rxjs/Observable";
import { showNotification } from '../utils/base.util';

export const httpError = (error: Response | any) => {
    const err = error.json();
    const msg = "";
    switch(error.status)
    {
        case 401:
        this.msg = "用户授权失败";
        break;
        default:
        this.msg = err.msg;
    }
    showNotification('top','right','danger',`${this.msg}`);

    return Observable.throw(err as Err);
}
