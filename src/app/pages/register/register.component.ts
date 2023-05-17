import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  template: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formulario!: FormGroup;
  name: any;
  mensaje!: any;
  tituloMensajeVal: any;
  comboStudyArea: any;
  comboTypeUser: any;
  comboLevelUser: any;
  user: User = {};
  contrasenaInvalida: boolean = false;
  password!: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router) {
    this.iniciarFormulario();
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
      correo: ['', [Validators.required, Validators.email]],
      studyarea: ['', Validators.required],
      specialty: ['', Validators.required],
      type: ['', Validators.required],
      nivel: ['', Validators.required],
      motiveRegister: [{ value: '', disabled: true }, Validators.required]
    })
  }

  onChange() {
    if (this.user.type == "Estudiante")
      this.user.motiveRegister = "Académicos"
    else
      this.user.motiveRegister = "Ingresos Extras"
  }


  validarContrasena() {
    const regexMayuscula = /(?=.*[A-Z])/;
    const regexMinuscula = /(?=.*[a-z])/;
    const regexNumero = /(?=.*\d)/;
    const regexCaracterEspecial = /(?=.*[@&\_])/;

    if (this.user.password)
      this.contrasenaInvalida = !(regexMayuscula.test(this.user.password) &&
        regexMinuscula.test(this.user.password) &&
        regexNumero.test(this.user.password) &&
        regexCaracterEspecial.test(this.user.password));
  }

  save() {
    this.userService.register(this.user).subscribe({
      next: (data) => {
        confirm("Usuario registrado con éxito")
        this.router.navigate(["login"])
      },
      error: (err) => {
        alert("Error al registrar el usuario")
      },
      complete: () => {
        // this.isLoading = false;
      },
    })
  }

}



