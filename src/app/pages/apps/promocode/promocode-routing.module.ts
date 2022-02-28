import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { promoCodeComponent } from './promocode.component';

const routes: VexRoutes = [
  {
    path: '',
    component: promoCodeComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class promoCodeRoutingModule {
}
