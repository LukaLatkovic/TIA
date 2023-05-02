import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Atm } from '../_models/atm';
import { AccountService } from '../_services/account.service';
import { AtmService } from '../_services/atm.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-atm-new',
  templateUrl: './atm-new.component.html',
  styleUrls: ['./atm-new.component.scss']
})
export class AtmNewComponent implements OnInit {

  model: any = {};
  isHidden = true;

  termCodeFormControl = new FormControl('', [Validators.required]);
  descriptionFormControl = new FormControl('', [Validators.required]);
  isActiveFormControl = new FormControl(false);
  isCashInFormControl = new FormControl(false);
  cassette1FormControl = new FormControl('', [Validators.required]);
  cassette2FormControl = new FormControl('', [Validators.required]);
  cassette3FormControl = new FormControl('', [Validators.required]);
  cassette4FormControl = new FormControl('', [Validators.required]);

  constructor(public accountService: AccountService, public atmService: AtmService, private toastr: ToastrService) {}

  ngOnInit(): void {
  }


  toggleCashIn(){
    this.isHidden=!this.isHidden;
  }

  atmAdd(){
    console.log(this.model);
    if(this.termCodeFormControl.valid && this.descriptionFormControl.valid && this.isActiveFormControl.valid && this.isCashInFormControl.valid &&
      this.cassette1FormControl.valid && this.cassette2FormControl.valid && this.cassette3FormControl.valid && this.cassette4FormControl.valid){
        this.atmService.addAtm(this.model);
      }
      else{
        this.toastr.warning("Nisu sva polja ispravno popunjena!");
      }

  }

}
