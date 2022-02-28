import { Component, OnInit } from '@angular/core';
import icMail from '@iconify/icons-ic/twotone-mail';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icAdd from '@iconify/icons-ic/twotone-add';
import icpicture_as_pdf from '@iconify/icons-ic/twotone-picture-as-pdf';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
@Component({
  selector: 'vex-bc-report',
  templateUrl: './bc-report.component.html',
  styleUrls: ['./bc-report.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class BcReportComponent implements OnInit {
  icMail = icMail;
  icPhone = icPhone;
  icAdd = icAdd;
  icpicture_as_pdf = icpicture_as_pdf;

  constructor() { }

  ngOnInit() {
  }

}