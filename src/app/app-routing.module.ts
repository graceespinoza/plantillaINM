import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { EditarUsuarioComponent } from './pages/usuario/editar-usuario/editar-usuario.component';
import { AuthGuard } from 'src/AuthGuard';
import { UnauthorizeComponent } from './pages/unauthorize/unauthorize.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/usuario/profile/profile.component';
import { ChangepassComponent } from './pages/usuario/changepass/changepass.component';
import { InmuebleComponent } from './pages/inmueble/inmueble.component';
import { ReservaComponent } from './pages/reserva/reserva.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent ,
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
     canActivate: [AuthGuard], 
  },
  {
    path: 'usuario/editar',
    component: EditarUsuarioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'usuario/myprofile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'usuario/changepass',
    component: ChangepassComponent,
     canActivate: [AuthGuard],
  },
  {
    path: 'inmueble',
    component: InmuebleComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'inmueble/editar',
    component: InmuebleComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },  
  {
    path: 'reserva',
    component: ReservaComponent,
    canActivate: [AuthGuard],
  }, 
  {
    path: 'reserva/list',
    component: ReservaComponent,
    canActivate: [AuthGuard],
  }, 
  {
    path: 'unauthorize',
    component: UnauthorizeComponent,
  },  
  {
    path: '**',
    component: PageNotFoundComponent,
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
