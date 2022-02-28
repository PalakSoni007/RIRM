import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { BcReportComponent } from './bc-report.component';

const routes: VexRoutes = [
  {
    path: '',
    component: BcReportComponent,
    data: {
      toolbarShadowEnabled: true,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BcReportRoutingModule { }

