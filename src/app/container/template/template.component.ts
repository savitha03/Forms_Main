import { Component } from '@angular/core';
import { UserDetailsService } from '../../service/user-details.service';

@Component({
  selector: 'app-template',
  standalone: false,
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent {
  public userArray: any[] = [];
  public userLists: any[] = [];
  public isUpdate = false;
  public UserDetails = {
    name: '',
    age: '',
    dob: '',
    subscribe: '',
    gender: '',
    id: 0,
  };

  constructor(private userDetailsService: UserDetailsService) {}

  ngOnInit(): void {
    this.getUserLists();
  }

  detailsActionEmitter(event: any) {
    switch (event.type) {
      case 'SUBMIT': {
        const form = { ...event.value };
        const userDetail = {
          name: form.name,
          age: form.age,
          dob: form.dob,
          subscribe: form.subscribe,
          gender: form.gender,
        };

        this.userDetailsService
          .saveUserDetails(userDetail)
          .subscribe((data) => {
            this.userLists.push(data);
            this.UserDetails = {
              name: '',
              age: '',
              dob: '',
              subscribe: '',
              gender: '',
              id: 0,
            };
            console.log(this.userLists);
          });
        break;
      }
      case 'UPDATE': {
        const form = { ...event.value };
        const userDetail = {
          name: form.name,
          age: form.age,
          dob: form.dob,
          subscribe: form.subscribe,
          gender: form.gender,
        };
        this.userDetailsService

          .updateUserDetails(form.id, userDetail)
          .subscribe((data) => {
            this.userLists.forEach((user) => {
              if (data.id === user.id) {
                user.name = data.name;
                user.age = data.age;
                user.dob = data.dob;
                user.subscribe = data.subscribe;
                user.gender = data.gender;
              }
            });
            this.UserDetails = {
              name: '',
              age: '',
              dob: '',
              subscribe: '',
              gender: '',
              id: 0,
            };
            this.isUpdate = false;
          });
      }
    }
  }

  getUserLists() {
    this.userDetailsService.getUserDetails().subscribe((data) => {
      this.userLists = data;
      console.log(this.userLists);
    });
  }

  listActionEmitter(event: any) {
    const userId = event.id;
    switch (event.type) {
      case 'DELETE': {
        this.userDetailsService.deleteUserDetails(userId).subscribe(() => {
          let otherDelete = this.userLists.filter((data) => data.id !== userId);
          this.userLists = otherDelete;
        });
        break;
      }
      case 'UPDATE': {
        this.isUpdate = true;
        let userDetails = this.userLists.find((data) => data.id === userId);
        this.UserDetails = {
          name: userDetails.name,
          age: userDetails.age,
          dob: userDetails.dob,
          subscribe: userDetails.subscribe,
          gender: userDetails.gender,
          id: userDetails.id,
        };
      }
    }
  }
}
