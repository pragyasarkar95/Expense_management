import { Component, OnInit } from '@angular/core';
import {Router,RouterModule,Routes} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  item:any;
  budget:any;
  budgetData: Array<any> = [];
  itemdata: Array<any> = [];
  items = [{name: 'Butter'}, {name: 'Noodles'}, {name: 'Cakes'}];
  constructor(private router:Router) { 
    this.item = this.items[1];
  }

  ngOnInit() {
  }
  home_page(){
    this.router.navigate(['home'])
  }
  updatetotalbudget(budget){
    this.budget=budget;
    this.budgetData.push({ 'budget': this.budget})
    console.log("budgetinfo",JSON.stringify(this.budgetData));
    localStorage.setItem("budgetinfo_info", JSON.stringify(this.budgetData));  
  }
  additems(item){
    this.item=item;
    this.itemdata.push({ 'budget': this.item})
    console.log("item_info",JSON.stringify(this.itemdata));
    localStorage.setItem("item_info", JSON.stringify(this.itemdata)); 


  }


}
