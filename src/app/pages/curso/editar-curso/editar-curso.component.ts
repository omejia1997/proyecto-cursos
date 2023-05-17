import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'editar-crear-curso',
  templateUrl: './editar-curso.component.html',
  template: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {

  formulario!: FormGroup;
  name:any;
  mensaje!: any;
  curso: any = {};

  constructor(
    private fb: FormBuilder,
    private courseService: CursoService, 
    private router: Router) {
    this.iniciarFormulario();
    this.courseService.course$.subscribe((res) => {
      this.curso = res;
      if (this.curso == null) {
        this.back();
      }
    });
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

  back() {
    this.router.navigate(["list-course"])
  }
  
  save() {
    this.courseService.registerCourse(this.curso).subscribe({
      next: (data) => {
        confirm("Datos actualizados con éxito")
        this.router.navigate(["list-course"])
      },
      error: (err) => {
        alert("Error al actualizar los datos")
      },
      complete: () => {
        // this.isLoading = false;
      },
    })
  }

}



