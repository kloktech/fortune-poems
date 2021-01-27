import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  // { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '', pathMatch: 'full', component: MainComponent},
  { path: '**', redirectTo: '', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
