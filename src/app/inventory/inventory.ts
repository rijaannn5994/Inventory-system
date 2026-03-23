import { Component } from '@angular/core';
import { InventoryData } from '../inventory-data';

@Component({
  selector: 'app-inventory',
  providers: [InventoryData],
  imports: [],
  templateUrl: './inventory.html',
  styleUrl: './inventory.css',
})

export class Inventory {
  title = 'Inventory Page';

  constructor(public inventoryData: InventoryData) {}

  inventory_list: any = []
  page: number = 1;

  ngOnInit() {
    this.inventory_list = this.inventoryData.getInventory(this.page);
  }
  
  nextPage(){
    if(this.page < this.inventoryData.getLastPageNumber())
      this.page = this.page + 1;
      this.inventory_list = this.inventoryData.getInventory(this.page);
  }

  previousPage(){
    if(this.page > 1){
      this.page = this.page -1;
      this.inventory_list = this.inventoryData.getInventory(this.page);
    }
  }
}
