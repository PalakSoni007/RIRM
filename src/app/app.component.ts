import { Component, Inject, LOCALE_ID, Renderer2 } from '@angular/core';
import { ConfigService } from '../@vex/services/config.service';
import { Settings } from 'luxon';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { NavigationService } from '../@vex/services/navigation.service';
import icLayers from '@iconify/icons-ic/twotone-layers';
import icCheck from '@iconify/icons-ic/twotone-check';
import iclink from '@iconify/icons-ic/twotone-link';
import icpublic from '@iconify/icons-ic/twotone-public';
import icmobile_friendly from '@iconify/icons-ic/twotone-mobile-friendly';
import icdock from '@iconify/icons-ic/twotone-dock';
import icdvr from '@iconify/icons-ic/twotone-dvr';
import icsend from '@iconify/icons-ic/twotone-send';
import icsupervised_user_circle from '@iconify/icons-ic/twotone-supervised-user-circle';
import icpageview from '@iconify/icons-ic/twotone-pageview';
import icAssigment from '@iconify/icons-ic/twotone-assignment';
import iccontentcopy from '@iconify/icons-ic/twotone-content-copy';
import iccode from '@iconify/icons-ic/twotone-code';
import icdevices from '@iconify/icons-ic/twotone-devices';
import icemail from '@iconify/icons-ic/twotone-email';
import icPerson from '@iconify/icons-ic/twotone-person';
import { LayoutService } from '../@vex/services/layout.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SplashScreenService } from '../@vex/services/splash-screen.service';
import { Style, StyleService } from '../@vex/services/style.service';
import theme from '../@vex/utils/tailwindcss';
import icChromeReaderMode from '@iconify/icons-ic/twotone-chrome-reader-mode';
import { ConfigName } from '../@vex/interfaces/config-name.model';
import icspeaker_notes from '@iconify/icons-ic/twotone-speaker-notes';

@Component({
  selector: 'vex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vex';

  constructor(private configService: ConfigService,
              private styleService: StyleService,
              private renderer: Renderer2,
              private platform: Platform,
              @Inject(DOCUMENT) private document: Document,
              @Inject(LOCALE_ID) private localeId: string,
              private layoutService: LayoutService,
              private route: ActivatedRoute,
              private navigationService: NavigationService,
              private splashScreenService: SplashScreenService) {
    Settings.defaultLocale = this.localeId;

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }
    
    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('rtl') && coerceBooleanProperty(queryParamMap.get('rtl')))
    ).subscribe(queryParamMap => {
      this.document.body.dir = 'rtl';
      this.configService.updateConfig({
        rtl: true
      });
    });

    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('layout'))
    ).subscribe(queryParamMap => this.configService.setConfig(queryParamMap.get('layout') as ConfigName));

    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('style'))
    ).subscribe(queryParamMap => this.styleService.setStyle(queryParamMap.get('style') as Style));

    this.navigationService.items2 = [
      {
        type: 'link',
        label: 'Dashboard',
        route: '/bc-check',
        icon: icLayers
      },
      // {
      //   type: 'subheading',
      //   label: '',
      //   children: [
      //     {
      //       type: 'dropdown',
      //       label: 'CheckIn Location',
      //       icon: icAssigment,
      //       children: [
      //         {
      //           type: 'link',
      //           label: 'Site List',
      //           route: '/apps/invitation',
      //           icon: icemail
      //         },
      //         {
      //           type: 'link',
      //           label: 'CheckIn Location List',
      //           route: '/apps/enterprice'
      //         },
      //         {
      //           type: 'link',
      //           label: 'CheckIn Location Users List',
      //           route: '/apps/enterprice-user/id'
      //         },
      //       ]
      //     },
      //   ]
      // },
      // {
      //   type: 'subheading',
      //   label: '',
      //   children: [
      //     {
      //       type: 'dropdown',
      //       label: 'dasssssssssssss',
      //       icon: icLayers,
      //       children: [
      //         {
      //           type: 'link',
      //           label: 'Create Questionnaires ',
      //           route: '/apps/scrumboard'
      //         },
      //         {
      //           type: 'link',
      //           label: 'Questionnaires List',
      //           route: '/bc-check',
      //           icon: iccontentcopy
      //         }, 
      //       ]
      //     },
      //   ]
      // },
      // {
      //   type: 'link',
      //   label: 'Check Ins',
      //   route: '/user-checked-ins',
      //   icon: icpageview
      // },
      // {
      //   type: 'link',
      //   label: 'Devices',
      //   route: '/apps/devices',
      //   icon: icdevices
      // },
      // {
      //   type: 'link',
      //   label: 'User Management',
      //   route: '/user-management',
      //   icon: icPerson
      // },
    ];
  }
}
