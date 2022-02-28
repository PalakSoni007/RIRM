import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { EnterpriceAccount } from './interfaces/enterprice-account-list.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn } from '../../../../@vex/interfaces/table-column.interface';
import { EnterpriceAccountCreateUpdateComponent } from './enterprice-account-create-update/enterprice-account-create-update.component';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
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

@Component({
  selector: 'vex-enterprice-account-list',
  templateUrl: './enterprice-account-list.component.html',
  styleUrls: ['./enterprice-account-list.component.scss'],
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
export class EnterpriceAccountComponent implements OnInit, AfterViewInit, OnDestroy {

  layoutCtrl = new FormControl('boxed');

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<EnterpriceAccount[]> = new ReplaySubject<EnterpriceAccount[]>(1);
  data$: Observable<EnterpriceAccount[]> = this.subject$.asObservable();
  EnterpriceUsers: EnterpriceAccount[];

  @Input()
  columns: TableColumn<EnterpriceAccount>[] = [
    // { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Status', property: 'status', type: 'button', visible: true },
    { label: 'Company Name', property: 'churchName', type: 'text', visible: true },
    { label: 'User Name', property: 'uName', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    { label: 'Purchased Credits ', property: 'pCredit', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium', 'text-center'] },
    { label: 'Remaining Credits', property: 'rCredit', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium', 'text-center'] },
    { label: 'Credits Limit', property: 'creditLimit', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium', 'text-center'] },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<EnterpriceAccount> | null;
  selection = new SelectionModel<EnterpriceAccount>(true, []);
  searchCtrl = new FormControl();
  status: any;
  
  icPhone = icPhone;
  icMail = icMail;
  icMap = icMap;
  icEdit = icEdit;
  icSearch = icSearch;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icFolder = icFolder;

  theme = theme;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dialog: MatDialog) {
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  /**
   * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
   * We are simulating this request here.
   */
  getData() {
  }

  ngOnInit() {
    

    this.dataSource = new MatTableDataSource();

    this.data$.pipe(
      filter<EnterpriceAccount[]>(Boolean)
    ).subscribe(EnterpriceUsers => {
      this.EnterpriceUsers = EnterpriceUsers;
      this.dataSource.data = EnterpriceUsers;
    });

    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createCustomer() {
    
  }

  // updateCustomer(customer: Customer) {
  //   this.dialog.open(CustomerCreateUpdateComponent, {
  //     data: customer
  //   }).afterClosed().subscribe(updatedCustomer => {
  //     /**
  //      * Customer is the updated customer (if the user pressed Save - otherwise it's null)
  //      */
  //     if (updatedCustomer) {
  //       /**
  //        * Here we are updating our local array.
  //        * You would probably make an HTTP request here.
  //        */
  //       const index = this.customers.findIndex((existingCustomer) => existingCustomer.id === updatedCustomer.id);
  //       this.customers[index] = new Customer(updatedCustomer);
  //       this.subject$.next(this.customers);
  //     }
  //   });
  // }

  deleteCustomer(EnterpriceUser: EnterpriceAccount) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
    this.EnterpriceUsers.splice(this.EnterpriceUsers.findIndex((existingCustomer) => existingCustomer.id === EnterpriceUser.id), 1);
    this.selection.deselect(EnterpriceUser);
    this.subject$.next(this.EnterpriceUsers);
  }

  deleteCustomers(EnterpriceUsers: EnterpriceAccount[]) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
    EnterpriceUsers.forEach(c => this.deleteCustomer(c));
  }

  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }

  onLabelChange(change: MatSelectChange, row: EnterpriceAccount) {
    const index = this.EnterpriceUsers.findIndex(c => c === row);
    this.EnterpriceUsers[index].labels = change.value;
    this.subject$.next(this.EnterpriceUsers);
  }

  ngOnDestroy() {
  }
}
