import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  newPrimary: any;
  newSecondary: any;
  editPId: any;
  editedPrimary: any;
  primaryCollection : [];
  selectedPrimary : any;
  showBool = false;
  average : any;

  constructor(private _httpService:HttpService){}
  ngOnInit(){
  this.newPrimary = {name: "", url: ""}
  this.newSecondary = {content: "", rating:"1"}
  this.editedPrimary = {name: "", url: ""}
  }
  getPrimaryCollection(){
    let observable = this._httpService.getPrimaries();
    observable.subscribe(data => {
    this.primaryCollection = data['data'];
    })
  }
  onButtonClick(): void {
    this.getPrimaryCollection();
  }
  onButtonShow(primary): void {
  this.selectedPrimary = primary
  var sum = 0;
  for(var i = 0; i < primary.comment.length; i++){
    sum += parseInt(primary.comment[i].rating, 10);
  }
  this.average = sum / primary.comment.length;
  this.selectedPrimary.average = this.average
  }
  onSubmit() {
  let observable = this._httpService.addNew(this.newPrimary);
  observable.subscribe(data => {
  this.newPrimary = {name: "", url: ""}
  })
  this.getPrimaryCollection();
  }
  onSecondarySubmit(id) {
  let observable = this._httpService.addNewSecondary(id, this.newSecondary);
  observable.subscribe(data => {
  this.newSecondary = {content: "", rating: "1"}
  })
  this.getPrimaryCollection();
  }
  onButtonDel(id): void {
  let observable = this._httpService.deletePrimary(id);
  observable.subscribe(data => {
  })
  this.getPrimaryCollection();
  }
  onButtonEdit(id){
  this.showBool = true;
  this.editPId = id
  }
  onEdit(id) {
  let observable = this._httpService.editPrimary(id, this.editedPrimary);
  observable.subscribe(data => {
  this.editedPrimary = {name: "", url: ""}
  })
  this.getPrimaryCollection();
  }
}
