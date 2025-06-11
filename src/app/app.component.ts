import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{

    title = 'forms';
  activeForm: 'template' | 'reactive' | null = null;
  // routeForm: string = '';  // initial empty or default
  constructor(public router: Router) {}

  ngOnInit(): void {

  }

  // setActiveForm(formType: 'template' | 'reactive') {
  //   if (this.activeForm === formType) {
  //     this.activeForm = null;
  //   } else {
  //     this.activeForm = formType;
  //   }
  // }


  // routeActiveForm(formsType: string) {
  //   this.routeForm = formsType;
  //   if (formsType === 'reactive') {
  //     this.router.navigate(['/reactive']);
  //   } else if (formsType === 'template') {
  //     this.router.navigate(['/template']);
  //   }
  // }
}


