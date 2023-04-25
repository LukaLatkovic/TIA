import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Atm } from '../_models/atm';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;
  atms: Atm[] = [];

  constructor(private http: HttpClient) { }

  getAtms(){
    if(this.atms.length > 0) return of(this.atms);
    return this.http.get<Atm[]>(this.baseUrl + 'atms').pipe(
      map(atms => {
        this.atms = atms;
        return atms;
      })
    )
  }

  getMember(username: String){
    const member = this.members.find(x => x.userName == username);
    if(member) return of(member);
    return this.http.get<Member>(this.baseUrl+ 'users/' + username);
  }

  updateMember(member: Member){
    return this.http.put(this.baseUrl + 'users', member).pipe(
      map(() => {
        const index = this.members.indexOf(member);
        this.members[index] = {...this.members[index], ...member}
      })
    )
  }
}
