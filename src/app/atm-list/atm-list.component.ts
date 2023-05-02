import { Atm } from './../_models/atm';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AccountService } from '../_services/account.service';
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
    'isCashIn',
    'Akcije'
  ];

  atmData: Atm[] = [];

  dataSource: MatTableDataSource<Atm> = new MatTableDataSource();

  @ViewChild('paginator')
  paginator!: MatPaginator;

  constructor(public accountService: AccountService, public atmService: AtmService, private _cd: ChangeDetectorRef) {}

  ngOnInit(){
    this.getAtms();
  }

  getAtms() {
    this.atmService.getAtms()
      .subscribe((data: Atm[]) => {
        this.atmData = data;
        this.dataSource = new MatTableDataSource(this.atmData);
        this.dataSource.paginator = this.paginator;
      });
  }

  changeAtmStatus(atmid: number){
    this.atmService.atmStatusChange(atmid);
  }
}
