import { Injectable } from '@angular/core';
import jsonData from '../assets/inventory.json';


@Injectable({
  providedIn: 'root',
})

export class InventoryData {
  pageSize: number = 5;


  getLastPageNumber(){
    return Math.ceil(jsonData.length/this.pageSize);

  }   

  getInventory(page:number){
    let pageStart = (page-1) * this.pageSize;
    let pageEnd = pageStart + this.pageSize;
    return jsonData.slice(pageStart,pageEnd);
  }
}
