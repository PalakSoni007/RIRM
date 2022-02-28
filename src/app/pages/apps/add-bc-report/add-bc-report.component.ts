import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import icMail from '@iconify/icons-ic/twotone-mail';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icAdd from '@iconify/icons-ic/twotone-add';
import icpicture_as_pdf from '@iconify/icons-ic/twotone-picture-as-pdf';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { stagger60ms } from '../../../../@vex/animations/stagger.animation';


@Component({
  selector: 'vex-add-bc-report',
  templateUrl: './add-bc-report.component.html',
  styleUrls: ['./add-bc-report.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class AddBcReportComponent implements OnInit {
  icMail = icMail;
  icPhone = icPhone;
  icAdd = icAdd;
  icpicture_as_pdf = icpicture_as_pdf;

  constructor() { }

  selectCtrl: FormControl = new FormControl();

  ngOnInit() {
  }

}