import { BrowseComponent } from './browse/browse.component';

import { LibraryComponent } from './library/library.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"create",pathMatch:'full'},
  {path:'create',component:LibraryComponent},
  {path:'created',component:BrowseComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
