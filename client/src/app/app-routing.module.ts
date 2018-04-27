// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
//
// const routes: Routes = [];
//
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }



import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { PetsComponent }      from './pets/pets.component';
import { PetDetailsComponent }  from './pet-details/pet-details.component';
import { PetEditComponent }  from './pet-edit/pet-edit.component';
import { PetNewComponent }  from './pet-new/pet-new.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: DashboardComponent },
  { path: 'contact_us', component: PetsComponent },
  { path: 'about_us', component: PetsComponent },
  { path: 'products/new', component: PetNewComponent },
  // { path: 'edit', component: PetEditComponent },
  { path: 'products/edit/:id', component: PetEditComponent },
  // { path: 'details', component: PetDetailsComponent },
  { path: 'products/:id', component: PetDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
