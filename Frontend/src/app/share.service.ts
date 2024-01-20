import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private clientInfo: any;
   
  private url = 'http://127.0.0.1:3000/';
  constructor(private http: HttpClient) { }

  getClientInfo(): any {
    return this.clientInfo; // Getter to retrieve clientInfo
  }

  setClientInfo(clientInfo: any): void {
    this.clientInfo = clientInfo; // Setter to save clientInfo
  }

  //get all subjects
  getsubjects() {
    return this.http.get(this.url + 'subject/getall');
  }
  //save the clientinfo in the first ajout 
  saveclientinfo(clientInfo: any) {
    return this.clientInfo = clientInfo;
  }
  //create reclamation 
  createRec(reclamation: any){
    return this.http.post(this.url + 'reclamation/ajout',reclamation);
  }
  //get all reclamations 
  getreclamations(){
    return this.http.get(this.url + 'reclamation/getall');
  }
}
