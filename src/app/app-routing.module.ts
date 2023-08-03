import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionCuentasComponent } from './components/informacion-cuentas/informacion-cuentas.component';

const routes: Routes = [
  {
    path: '', 
    component: InformacionCuentasComponent,  
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
