import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterpriceAccountComponent } from './enterprice-account.component';


const routes: Routes = [
  {
    path: '',
    component: EnterpriceAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EPAccountRoutingModule {
}
