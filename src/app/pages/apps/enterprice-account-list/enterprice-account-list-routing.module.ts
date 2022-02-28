import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { EnterpriceAccountComponent } from './enterprice-account-list.component';


const routes: VexRoutes = [
  {
    path: '',
    component: EnterpriceAccountComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterpriceAccountRoutingModule {
}
