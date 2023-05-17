import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ListDocentesComponent } from './pages/profesores-disponibles/list-docentes';
import { ListarCursoComponent } from './pages/curso/listar-curso/listar-curso.component';
import { CrearCursoComponent } from './pages/curso/crear-curso/crear-curso.component';
import { EditarCursoComponent } from './pages/curso/editar-curso/editar-curso.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', redirectTo:'/login' ,pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'home', component:HomeComponent},
  {path: 'perfil', component:PerfilComponent},
  {path: 'list-docent', component:ListDocentesComponent},
  {path: 'list-course', component:ListarCursoComponent},
  {path: 'create-course', component:CrearCursoComponent},
  {path: 'edit-course', component:EditarCursoComponent},
  {path: '**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
