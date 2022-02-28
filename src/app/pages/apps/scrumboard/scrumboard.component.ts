
import { FormBuilder, FormGroup ,Validators ,FormControl } from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';
import { trackById } from '../../../../@vex/utils/track-by';
import icNotifications from '@iconify/icons-ic/twotone-notifications';
import icInsertComment from '@iconify/icons-ic/twotone-insert-comment';
import icAttachFile from '@iconify/icons-ic/twotone-attach-file';
import { filter, map } from 'rxjs/operators';
import icAdd from '@iconify/icons-ic/twotone-add';
import { PopoverService } from '../../../../@vex/components/popover/popover.service';
import icClose from '@iconify/icons-ic/twotone-close';
import icStar from '@iconify/icons-ic/twotone-star';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';
import { stagger80ms } from '../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import { DropzoneModule, DropzoneComponent, DropzoneDirective,DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, TemplateRef} from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import icEdit from '@iconify/icons-ic/twotone-edit';
import icDelete from '@iconify/icons-ic/twotone-delete';
import icSearch from '@iconify/icons-ic/twotone-search';
import icFilterList from '@iconify/icons-ic/twotone-filter-list';
import icemail from '@iconify/icons-ic/twotone-email';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icFolder from '@iconify/icons-ic/twotone-folder';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icMail from '@iconify/icons-ic/twotone-mail';
import icMap from '@iconify/icons-ic/twotone-map';
import icPerson from '@iconify/icons-ic/twotone-person';
import { MatSnackBar } from '@angular/material/snack-bar';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {ThemePalette} from '@angular/material/core';
import { bcCheckData, bcLabels } from '../../../../static-data/bc-check-data';
import { bcCheck } from '../../apps/bc-check/interfaces/bc-check.model';
import { ThrowStmt } from '@angular/compiler';

/*formBuilder (n)*/
declare var $: any;
/*formBuilder (n)*/

@Component({
  selector: 'vex-scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.scss'],
  animations: [
    stagger80ms,
    fadeInUp400ms
  ]
})
export class ScrumboardComponent implements OnInit {

  layoutCtrl = new FormControl('boxed');

  static nextId = 100;

  add_update_form: FormGroup;

  board$ = this.route.paramMap.pipe(
    map(paramMap => +paramMap.get('scrumboardId')),
  );

  addCardCtrl = new FormControl();
  addListCtrl = new FormControl();

  trackById = trackById;
  icNotifications = icNotifications;
  icInsertComment = icInsertComment;
  icAttachFile = icAttachFile;
  icAdd = icAdd;
  icClose = icClose;
  icDelete = icDelete;
  icStar = icStar;
  icStarBorder = icStarBorder;

  public config: DropzoneConfigInterface = {
    autoReset: null,
    errorReset: null,
    cancelReset: null,
  };

  To:any;
  Bcc:any;
  Subject:any;
  Email_Body:any;

  constructor(private dialog: MatDialog,
              private route: ActivatedRoute,
              private popover: PopoverService,
              private formBuilders: FormBuilder,
              private router: Router,
              ) { }

  ngOnInit()
  {
    var Id = parseInt(localStorage.getItem('ViewEmailId'));

    var Check = bcCheckData.find(c => c.id === Id);

    this.To = Check.ToEmail;
    this.Bcc = Check.BCCEmail;
    this.Subject = Check.EmailSubject;
    this.Email_Body = Check.EmailBody;
  }
}
