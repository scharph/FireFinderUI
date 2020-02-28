import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentComponent } from './current/current.component';


const routes: Routes = [
{
  path: 'current',
  component: CurrentComponent
},
{
  path: 'index.html',
  redirectTo: 'current',
  pathMatch: 'full'
},
{
  path: '',
  redirectTo: 'current',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
