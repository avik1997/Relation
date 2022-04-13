import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() imageUrl:any;

  @Output() customeChange:any=new EventEmitter();

  public onSubmit(event:any){
    // console.log(event);
    this.customeChange.emit("Image component");
  }
  
}
