import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiogenesComponent } from './servicios/diogenes/diogenes.component';
import { HomeComponent } from './start/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component:  HomeComponent},
  { path: 'diogenes', component: DiogenesComponent},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
