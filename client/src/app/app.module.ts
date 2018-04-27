// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { CurrencyPipe } from '@angular/common';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PetsComponent } from './pets/pets.component';
import { PetNewComponent } from './pet-new/pet-new.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';

// Service
import { PetService } from './pet.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PetsComponent,
    PetNewComponent,
    PetEditComponent,
    PetDetailsComponent,
    // CurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
      PetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
