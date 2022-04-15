import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  currentDate=new Date();
  sqt:number=16;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public back(){
    this.router.navigate(["/"]);
  }
}
