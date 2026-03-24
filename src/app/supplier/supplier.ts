import { Component } from '@angular/core';
import { SupplierData } from '../supplier-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-supplier',
  imports: [RouterLink],
  providers: [SupplierData],  
  templateUrl: './supplier.html',
  styleUrl: './supplier.css',
})

export class Supplier {
  title = 'Supplier Page';
  
    constructor(public supplierData: SupplierData) {}
  
    supplier_list: any = []
    page: number = 1;
  
    ngOnInit() {
      this.supplier_list = this.supplierData.getSupplier(this.page);
    }
    
    nextPage(){
      if(this.page < this.supplierData.getLastPageNumber())
        this.page = this.page + 1;
        this.supplier_list = this.supplierData.getSupplier(this.page);
    }
  
    previousPage(){
      if(this.page > 1){
        this.page = this.page -1;
        this.supplier_list = this.supplierData.getSupplier(this.page);
      }
    }
}
