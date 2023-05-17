import { Component, OnChanges, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { timeStamp } from 'console';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{

  typeUser:any;
  nameUser:any;

  constructor(private router: Router) {
    this.typeUser = localStorage.getItem('typeUser');
    this.nameUser = localStorage.getItem('nameUser');
  }

  ngOnInit(): void {
  }

  IsLoggedout() {

    this.router.navigate(['./login']);
    localStorage.clear();
  }

}
