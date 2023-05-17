import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  template: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  formulario!: FormGroup;
  name:any;
  mensaje!: any;
  tituloMensajeVal: any;
  comboStudyArea: any;
  comboTypeUser: any;
  comboLevelUser: any;
  user: User = {};

  constructor(
    private fb: FormBuilder,
    private userService: UserService, 
    private router: Router) {
    this.iniciarFormulario();
    this.cargarDataPerfil();
    this.mensaje = "";
  }

  ngOnInit(): void {
    
  }

  iniciarFormulario() {
    this.comboStudyArea = ["Matemáticas", "Literatura", "Sistemas"];
    this.comboTypeUser = ["Estudiante", "Profesor"];
    this.comboLevelUser = ["Primaria", "Secundaria", "Tercer nivel", "Cuarto nivel"];
    this.formulario = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      correo: [{value: '', disabled: true}, [Validators.required, Validators.email]],
      password: ['', Validators.required],
      studyarea: ['', Validators.required],
      specialty: ['', Validators.required],
      type: [{value: '', disabled: true}, Validators.required],
      nivel: ['', Validators.required],
      motiveRegister: [{value: '', disabled: true}, Validators.required]
    })
  }

  cargarDataPerfil(){
    this.userService.findUserById(localStorage.getItem('userId')).subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => {
      },
      complete: () => {
        // this.isLoading = false;
      },
    })
  }

  onChange() {
    if(this.user.type=="Estudiante")
      this.user.motiveRegister="Académicos"
    else
      this.user.motiveRegister="Ingresos Extras"
  }
  
  save() {
    this.userService.updateUser(this.user).subscribe({
      next: (data) => {
        confirm("Pefil modificado con éxito")
        localStorage.setItem('nameUser', this.user.name +" "+this.user.lastname );
        this.router.navigate(["home"])
      },
      error: (err) => {
        alert("Error al modificar el usuario")
      },
      complete: () => {
        // this.isLoading = false;
      },
    })
  }

}



