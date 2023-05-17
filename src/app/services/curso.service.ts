import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../models/Course';


const URL = "http://localhost:5000"
const COURSE = URL + '/courses';

@Injectable({
  providedIn: 'root'
})

export class CursoService {

  private course$$ = new BehaviorSubject<Course | null>(null);
  course$ = this.course$$.asObservable();

  constructor(private http: HttpClient) { }

  registerCourse(course:Course) {
    return this.http.post<any>(`${COURSE}/save_course`,course); 
  }

  public setCourse(course:Course) {
    this.course$$.next(course);
  }

  getAllCourses(userId:any){
    return this.http.get<Course[]>(`${COURSE}/coursesByTeacher/${userId}`);
  }

  deleteCourse(idCourse:any){
    return this.http.delete<Boolean>(`${COURSE}/delete/${idCourse}`);
  }
}
