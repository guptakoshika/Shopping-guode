import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class LoginService {
  
  private baseUrl: string = 'http://localhost:9000';

  constructor(private httpClient : HttpClient ) {  }

  /***
   * This method is used for validation of input after submittion in login form.
   * @param credentials: data populated from input.
   */
  validateUser(credentials : Object) :  Observable<Object> {
    console.log(credentials);
    return this.httpClient.post(`${this.baseUrl}` + `/login` , credentials);
  }
}
