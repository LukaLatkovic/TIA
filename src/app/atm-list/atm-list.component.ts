import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Employee } from '../_models/employee';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-atm-list',
  templateUrl: './atm-list.component.html',
  styleUrls: ['./atm-list.component.scss']
})
export class AtmListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'email',
    'gender',
    'jobtitle',
    'department',
  ];

  EmpData: Employee[] = [
    {
      id: 1,
      firstname: 'Mellie',
      lastname: 'Gabbott',
      email: 'mgabbott0@indiatimes.com',
      gender: 'Female',
      department: 'Support',
      jobtitle: 'Support Analyst',
      project: { name: 'project1', id: 1 },
    },
    {
      id: 2,
      firstname: 'Yehudi',
      lastname: 'Ainsby',
      email: 'yainsby1@w3.org',
      gender: 'Female',
      department: 'Support',
      jobtitle: 'Support Analyst',
      project: { name: 'project2', id: 2 },
    },
    {
      id: 3,
      firstname: 'Noellyn',
      lastname: 'Primett',
      email: 'nprimett2@ning.com',
      gender: 'Female',
      department: 'Human Resources',
      jobtitle: 'Project Manager',
      project: { name: 'project3', id: 3 },
    },
    {
      id: 4,
      firstname: 'Stefanie',
      lastname: 'Yurenin',
      email: 'syurenin3@boston.com',
      gender: 'Female',
      department: 'Marketing',
      jobtitle: 'Senior officer',
      project: { name: 'project4', id: 4 },
    },
    {
      id: 5,
      firstname: 'Stormi',
      lastname: "O'Lunny",
      email: 'solunny4@patch.com',
      gender: 'Female',
      department: 'Engineering',
      jobtitle: 'Software Engineer',
      project: { name: 'project5', id: 5 },
    },
    {
      id: 6,
      firstname: 'Keelia',
      lastname: 'Giraudy',
      email: 'kgiraudy5@nba.com',
      gender: 'Male',
      department: 'Marketing',
      jobtitle: 'Senior officer',
      project: { name: 'project6', id: 6 },
    },
    {
      id: 7,
      firstname: 'Ikey',
      lastname: 'Laight',
      email: 'ilaight6@wiley.com',
      gender: 'Male',
      department: 'Support',
      jobtitle: 'Support Analyst',
      project: { name: 'project7', id: 7 },
    },
    {
      id: 8,
      firstname: 'Adrianna',
      lastname: 'Ruddom',
      email: 'aruddom7@seattletimes.com',
      gender: 'Male',
      department: 'Marketing',
      jobtitle: 'Senior officer',
      project: { name: 'project8', id: 8 },
    },
    {
      id: 9,
      firstname: 'Dionysus',
      lastname: 'McCory',
      email: 'dmccory8@ox.ac.uk',
      gender: 'Male',
      department: 'Engineering',
      jobtitle: 'Software Engineer',
      project: { name: 'project9', id: 9 },
    },
    {
      id: 10,
      firstname: 'Claybourne',
      lastname: 'Shellard',
      email: 'cshellard9@rediff.com',
      gender: 'Male',
      department: 'Engineering',
      jobtitle: 'Software Engineer',
      project: { name: 'project10', id: 10 },
    },
  ];

  dataSource = new MatTableDataSource(this.EmpData);
  dataSourceWithPageSize = new MatTableDataSource(this.EmpData);

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) {}

  @ViewChild('paginator')
  paginator!: MatPaginator;
  @ViewChild('paginatorPageSize')
  paginatorPageSize!: MatPaginator;

  pageSizes = [3, 5, 7];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
  }

  ngOnInit(): void {}
}
