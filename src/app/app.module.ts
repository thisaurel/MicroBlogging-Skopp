import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './features/accueil/accueil.component';
import { ProfilComponent } from './features/profil/profil.component';
import { EnregistrementsComponent } from './features/enregistrements/enregistrements.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ProfilComponent,
    EnregistrementsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
