import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario2!: FormGroup;
  visible:boolean=true;
  changetype:boolean=true;
  usuarioService:any;
  passwordService:any;
  flag:boolean=true;
  conf:boolean=true;
  docente: any;
  perfil:any;
  user: any;

  constructor(
    private fb:FormBuilder, 
    private router: Router,
    private userService: UserService
    ) { 
    this.iniciarFormulario();
  }

  ngOnInit(): void {
  }


  iniciarFormulario(){
    this.formulario2=this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required],
    })
    
  }

  consultar(){
    this.userService.login(this.formulario2.value.usuario,this.formulario2.value.password).subscribe({
      next: (user) => {
        this.user = user;
        console.log(this.user)
        localStorage.setItem('userId', this.user.id);
        localStorage.setItem('typeUser', this.user.type);
        localStorage.setItem('nameUser', this.user.name +" "+this.user.lastname );
        this.router.navigate(['./home']);
      },
      error: (err) => {
        this.flag = false;
      },
      complete: () => {
        // this.isLoading = false;
      },
    });
  }

  mostrarcontrasenia(){
    this.visible=!this.visible;
    this.changetype=!this.changetype;
 
  }

}
