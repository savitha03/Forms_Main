import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  standalone: false,
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  @Input() isUpdate!: boolean;

  @Input() UserDetails: any;

  @Output() actionEmitter = new EventEmitter();

  formValidation={
    name:"",
    age:"",
    dob:"",
    gender:"",
  }

  public isValidated=false

  submitDetails() {
    this.isValidated=false

    if(!this.UserDetails.name){
      this.formValidation.name = "User Name is required"
      this.isValidated=true
    }else{
      this.formValidation.name = ""
    }

    if(!this.UserDetails.age){
      this.formValidation.age =" User Age is required"
      this.isValidated=true
    }else{
      this.formValidation.age = ""
    }

    if(!this.UserDetails.dob){
      this.formValidation.dob =" User Date of Birth is required"
      this.isValidated=true
    }else{
      this.formValidation.dob = ""
    }

    if(!this.UserDetails.gender){
      this.formValidation.gender =" User Gender is required"
      this.isValidated=true
    }else{
      this.formValidation.gender = ""
    }

    if(this.isValidated) return;
    
    const load = {
      type: 'SUBMIT',
      value: this.UserDetails,
    };
    this.actionEmitter.emit(load);
  }

  updateDetails() {
    this.isValidated=false
    
    if(!this.UserDetails.name){
      this.formValidation.name = "User Name is required"
      this.isValidated=true
    }else{
      this.formValidation.name = ""
    }

    if(!this.UserDetails.age){
      this.formValidation.age =" User Age is required"
      this.isValidated=true
    }else{
      this.formValidation.age = ""
    }

    if(!this.UserDetails.dob){
      this.formValidation.dob =" User Date of Birth is required"
      this.isValidated=true
    }else{
      this.formValidation.dob = ""
    }

    if(!this.UserDetails.gender){
      this.formValidation.gender =" User Gender is required"
      this.isValidated=true
    }else{
      this.formValidation.gender = ""
    }

    if(this.isValidated) return;
    const load = {
      type: 'UPDATE',
      value: this.UserDetails,
    };

    this.actionEmitter.emit(load);
  }
}
