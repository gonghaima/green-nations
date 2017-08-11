import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { UserApi } from '../../fw/users/user-api';

@Injectable()
export class UserService implements UserApi {

  isAuthenticated = false;

  constructor() { }

  signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
    console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
    this.isAuthenticated = true;
    return Observable.of({}).delay(2000);
  }

}