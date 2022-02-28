import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { AddBcReportComponent } from './add-bc-report.component';

const routes: VexRoutes = [
  {
    path: '',
    component: AddBcReportComponent,
    data: {
      toolbarShadowEnabled: true,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AddBcReportRoutingModule { }

