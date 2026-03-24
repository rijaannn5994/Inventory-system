import { Injectable } from '@angular/core';
import jsonData from '../assets/supplier.json';


@Injectable({
  providedIn: 'root',
})

export class SupplierData {
  pageSize: number = 5;


  getLastPageNumber(){
    return Math.ceil(jsonData.length/this.pageSize);

  }   

  getSupplier(page:number){
    let pageStart = (page-1) * this.pageSize;
    let pageEnd = pageStart + this.pageSize;
    return jsonData.slice(pageStart,pageEnd);
  }
}
