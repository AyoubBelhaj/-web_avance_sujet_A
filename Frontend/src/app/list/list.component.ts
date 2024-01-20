import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

  reclamations : any ;
  constructor(public shared : ShareService){}
  ngOnInit(): void {
    this.shared.getreclamations()
          .subscribe(
            res => {
              this.reclamations = res;
              console.log(res);
            },
            err => {
              console.log(err);
            }
          )
  }
}
