import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
constructor(private _http: HttpClient) {
    this.getPrimaries();
}
getPrimaries(){
return this._http.get('/cakes');
}
getPrimary(id){
return this._http.get('/cake/'+id);
}
addNew(x){
return this._http.post('/cake', x)
}
addNewSecondary(id, x){
return this._http.post('/comment/'+id, x)
}
editPrimary(id,editedPrimary){
return this._http.post('/edit/' + id, editedPrimary)
}
deletePrimary(id){
return this._http.delete('/remove/' + id, id)
}
}
