import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './container/template/template.component';
import { ReactiveComponent } from './container/reactive/reactive.component';

const routes: Routes = [
  {path:'template',component:TemplateComponent},
  {path:'reactive',component:ReactiveComponent},
  {path:'',redirectTo:'template',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
