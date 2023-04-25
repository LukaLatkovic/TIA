import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from './../_services/account.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /**
   *
   */
  constructor(private accountService: AccountService, private toastr: ToastrService) {

  }

  canActivate(): Observable<boolean > {
    return this.accountService.currentUser$.pipe(
      map((user: any) => {
        if(user) return true;
        else{
          this.toastr.error('Niste autentifikovani!');
          return false;
        }
      })
    )
  }

}
