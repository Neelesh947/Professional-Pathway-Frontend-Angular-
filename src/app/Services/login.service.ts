import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  //generate tokens
  public generateTokens(loginData:any){

    return this.http.post(`${baseUrl}/generate-token`,loginData);    
  }

  //login user: set token in local storage
  public loginUser(token: string)
  {
    localStorage.setItem('token',token);
    return true;
  } 


  //isLogin: user is logged in or not
  public isLoggedIn()
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
    return this.http.get(`${baseUrl}/current-user`);
  }


}
