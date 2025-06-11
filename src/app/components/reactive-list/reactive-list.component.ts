import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reactive-list',
  standalone: false,
  templateUrl: './reactive-list.component.html',
  styleUrl: './reactive-list.component.css',
})
export class ReactiveListComponent implements OnInit {
  @Input() empLists: any[] = [];
  
  @Output() actionEmitter = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}

  deleteEmployee(empId: number) {
    const payload = {
      type: 'DELETE',
      id: empId,
    };
    this.actionEmitter.emit(payload);
  }

  editEmployee(empId:number){
    const payload={
      type:'LIST_UPDATE',
      id:empId,
    };
    this.actionEmitter.emit(payload);
  }
}
