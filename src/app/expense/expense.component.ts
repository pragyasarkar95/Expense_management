import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { ChangeDetectorRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  data: any;
  budgetdata: any;
  expense: Array<any> = [];
  expense_list: Array<any> = [];
  name: any;
  amount: any;
  category: any;
  date: any;
  p: number = 1;
  collection: Array<any> = [];
  rowDataMainForm: any;
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public categoriesChartOptions: ChartOptions = {
    responsive: true,
  };

  public pieChartLabels: Label[] = [['Total', 'Budget'], ['Expensive']];
  public pieChartData: SingleDataSet = [20000, 12000];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public categoriesChartLabels: Label[] = [['Total', 'Spend']];
  public categoriesChartData: SingleDataSet = [2000];
  public categoriesChartType: ChartType = 'pie';
  public categoriesChartLegend = true;
  public categoriesChartPlugins = [];

  add_expense(category, name, amount, date) {
    this.expense.push({ 'category': category, 'name': name, 'amount': amount, 'date': date })
    localStorage.setItem("expense", JSON.stringify(this.expense));
    this.toastr.success('Successfully Added', '', {
      timeOut: 3000
    });
    this.category = "";
    this.name = "";
    this.amount = "";
    this.date = "";
    this.ngOnInit();
  }

  delete_expense(index) {
    this.expense_list.splice(index, 1); 
  }
  constructor(private toastr: ToastrService, private changeDetectorRef: ChangeDetectorRef) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
  ngOnInit() {
    let list = JSON.parse(localStorage.getItem("expense"));
    console.log("list", list);
    console.log("list", list.length);
    for (let i = 0; i < list.length; i++) {
      this.expense_list.push({ category: list[i].category, name: list[i].name, amount: list[i].amount, date: list[i].date })
    }
    console.log(this.expense_list);

  }

  clear() {
    this.category = "";
    this.name = "";
    this.amount = "";
    this.date = "";
    this.toastr.success('Cleared', '', {
      timeOut: 3000
    });

    for (let i = 1; i <= 100; i++) {
      this.expense_list.push(`item ${i}`);
    }
  }
}
