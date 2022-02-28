
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BcReportRoutingModule } from './bc-report-routing.module';

import { BcReportComponent } from './bc-report.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [BcReportComponent],
  imports: [
    CommonModule,
    BcReportRoutingModule,
    FlexLayoutModule,
    IconModule,
    MatButtonModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatIconModule
  ]
})
export class BcReportModule {
}
