import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeDetailsService } from '../../service/employee-details.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-reactive',
  standalone: false,
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css',
})
export class ReactiveComponent implements OnInit {
  reactiveForm!: FormGroup;
  public empLists: any[] = [];
  public isUpdate: boolean = false;
  public empDetails = {
    name: '',
    age: '',
    dob: '',
    role: '',
    gender: '',
    id: '',
  };

  constructor(
    private fb: FormBuilder,
    private EmployeeDetailsService: EmployeeDetailsService
  ) {}

  ngOnInit() {
    this.formBuilder();
    this.getEmployeesDetails();
  }

  formBuilder() {
    this.reactiveForm = this.fb.group({
     id:[''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      roles: this.fb.group({
        frontend: [false],
        backend: [false],
        fullstack: [false],
      }),
      skills: [[]],
    });
  }

  detailsActionEmitter(event: any) {
    switch (event.type) {
      case 'SUBMIT': {
        // console.log(this.reactiveForm.get("frontend")?.value);

        const reactiveForm = this.reactiveForm.getRawValue();
        const selectedRole: string[] = [];
        if (reactiveForm.roles.frontend) selectedRole.push('frontend');
        if (reactiveForm.roles.backend) selectedRole.push('backend');
        if (reactiveForm.roles.fullstack) selectedRole.push('fullstack');
        // console.log(selectedRole);
        this.reactiveForm.get('skills')?.patchValue(selectedRole);

        const updatedForm = this.reactiveForm.getRawValue();
        updatedForm.id= uuidv4();
        console.log(updatedForm);
        
        this.EmployeeDetailsService.saveEmployeesDetails(updatedForm).subscribe(
          (data) => {
            // console.log(data);
            this.getEmployeesDetails()
            this.reactiveForm.reset();
          }
        );
        console.log(this.reactiveForm.getRawValue());
        break;
      }

      
      case 'UPDATE': {
        const reactiveForm = this.reactiveForm.getRawValue();

        const selectedRole: string[] = [];
        if (reactiveForm.roles.frontend) selectedRole.push('frontend');
        if (reactiveForm.roles.backend) selectedRole.push('backend');
        if (reactiveForm.roles.fullstack) selectedRole.push('fullstack');
        this.reactiveForm.get('skills')?.patchValue(selectedRole);

        const updatedForm = this.reactiveForm.getRawValue();
        console.log(updatedForm);
        
        this.EmployeeDetailsService.updateEmployeesDetails(
          updatedForm.id,
          updatedForm
        ).subscribe((data) => {
          // console.log('Updated:', data);
          this.getEmployeesDetails()

          // const index = this.empLists.findIndex(
          //   (emp) => emp.id === updatedForm.id
          // );
          // if (index !== -1) {
          //   this.empLists[index] = { ...updatedForm };
          // }

          this.reactiveForm.reset();
          this.isUpdate = false;
        });
        break;
      }
    }
  }

  getEmployeesDetails() {
    this.EmployeeDetailsService.getEmployeesDetails().subscribe((data) => {
      // console.log(data);
      this.empLists = data;
    });
  }

  listActionEmitter(event: any) {
    const empId = event.id;
    console.log(empId);
    
    switch (event.type) {
      case 'DELETE': {
        this.EmployeeDetailsService.deleteEmployeesDetails(empId).subscribe(
          () => {
            let otherThanDelete = this.empLists.filter(
              (emp) => emp.id !== empId
            );
            this.empLists = otherThanDelete;
          }
        );
        break;
      }
      case 'LIST_UPDATE': {
        this.isUpdate = true;
        this.empLists.forEach((data) => {
          if (data.id === empId) {
            this.reactiveForm.patchValue(data);
          }
        });
        break;
      }
    }
  }
}
