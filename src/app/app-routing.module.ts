import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { ProyectoPruebaComponent } from './components/proyecto-prueba/proyecto-prueba.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'proyecto-prueba', component: ProyectoPruebaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
