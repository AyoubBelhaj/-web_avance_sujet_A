import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajout-next',
  templateUrl: './ajout-next.component.html',
  styleUrls: ['./ajout-next.component.css']
})
export class AjoutNextComponent implements OnInit {
  subjects: any;
  reclamation = {
    clientInfo: {
      name: '',
      lastname: '',
      birthdate: '',
      civility: '',
      phone: 0,
      CIN: 0,
      RIB: 0,
    },
    subject: 'Compte',
    RecDetails: '',
    attachement: ''
  };

  
  constructor(public share: ShareService, public router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log("ngoninit works", this.share.getClientInfo());
    
    this.share.getsubjects()
      .subscribe(
        (res) => {
          this.subjects = res;
          console.log(res);
          
        },
        (err) => {
          console.log(err);
          
        }
      )
    this.reclamation.clientInfo = this.share.getClientInfo();
    
  }

  fetchSubjects() {
    this.share.getsubjects().subscribe(
      (data: any) => {
        this.subjects = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  file: any;
  selectfile(e: any) {
    this.file = e.target.files[0];
    console.log(this.file)
  }

  Confirm() {
    let formdata = new FormData();
    
    formdata.append("clientInfo", JSON.stringify(this.share.getClientInfo()));
    formdata.append("subject", this.reclamation.subject);
    formdata.append("RecDetails", this.reclamation.RecDetails);
    formdata.append('attachement', this.file);
    console.log(formdata);

    this.share.createRec(formdata)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);

        }
      )
    this.toastr.success("You successfully added your reclamation!!");
    this.router.navigate(['/list']); 

  }
}
