import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { Account } from './_models/account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TIAFront';

  constructor(private accountService: AccountService) {

  }

  ngOnInit(): void {
    this.setCurrentUser();
  }



  setCurrentUser(){
    const userString = localStorage.getItem('user');
    if(!userString) return;
    const user: Account = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }
}
