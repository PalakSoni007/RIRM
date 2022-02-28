import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrumboardRoutingModule } from './scrumboard-routing.module';
import { ScrumboardComponent } from './scrumboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollbarModule } from '../../../../@vex/components/scrollbar/scrollbar.module';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { IconModule } from '@visurel/iconify-angular';
import { DateTokensModule } from '../../../../@vex/pipes/date-tokens/date-tokens.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ScrumboardDialogModule } from './components/scrumboard-dialog/scrumboard-dialog.module';
import { PopoverModule } from '../../../../@vex/components/popover/popover.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';

import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from '../../../../@vex/components/breadcrumbs/breadcrumbs.module';;
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ColorFadeModule } from '../../../../@vex/pipes/color/color-fade.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [ScrumboardComponent],
  imports: [
    CommonModule,
    ScrumboardRoutingModule,
    FlexLayoutModule,
    ScrollbarModule,
    MatButtonModule,
    DragDropModule,
    IconModule,
    DateTokensModule,
    MatTooltipModule,
    ScrumboardDialogModule,
    PopoverModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    ContainerModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    IconModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSelectModule,
    ColorFadeModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ]
})
export class ScrumboardModule {
}
