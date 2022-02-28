
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBcReportRoutingModule } from './add-bc-report-routing.module';

import { AddBcReportComponent } from './add-bc-report.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule, MatSelectModule, MatDatepickerModule, MatAutocompleteModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { ContainerModule } from 'src/@vex/directives/container/container.module';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [AddBcReportComponent],
  imports: [
    CommonModule,
    AddBcReportRoutingModule,
    FlexLayoutModule,
    IconModule,
    MatButtonModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatIconModule,

    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatRadioModule,
    BreadcrumbsModule,
    ContainerModule,
    MatNativeDateModule
  ]
})
export class AddBcReportModule {
}
