import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  registrationform=new FormGroup({
    Firstname:new FormControl('',[Validators.required,Validators.minLength(3)]),
    mobile:new FormControl(),
    email:new FormControl(),
    country:new FormControl()
  })

  public onSubmit(){
    console.log(this.registrationform);
  }

  get firstname(){
    return this.registrationform.get("Firstname");
  }

}
