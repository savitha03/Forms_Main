import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TemplateComponent } from './container/template/template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveComponent } from './container/reactive/reactive.component';
import { ReactiveDetailsComponent } from './components/reactive-details/reactive-details.component';
import { ReactiveListComponent } from './components/reactive-list/reactive-list.component';


@NgModule({
  declarations: [AppComponent, UserDetailsComponent, UserListComponent, TemplateComponent, ReactiveComponent, ReactiveDetailsComponent, ReactiveListComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
