import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-docentes',
  templateUrl: './list-docentes.html'
})
export class ListDocentesComponent implements OnInit {

  getUsers$: Observable<User[]>;
  docentes: User[]=[];
  
  constructor(
    private userService: UserService,
    private router: Router,
  ) {
    this.getUsers$ = this.userService.getUsersTypeDocent();
  }

  ngOnInit(): void {
   this.getUsers();
  }

  getUsers() {
    this.getUsers$.subscribe(users =>{
      this.docentes = users;  
    });
  }

  navegarCrearCargo(){
    this.router.navigate(['crear-cargo']);
  }
}
