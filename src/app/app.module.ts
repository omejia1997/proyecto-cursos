import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ListDocentesComponent } from './pages/profesores-disponibles/list-docentes';
import { ListarCursoComponent } from './pages/curso/listar-curso/listar-curso.component';
import { CrearCursoComponent } from './pages/curso/crear-curso/crear-curso.component';
import { EditarCursoComponent } from './pages/curso/editar-curso/editar-curso.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PerfilComponent,
    ListDocentesComponent,
    ListarCursoComponent,
    CrearCursoComponent,
    EditarCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
