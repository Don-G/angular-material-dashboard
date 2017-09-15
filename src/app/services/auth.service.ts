import { Auth } from '../domain/auth.model';
import { Headers, Http } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { User,Err } from "../domain/index";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {

    private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' +
    '.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9' +
    '.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';

    private headers = new Headers({
        'Content-Type': 'application/json',
        'token': this.token
    })

    constructor(private http: Http, @Inject('BASE_CONFIG') private config) { }


    login(username: string, password: string): Observable<Auth> {
        const uri = `${this.config.uri}/token/app`;
        return this.http
            .post(uri, {'ac': username, 'se': password})
            .map(res => {
                return res.json();
            })
            .catch(this.handleErrorObservable)
    }
    private handleErrorObservable (error: Response | any) {
        return Observable.throw(error.json() as Err);
    }
}