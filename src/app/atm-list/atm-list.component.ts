import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Atm } from '../_models/atm';
import { AtmService } from '../_services/atm.service';

@Component({
  selector: 'app-atm-list',
  templateUrl: './atm-list.component.html',
  styleUrls: ['./atm-list.component.scss']
})
export class AtmListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'termCode',
    'description',
    'isActive',
    'isCashIn'
  ];

  atmData: Atm[] = [];

  dataSource!: MatTableDataSource<any>;

  constructor(public accountService: AccountService, public atmService: AtmService) {}

  @ViewChild('paginator')
  paginator!: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(){
    this.getAtms();
  }

  getAtms() {
    this.atmService.getAtms()
    .subscribe((data: Atm[]) =>
    data.forEach(d=>{
      this.atmData.push(d);
    }));
    this.dataSource = new MatTableDataSource(this.atmData);
    console.log("this.dataSource");
    console.log(this.dataSource);
  }
}
