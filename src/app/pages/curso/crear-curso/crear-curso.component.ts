import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  template: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {

  formulario!: FormGroup;
  name:any;
  mensaje!: any;
  curso: Course = {};

  constructor(
    private fb: FormBuilder,
    private courseService: CursoService, 
    private router: Router) {
    this.iniciarFormulario();
    this.mensaje = "";
  }

  ngOnInit(): void {
  }

  iniciarFormulario() {
    this.formulario = this.fb.group({
      name: ['', Validators.required],
      documentTeoric: ['', [Validators.required, Validators.email]],
      practicalDuration: ['', Validators.required],
      maxQuantity: ['', Validators.required]
    })
  }
  
  save() {
    this.curso.idUser = localStorage.getItem('userId');
    this.courseService.registerCourse(this.curso).subscribe({
      next: (data) => {
        confirm("Curso registrado con éxito")
        this.router.navigate(["list-course"])
      },
      error: (err) => {
        alert("Error al registrar el curso")
      },
      complete: () => {
        // this.isLoading = false;
      },
    })
  }

}



