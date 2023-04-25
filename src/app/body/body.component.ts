import { Component } from '@angular/core';
import { INavbarData } from './helper';
import { Router } from '@angular/router';
import { navbarData } from './nav-data';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  opened: boolean | undefined = true;
  navData = navbarData;
  multiple: boolean = false;

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  getActiveClass(data: INavbarData): string {
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

  handleClick(item: INavbarData): void {
    this.shrinkItems(item);
    item.expanded = !item.expanded
  }

  shrinkItems(item: INavbarData): void {
    if (!this.multiple) {
      for(let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
    this.toastr.info('Uspesno ste se izlogovali iz aplikacije');
  }
}

/**
 *
 */





