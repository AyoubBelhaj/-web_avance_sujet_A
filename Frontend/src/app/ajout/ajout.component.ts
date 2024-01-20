import { Component, OnInit, ViewChild } from '@angular/core';
import { ShareService } from '../share.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.css'
})
export class AjoutComponent implements OnInit {


  clientInfo = {
    name: '',
    lastname: '',
    birthdate: '',
    civility: '',
    phone: 0,
    CIN: 0,
    RIB: 0
  };

  constructor(public share: ShareService, public router: Router, private toastr: ToastrService) { }

  ngOnInit() { }

  validClientInfo() {
    let valid: boolean = true;
    let message: string = '';
    if (this.clientInfo.name == '') {
      valid = false;
      message += "Invalid name";
    } else if (this.clientInfo.lastname == '') {
      valid = false;
      message +="Invalid lastname";
    } else if (this.clientInfo.birthdate == '') {
      valid = false;
      message += "Invalid birthdate";
    } else if (this.clientInfo.civility == '') {
      valid = false;
      message +="Invalid civility";
    } else if (this.clientInfo.phone <= 10000000) {
      valid = false;
      message +="Invalid phone number";
    } else if (this.clientInfo.CIN <= 10000000) {
      valid = false;
      message +="Invalid CIN";
    } else if (this.clientInfo.RIB <= 10000000000) {
      valid = false;
      message += "Invalid RIB";
    }
    if(valid == false){
      this.toastr.error(message);
    }
    return valid;
  }



  save() {
    if (this.validClientInfo()) {
      this.share.saveclientinfo(this.clientInfo);
      console.log(this.share.getClientInfo());
      this.router.navigate(['/next']);
    }


  }
}
