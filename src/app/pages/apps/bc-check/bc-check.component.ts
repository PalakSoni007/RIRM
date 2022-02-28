import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { bcCheck } from './interfaces/bc-check.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import { bcCheckData, bcLabels } from '../../../../static-data/bc-check-data';
import { bcCheckCreateUpdateComponent } from './create-bc-check/add-bc-check.component';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icnote from '@iconify/icons-ic/twotone-note';
import icSearch from '@iconify/icons-ic/twotone-search';
import icAdd from '@iconify/icons-ic/twotone-add';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import { SelectionModel } from '@angular/cdk/collections';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icFolder from '@iconify/icons-ic/twotone-folder';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger40ms } from '../../../../@vex/animations/stagger.animation';
import { FormControl } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { MatSelectChange } from '@angular/material/select';
import theme from '../../../../@vex/utils/tailwindcss';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icMap from '@iconify/icons-ic/twotone-map';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icpicture_as_pdf from '@iconify/icons-ic/twotone-picture-as-pdf';
import icsend from '@iconify/icons-ic/twotone-send';
import { Router , ActivatedRoute} from '@angular/router';


@Component({
  selector: 'vex-bc-check',
  templateUrl: './bc-check.component.html',
  styleUrls: ['./bc-check.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger40ms
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard'
      } as MatFormFieldDefaultOptions
    }
  ]
})
export class bcCheckComponent implements OnInit, AfterViewInit, OnDestroy {

  layoutCtrl = new FormControl('boxed');
  subject$: ReplaySubject<bcCheck[]> = new ReplaySubject<bcCheck[]>(1);
  data$: Observable<bcCheck[]> = this.subject$.asObservable();
  EnterpriceUsers: bcCheck[];
  @Input()
  columns: TableColumn<bcCheck>[];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  request_list: MatTableDataSource<bcCheck> | null;
  selection = new SelectionModel<bcCheck>(true, []);
  searchCtrl = new FormControl();
  labels = bcLabels;
  icPhone = icPhone;
  icMail = icMail;
  icMap = icMap;
  icEdit = icEdit;
  icSearch = icSearch;
  icDelete = icDelete;
  icAdd = icAdd;
  icnote = icnote;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icFolder = icFolder;
  icDownload = icDownload;
  icsend = icsend;
  icpicture_as_pdf = icpicture_as_pdf;
  theme = theme;
  local_role_type:any;
  UnreadEmail = 0;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dialog: MatDialog,
              
              private router: Router,) {
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit()
  {
    this.columns = [
      { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
      { label: 'Subject', property: 'EmailSubject', type: 'text', visible: true },
      { label: 'From Email', property: 'FromEmail', type: 'text', visible: true },
      { label: 'To Email', property: 'ToEmail', type: 'text', visible: true },
      { label: 'Date', property: 'date', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
      // { label: 'Actions', property: 'actions', type: 'button', visible: true }
    ];
    
    this.request_list = new MatTableDataSource();
    this.form_list();
  }

  form_list()
  {
    this.request_list.data = bcCheckData;
    let a = 0;
    this.request_list.data.forEach(function(number) {
      if(number['Status'] == 'Unread')
      {
        a++;
      }
    });
    this.UnreadEmail = a;
  }

  ngAfterViewInit() {
    this.request_list.paginator = this.paginator;
    this.request_list.sort = this.sort;
  }

  createBC() {
    this.dialog.open(bcCheckCreateUpdateComponent).afterClosed().subscribe((customer: bcCheck) => {
      var NewEmail = localStorage.getItem('NewEmail');
      if(NewEmail)
      {
        var data = JSON.parse(NewEmail);
        var list = this.request_list.data
        list.unshift(data);
        this.request_list.data = list;
        console.log(this.request_list.data);
      }
    });
    console.log('dgdfgfdgfdg' + this.request_list.data);
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.request_list.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.request_list.data.forEach(row => this.selection.select(row));
  }

  onLabelChange(change: MatSelectChange, row: bcCheck) {
    const index = this.EnterpriceUsers.findIndex(c => c === row);
    // this.EnterpriceUsers[index].labels = change.value;
    this.subject$.next(this.EnterpriceUsers);
  }

  delete()
  {
    var list = this.request_list.filteredData;
    for(var a = 0; a<this.selection.selected.length; a++)
    {
      let index = list.findIndex(obj => obj.id ==this.selection.selected[a]['id']);
      console.log(index);
      list.splice(index,1);      
    }
    this.request_list.data = list; 
    this.selection.clear();
  }

  ViewEmail(id)
  {
    console.log(id);
    var Check = bcCheckData.find(c => c.id === id);
    if(Check)
    {
      if(Check.Status == 'Unread')
      {
        this.UnreadEmail = this.UnreadEmail - 1;
      }
    }

    localStorage.setItem('ViewEmailId', id);
    this.router.navigate(['/apps/scrumboard']);
  }

  ngOnDestroy() {
  }
}
