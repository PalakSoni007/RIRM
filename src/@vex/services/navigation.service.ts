import { Injectable } from '@angular/core';
import { NavigationDropdown, NavigationItem, NavigationLink, NavigationSubheading } from '../interfaces/navigation-item.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  items: NavigationItem[] = [];

  items2: NavigationItem[] = [];

  private _openChangeSubject = new Subject<NavigationDropdown>();
  openChange$ = this._openChangeSubject.asObservable();

  constructor() {}

  triggerOpenChange(item: NavigationDropdown) {
    this._openChangeSubject.next(item);
  }

  isLink(item: NavigationItem): item is NavigationLink {
    return item.type === 'link';
  }

  isDropdown(item: NavigationItem): item is NavigationDropdown {
    return item.type === 'dropdown';
  }

  isSubheading(item: NavigationItem): item is NavigationSubheading {
    return item.type === 'subheading';
  }

  //item-2

  triggerOpenChange2(item2: NavigationDropdown) {
    this._openChangeSubject.next(item2);
  }

  isLink2(item2: NavigationItem): item2 is NavigationLink {
    return item2.type === 'link';
  }

  isDropdown2(item2: NavigationItem): item2 is NavigationDropdown {
    return item2.type === 'dropdown';
  }

  isSubheading2(item2: NavigationItem): item2 is NavigationSubheading {
    return item2.type === 'subheading';
  }

}
