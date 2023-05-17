import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/Course';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-listar-curso',
  templateUrl: './listar-curso.html'
})
export class ListarCursoComponent implements OnInit {

  getCursos$: Observable<Course[]>;
  cursos: Course[]= [];
  
  constructor(
    private cursoService: CursoService,
    private router: Router,
  ) {
    this.getCursos$ = this.cursoService.getAllCourses(localStorage.getItem('userId'));
  }

  ngOnInit(): void {
   this.getCourses();
  }

  getCourses() {
    this.getCursos$.subscribe(cursos =>{
      this.cursos = cursos;  
    });
  }

  navegarCrearCurso(){
    this.router.navigate(['create-course']);
  }

  editar(course:Course){
    this.cursoService.setCourse(course);
    this.router.navigate(['edit-course']);
  }

  eliminar(course:Course){
    this.cursoService.deleteCourse(course.id).subscribe({
      next: (data) => {
        confirm("Curso eliminado con éxito");
        window.location.href = window.location.href;
      },
      error: (err) => {
        alert("Error al eliminar el curso")
      },
      complete: () => {
        // this.isLoading = false;
      },
    });
    this.router.navigate(['list-course']);
  }
}
