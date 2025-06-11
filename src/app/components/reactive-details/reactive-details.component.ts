import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reactive-details',
  standalone: false,
  templateUrl: './reactive-details.component.html',
  styleUrl: './reactive-details.component.css'
})
export class ReactiveDetailsComponent implements OnInit{

  @Input()reactiveForm:any;
  @Input()empDetails:any;
  @Input() isUpdate!:boolean;
  @Output() actionEmitter= new EventEmitter();
  constructor(){}
  ngOnInit(): void {
    
  }
  submitDetails(){
    const load={
      type:'SUBMIT',
      value:this.empDetails
    };
    this.actionEmitter.emit(load);
  }

  updateDetails(){
    const load={
      type:'UPDATE',
      value:this.empDetails
    };
    this.actionEmitter.emit(load);
  }
}
