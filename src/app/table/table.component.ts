import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgParent="https://thumbs.dreamstime.com/z/web-182027161.jpg";

  public eventFromImage(){
    console.log("data will be there");
  }

}
