import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inventory } from './inventory/inventory';
import jsonData from '../assets/inventory.json';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Inventory],
  templateUrl: './app.html',  
  styleUrl: './app.css'
})
export class App {
  title = 'Inventory';

  ngOnInit(){
    console.log(jsonData);
  }
}
