import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffichageopComponent } from '../components/affichageop/affichageop.component';
import { StudentComponent } from '../components/student/student.component';
import { TableStudentComponent } from '../components/table-student/table-student.component';

const routes: Routes = [
  {path :"studentMain" ,component:StudentComponent },

  {path:"detailsStud" , component: TableStudentComponent},
  {path:"optcompont/:sexe" , component: AffichageopComponent},

  {path:"", redirectTo:"studentMain", pathMatch:"full"}
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
