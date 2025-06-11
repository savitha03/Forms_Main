import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  @Input() userArray!: any[];
  // @Input() userLists!: any[];

  @Input() userLists: any[] = [];

  @Output() actionEmitter = new EventEmitter();

  deleteUser(userId: number) {
    const payload = {
      type: 'DELETE',
      id: userId,
    };
    this.actionEmitter.emit(payload);
  }

  editUser(userId: number) {
    const payload = {
      type: 'UPDATE',
      id: userId,
    };
    this.actionEmitter.emit(payload);
  }
}
