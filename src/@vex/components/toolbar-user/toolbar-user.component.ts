import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PopoverService } from '../popover/popover.service';
import { ToolbarUserDropdownComponent } from './toolbar-user-dropdown/toolbar-user-dropdown.component';
import icPerson from '@iconify/icons-ic/twotone-person';
import theme from '../../utils/tailwindcss';

@Component({
  selector: 'vex-toolbar-user',
  templateUrl: './toolbar-user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarUserComponent implements OnInit {

  dropdownOpen: boolean;
  icPerson = icPerson;

  theme = theme;

  //login variables starts
  
  my_name:any = null;
  my_profile:any = null;
  local_role_id:any;

  //login variables ends

  constructor(private popover: PopoverService,
              private cd: ChangeDetectorRef,) { }

  ngOnInit() {
    
  }
  

  showPopover(originRef: HTMLElement) {
    if(originRef == null)
    {
      this.dropdownOpen = false;
      this.cd.markForCheck();
    }
    else
    {
      this.dropdownOpen = true;
      this.cd.markForCheck();

      const popoverRef = this.popover.open({
        content: ToolbarUserDropdownComponent,
        origin: originRef,
        offsetY: 12,
        position: [
          {
            originX: 'center',
            originY: 'top',
            overlayX: 'center',
            overlayY: 'bottom'
          },
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
          },
        ]
      });

      popoverRef.afterClosed$.subscribe(() => {
        this.dropdownOpen = false;
        this.cd.markForCheck();
      });
    }
  }
}
