import { Component, OnInit } from '@angular/core';
import {Router,RouterModule,Routes} from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }
  home_page(){
   // alert("hey");
    this.router.navigate(['home/expense'])
  }
  settings_page(){
    // alert("settings");
    this.router.navigate(['/home/settings'])
  }
  profile_page(){
    this.router.navigate(['/home/profile'])
  }

}
