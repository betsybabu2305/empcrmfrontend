import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { EmpupdateComponent } from './empupdate/empupdate.component';
import { EmpcreateComponent } from './empcreate/empcreate.component';

const routes: Routes = [
  {path:"",component:EmplistComponent},
  {path:'emp-detail/:id',component:EmpdetailComponent},
  {path:'emp-edit/:id',component:EmpupdateComponent},
  {path:'emp-add',component:EmpcreateComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
