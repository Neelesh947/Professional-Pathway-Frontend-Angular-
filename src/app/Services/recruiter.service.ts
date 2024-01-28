import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

  public loginStatusSubject=new Subject<boolean>();

  constructor(private _http:HttpClient) { }

  //generate tokens 
  public generateTokens(loginData:any)
  {
      return this._http.post(`http://localhost:8081/generate-token`,loginData);
  }

  //login user : set the user data intpo the local storage
  public loginRecruiter(token:string)
  {
    localStorage.setItem('token',token);
  }

  //IsUserLoggedIn : user is login or not
  public IsrecruiterLoggedIn()
  {
    let tokenStr=localStorage.getItem("token");
    if(tokenStr==undefined || tokenStr=='' || tokenStr==null)
    {
      return false;
    }
    else{
      return true;
    }
  }

  //logout : remove token from local storage
  public logout()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //get token from the localStorage
  public getToken()
  {
    return localStorage.getItem("token");
  }
  
  //set user details
  public setUser(user: any)
  {
    localStorage.setItem("user", JSON.stringify(user));
  }

  //get user 
  public getUser()
  {
    let userStr=localStorage.getItem("user");

    if(userStr!=null)
    {
      return JSON.parse(userStr);
    }
    else
    {
      this.logout();
      return null;
    }
  }

  //current-user: user which is logged in
  public getCurrentUser()
  {
    return this._http.get(`http://localhost:8081/current-user`);
  }
   
  //add Recruiter
  public addRecruiter(recruiter: any)
  {
    return this._http.post(`http://localhost:8081/recruiter`,recruiter);
  }

}
