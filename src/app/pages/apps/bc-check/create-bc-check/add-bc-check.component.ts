import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { bcCheck } from '../interfaces/bc-check.model';
import icMoreVert from '@iconify/icons-ic/twotone-more-vert';
import icClose from '@iconify/icons-ic/twotone-close';
import icPrint from '@iconify/icons-ic/twotone-print';
import icEmail from '@iconify/icons-ic/twotone-email';
import icDownload from '@iconify/icons-ic/twotone-cloud-download';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPerson from '@iconify/icons-ic/twotone-person';
import icMyLocation from '@iconify/icons-ic/twotone-my-location';
import icLocationCity from '@iconify/icons-ic/twotone-location-city';
import icEditLocation from '@iconify/icons-ic/twotone-edit-location';
import iclabel from '@iconify/icons-ic/twotone-label';
import icconfirmation_number from '@iconify/icons-ic/twotone-confirmation-number';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {ThemePalette} from '@angular/material/core';
import {MatDialog} from '@angular/material/dialog';
import icnote from '@iconify/icons-ic/twotone-note';
import { bcCheckData, bcLabels } from '../../../../../static-data/bc-check-data';


@Component({
  selector: 'vex-add-bc-check',
  templateUrl: './add-bc-check.component.html',
  styleUrls: ['./add-bc-check.component.scss']
})
export class bcCheckCreateUpdateComponent implements OnInit {

  static id = 100;

  add_update_form: FormGroup;
  mode: 'create' | 'update' = 'create';

  icMoreVert = icMoreVert;
  icClose = icClose;

  icPrint = icPrint;
  icDownload = icDownload;
  icDelete = icDelete;
  icEmail = icEmail;

  icPerson = icPerson;
  icMyLocation = icMyLocation;
  icLocationCity = icLocationCity;
  icEditLocation = icEditLocation;
  iclabel = iclabel;
  icPhone = icPhone;
  icconfirmation_number = icconfirmation_number;
  icnote = icnote;

  //

  loader:boolean;
  church_name:any;
  color: ThemePalette = 'primary';
  spinner_mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  email_ids:any =[];

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<bcCheckCreateUpdateComponent>,              
              private dialog: MatDialog,
              private fb: FormBuilder,) {
  }

  ngOnInit() {

    var list = bcCheckData.length;
    const d = new Date();
    var datestring = d.getDate()  + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
    var fromemail = localStorage.getItem('LoginEmail')
    this.add_update_form = this.fb.group({
      id: [list++],
      FromEmail:[fromemail, Validators.required],
      ToEmail:['', Validators.required],
      BCCEmail:[''],
      EmailSubject:['', Validators.required],
      EmailBody:['', Validators.required],
      date: [datestring, Validators.required],
      Status:['UnRead', Validators.required],
    });

    console.log(this.add_update_form);
  }

  save() {
    var data = {
      id: this.add_update_form.value.id,
      FromEmail: this.add_update_form.value.FromEmail,
      ToEmail:this.add_update_form.value.ToEmail,
      BCCEmail:this.add_update_form.value.BCCEmail,
      EmailSubject:this.add_update_form.value.EmailSubject,
      EmailBody:this.add_update_form.value.EmailBody,
      date: this.add_update_form.value.date,
    }

    localStorage.setItem('NewEmail', JSON.stringify(this.add_update_form.value));
    this.dialogRef.close();
  }
  

  createCustomer() {
    // this.dialog.open(bcCreditComponent, { data: this.add_update_form.value }).afterClosed().subscribe(updatedCustomer => {
    //   this.dialogRef.close();
    // });
  }

  updateCustomer() {
    // this.dialog.open(bcCreditComponent, { data: '1' }).afterClosed().subscribe(updatedCustomer => {

    // });
    // this.dialogRef.close(customer);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
