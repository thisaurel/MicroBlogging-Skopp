import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './features/accueil/accueil.component';
import { ProfilComponent } from './features/profil/profil.component';
import { EnregistrementsComponent } from './features/enregistrements/enregistrements.component';

const routes: Routes = [
  {
    path: '',
    component: AccueilComponent
  },
  {
    path: 'profil',
    component: ProfilComponent
  },
  {
    path: 'enregistrements',
    component: EnregistrementsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
