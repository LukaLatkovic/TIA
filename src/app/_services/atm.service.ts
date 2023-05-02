import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Atm } from '../_models/atm';
import { Router, RouterModule } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AtmService {
  baseUrl = environment.apiUrl;
  atms: Atm[] = [];

  constructor(private http: HttpClient, public router: Router, private toastr: ToastrService) { }

  getAtms(): Observable<Atm[]>{
    return this.http.get<Atm[]>(this.baseUrl + '/Atm/getAllAtms')
  }

  addAtm(model: any){
    return this.http.post<Atm>(this.baseUrl + '/Atm/create-atm', model).subscribe({
      next: () => {
        this.router.navigateByUrl('atm/atm-list');
        this.toastr.success('Uspesno je kreiran novi bankomat u aplikaciji!');
      }

    })
  }

  atmStatusChange(atmid: number){
    return this.http.patch<any>(this.baseUrl + '/Atm/atmStatusChange', atmid).subscribe({
      next: () => {
        this.router.navigateByUrl('atm/atm-list', {skipLocationChange: true});
        this.toastr.success("Status bankomata je izmenjen!");
      }
    })
  }
  // getAtms(){
  //   return this.http.get<Atm[]>(this.baseUrl + '/Atm/getAllAtms').pipe(
  //     map(atms => {
  //       atms = atms;
  //       return atms;
  //     })
  //   )
  // }

  // getMember(username: String){
  //   const member = this.members.find(x => x.userName == username);
  //   if(member) return of(member);
  //   return this.http.get<Member>(this.baseUrl+ 'users/' + username);
  // }

  // updateMember(member: Member){
  //   return this.http.put(this.baseUrl + 'users', member).pipe(
  //     map(() => {
  //       const index = this.members.indexOf(member);
  //       this.members[index] = {...this.members[index], ...member}
  //     })
  //   )
  // }
}
