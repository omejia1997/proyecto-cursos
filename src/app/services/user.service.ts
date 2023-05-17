import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';


const URL = "http://localhost:5000"
const USER = URL + '/users';

@Injectable({
  providedIn: 'root'
})

export class UserService {


  constructor(private http: HttpClient) { }

  login(email:any,password:any) {
    return this.http.get<User>(`${USER}/login/${email}/${password}`);
  }

  findUserById(userId:any) {
    return this.http.get<User>(`${USER}/findById/${userId}`);
  }

  updateUser(user:User) {
    return this.http.put<any>(`${USER}/update_user`,user); 
  }

  register(user:User) {
    return this.http.post<any>(`${USER}/save_user`,user); 
  }

  getUsersTypeDocent(){
    return this.http.get<User[]>(`${USER}/allTeachers/Profesor`);
  }
  getAllUsers(){
    return this.http.get<User[]>(`${USER}/all`);
  }

  IsLoggedin() {
    return localStorage.getItem('usuario') != null;
  }

}
